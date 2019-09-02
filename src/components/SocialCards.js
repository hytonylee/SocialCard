import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';



class SocialCards extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isFetching: false,
            photos: []
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isFetching: true,
                        users: result
                    })
                },
                (error) => {
                    this.setState({
                        isFetching: true,
                        error
                    })
                }
            )
    }

    render() {
        const { error, isFetching, users } = this.state
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isFetching) {
            return <div>Loading...</div>;
        } else {
            return (
                <div style={{ background: 'none' }}>
                    {users.map(user => (
                        <Card key={user.id} style={{ marginBottom: '10px' }}>
                            <CardActionArea>
                                {/* <CardMedia
                                    component="img"
                                    alt="Contemplative Reptile"
                                    height="140"
                                    image=""
                                    title="Contemplative Reptile"
                                /> */}
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        {user.name}
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary" component="p">
                                        {user.email}
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Button size="small" color="primary">
                                    Share
                        </Button>
                                <Button size="small" color="primary">
                                    Learn More
                        </Button>
                            </CardActions>
                        </Card>
                    ))
                    }
                </div >
            );
        }
    }
}

export default SocialCards;