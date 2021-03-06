import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import {
    Dialog,
    DialogTitle,
    DialogContent,
    DialogContentText,
    DialogActions,
} from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles/';
import withRoot from '../lib/withRoot';

const styles = theme => ({
    root: {
        textAlign: 'center',
        paddingTop: theme.spacing(20),
    },
});

class Index extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
        };

        this.handleClick = this.handleClick.bind(this);
        this.handleClose = this.handleClose.bind(this);
    }

    handleClose() {
        this.setState({
            open: false,
        });
    }

    handleClick() {
        this.setState({
            open: true,
        });
    }

    render() {
        const { classes } = this.props;
        const { open } = this.state;

        return (
            <div className={classes.root}>
                <Dialog open={open} onClose={this.handleClose}>
                    <DialogTitle>Super Secret Password</DialogTitle>
                    <DialogContent>
                        <DialogContentText>1-2-3-4-5</DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button color="primary" onClick={this.handleClose}>
                        OK
                        </Button>
                    </DialogActions>
                </Dialog>
                <Typography variant="display1" gutterBottom>
                Material-UI
                </Typography>
                <Typography variant="subheading" gutterBottom>
                example project
                </Typography>
                <Button variant="raised" color="secondary" onClick={this.handleClick}>
                Super Secret Password
                </Button>
            </div>
        );
    }
}

Index.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withRoot(withStyles(styles)(Index));
