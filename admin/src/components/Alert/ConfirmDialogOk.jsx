import React from 'react'
import { Dialog, DialogTitle, DialogContent, DialogActions, Typography, makeStyles, IconButton } from '@material-ui/core'
import Controls from "../controls/Controls";
import { Restore} from "@material-ui/icons"


const useStyles = makeStyles(theme => ({
    dialog: {
        padding: theme.spacing(2),
        position: 'absolute',
        top: theme.spacing(5)
    },
    dialogTitle: {
        textAlign: 'center'
    },
    dialogContent: {
        textAlign: 'center'
    },
    dialogAction: {
        justifyContent: 'center'
    },
    titleIcon: {
        backgroundColor: theme.palette.secondary.light,
        color: 'White',
        '&:hover': {
            backgroundColor: theme.palette.secondary.light,
            cursor: 'default',
          
        },
        '& .MuiSvgIcon-root': {
            fontSize: '8rem',
        }
    }
}))

export default function ConfirmDialogOk(props) {

    const { confirmDialogOk, setConfirmDialogOk } = props;
    const classes = useStyles()

    return (
        <Dialog open={confirmDialogOk.isOpen} classes={{ paper: classes.dialog }}>
            <DialogTitle className={classes.dialogTitle}>
                <IconButton disableRipple className={classes.titleIcon}>
                    <Restore />
                </IconButton>
            </DialogTitle>
            <DialogContent className={classes.dialogContent}>
                <Typography variant="h6">
                    {confirmDialogOk.title}
                </Typography>
                <Typography variant="subtitle2">
                    {confirmDialogOk.subTitle}
                </Typography>
            </DialogContent>
            <DialogActions className={classes.dialogAction}>
                <Controls.Button
                    text="No"
                    color="default"
                    onClick={() => setConfirmDialogOk({ ...confirmDialogOk, isOpen: false })} />
                <Controls.Button
                    text="Yes"
                    color="primary"
                    onClick={confirmDialogOk.onConfirm} />
            </DialogActions>
        </Dialog>
    )
}