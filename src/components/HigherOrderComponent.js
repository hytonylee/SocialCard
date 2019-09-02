import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/styles';
import Card from '@material-ui/core/Card';
import SocialCards from './SocialCards';
import { NONAME } from 'dns';

const styles = theme => ({
    card: {
        width: 492,
    },
});

class HigherOrderComponent extends React.Component {

    render() {
        const { classes } = this.props;
        return (
            <Card className={classes.card}><SocialCards /></Card>
        );
    }
}

HigherOrderComponent.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(HigherOrderComponent);