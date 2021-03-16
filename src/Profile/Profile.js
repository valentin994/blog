import React, {useState} from 'react';
import Button from '@material-ui/core/Button'
import {Box, Typography} from "@material-ui/core";
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

function Profile(props) {
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleLogout = () => {
        props.setUsername("");
        props.setLoggedIn(false);
        setOpen(false);
    }

    return (
        <div>
            <Box m={2}>
                <Button color={"primary"} onClick={handleClickOpen} size="large">Logout</Button>
                <Typography variant={"h4"}>Welcome, {props.username}</Typography>
            </Box>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">Logging out</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        Are you sure you want to logout?
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={handleLogout} color="primary" autoFocus>
                        Yes
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}

export default Profile;