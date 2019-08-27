import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { data } from './data/data';

const useStyles = makeStyles({
    card: {
        minWidth: '334px',
        maxWidth: 500,
        marginBottom: '10px',
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    author: {
        fontSize: 14,
    },
})

const SocialCards = () => {
    const classes = useStyles();
    let cards = data.map((data) =>
        <Card className={classes.card} keys={data.id}>
            <CardContent>
                <Typography className={classes.author} color="textSecondary" gutterBottom>
                    {data.author}
                </Typography>
                <Typography variant="h5" component="h2">
                    {data.title}
                </Typography>
                <Typography variant="body2" component="p">
                    {data.desc}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Learn More</Button>
            </CardActions>
        </Card>
    )

    return (
        <div>
            {cards}
        </div>
    );
}

export default SocialCards;