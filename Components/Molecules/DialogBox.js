import React from 'react'
import PropTypes from 'prop-types'
import DialogTitle from './DialogHeader';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';

function DialogBox(props) {
    
    return (
        <div>
            <Dialog onClose={props.handleClose} open={props.open} >
                <DialogTitle id="alert-dialog-title">{"Use Google's location service?"}</DialogTitle>
                    <h2>My Table</h2>
                    <button autoFocus onClick={props.handleClose} color="primary">
                        Close
                    </button>
                </Dialog>
        </div>
    )
}


export default DialogBox

