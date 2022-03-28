import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    cardImage: {
        maxHeight: "100%",
        maxWidth: "100%"
    },
    app: {
        flexGrow: 1
    },
    cardContainer: {
        padding: theme.spacing(1)
    },
    titleContainer: {
        padding: theme.spacing(1),
    },
    formControl: {
        margin: theme.spacing(1),
        width: "100%",
    },
    alignCenter: {
        textAlign: "center",
    },
    version: {
        position: "absolute",
        bottom: 0,
        right: 0,
    }
}));