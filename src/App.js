import React, { useState, useEffect } from 'react';

import Grid from '@material-ui/core/Grid';

import OptionsDialog from './components/OptionsDialog';
import ApplicationBar from './components/ApplicationBar';
import CardBoard from './components/CardBoard';
import Header from './components/Header';
import cardTypes from './constants/cardTypes';
import WinDialog from './components/WinDialog';
import Version from './components/Version';

let isShowingCards = false;
let interval;

const App = (props) => {

  const [allCards, setAllCards] = useState([]);
  const [cardsOk, setCardsOk] = useState([]);
  const [timer, setTimer] = useState(0);
  const [attempts, setAttempts] = useState(0);
  const [numberCards, setNumberCards] = useState(4);
  const [dialogOptionsOpen, setDialogOptionsOpen] = useState(false);
  const [dialogWinOpen, setDialogWinOpen] = useState(false);
  const [gameWon, setGameWon] = useState(false);
  const [flipTime, setFlipTime] = useState(1000);
  const [isFirstClick, setIsFirstClick] = useState(false);

  const resetGame = () => {
    prepareCard();
    setIsFirstClick(false);
    clearInterval(interval);
    setCardsOk([]);
    setTimer(0);
    setAttempts(0);
    setGameWon(false);
    setDialogWinOpen(false);
  }

  const changeNumberCards = (event) => {
    resetGame();
    setNumberCards(event.target.value);
  };

  const changeFlipTime = (event) => {
    resetGame();
    setFlipTime(event.target.value);
  }

  const prepareCard = () => {
    // 4, 6, 12
    let duplicatedCards = duplicateElements(cardTypes.slice(0, numberCards));
    let shuffledCards = shuffleElements(duplicatedCards);
    setAllCards(shuffledCards);
  }

  const shuffleElements = (array) => {
    for (var i = array.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return JSON.parse(JSON.stringify(array));
  };

  const duplicateElements = (array) => {
    return JSON.parse(JSON.stringify(array.flatMap(i => [i, i])));
  };

  const deleteLastTwoElement = (array) => {
    array.splice(array.length - 1, array.length);
    return JSON.parse(JSON.stringify(array));
  };

  const successAttempt = (newAllCards, index, cardId) => {
    setAllCards(newAllCards);
    setCardsOk([...cardsOk, { index, id: cardId }]);
  };

  const failureAttempt = (newAllCards, index) => {
    isShowingCards = true;
    setTimeout(function () {
      newAllCards[index].turned = false;
      newAllCards[cardsOk[cardsOk.length - 1].index].turned = false;
      setAllCards(newAllCards);
      setCardsOk(deleteLastTwoElement(cardsOk));
      setAttempts(attempts => attempts + 1);
      isShowingCards = false;
    }, flipTime);
  };

  const initialiceTimer = () => {
    setIsFirstClick(true);
    interval = setInterval(() => {
      setTimer(timer => timer + 1);
    }, 1000);
  };

  const onClickCard = (index, cardId) => () => {
    if (isShowingCards)
      return;

    let newAllCards = JSON.parse(JSON.stringify(allCards));
    newAllCards[index].turned = !newAllCards[index].turned;
    setAllCards(newAllCards);

    if (allCards.filter(x => x.turned === true).length % 2 === 0)
      setCardsOk([...cardsOk, { index, id: cardId }]);
    else if (cardsOk[cardsOk.length - 1].id === cardId)
      successAttempt(newAllCards, index, cardId);
    else
      failureAttempt(newAllCards, index);

    if (!isFirstClick)
      initialiceTimer();
  };

  const endGame = () => {
    clearInterval(interval);
    setGameWon(true);
    setDialogWinOpen(true);
  }

  useEffect(() => {
    resetGame();

    return () => {
      clearInterval(interval);
    }
  }, [numberCards]);

  useEffect(() => {
    if (cardsOk.length === allCards.length && isFirstClick) {
      endGame();
    }
  }, [cardsOk]);

  const timerFormat = () => {
    let minutes = ~~((timer % 3600) / 60);
    let seconds = ~~timer % 60;

    return (minutes < 10 ? "0" : "") + minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
  };

  return (
    <React.Fragment>
      <ApplicationBar
        setDialogOpen={setDialogOptionsOpen}
        resetGame={resetGame}
        showRetry={isFirstClick}
      />
      <Grid container justify="center">
        <Grid item xs={11} sm={11}>
          <Grid container spacing={3} justify="center">
            <Grid item xs={12}>
              <Header 
                timerFormat={timerFormat} 
                attempts={attempts} 
                gameWon={gameWon}
              />
            </Grid>
            <Grid item xs={12}>
              <Grid container justify="center" alignItems="center">
                <Grid item xs={12} sm={11}>
                  <CardBoard 
                    allCards={allCards} 
                    onClickCard={onClickCard} 
                  />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <OptionsDialog
        dialogOpen={dialogOptionsOpen}
        setDialogOpen={setDialogOptionsOpen}
        changeNumberCards={changeNumberCards}
        numberCards={numberCards}
        flipTime={flipTime}
        changeFlipTime={changeFlipTime}
      />
      <WinDialog
        dialogOpen={dialogWinOpen}
        setDialogOpen={setDialogWinOpen}
        timerFormat={timerFormat}
        attempts={attempts}
        resetGame={resetGame}
      />
      <Version/>
    </React.Fragment>
  );
}

export default App;