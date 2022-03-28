import React from 'react';

import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

import Card from '../components/Card';
import styles from '../styles/styles';

const CardBoard = (props) => {
    const { allCards, onClickCard } = props;

    const classes = styles();

    return (
        <Paper elevation={3} className={classes.cardContainer} >
            <Grid container spacing={1} justify="center" >
                {
                    allCards.length === 24 ?
                        allCards.map((card, index) => {
                            return (
                                <Grid key={index} item xs={2} sm={2} md={2} lg={1} >
                                    <Card index={index} id={card.id} img={card.img} turned={card.turned} onClickCard={onClickCard} />
                                </Grid>
                            );
                        })
                        :
                        allCards.map((card, index) => {
                            return (
                                <Grid key={index} item xs={3} sm={3} md={2} lg={1} >
                                    <Card index={index} id={card.id} img={card.img} turned={card.turned} onClickCard={onClickCard} />
                                </Grid>
                            );
                        })
                }
            </Grid>
        </Paper>
    );
}

export default CardBoard;