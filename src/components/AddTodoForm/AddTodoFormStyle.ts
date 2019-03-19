import { createStyles, Theme } from '@material-ui/core/styles';

const styles = (theme: Theme) =>
    createStyles({
        container: {
            display: 'flex',
            flexWrap: 'wrap'
        },
        textField: {
            marginLeft: theme.spacing.unit,
            marginRight: theme.spacing.unit
        },
        dense: {
            marginTop: 16
        },
        button: {
            margin: theme.spacing.unit
        }
    });

export default styles;
