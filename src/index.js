import React from 'react';
import ReactDOM from 'react-dom';
import SocialCards from './components/SocialCards';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import HigherOrderComponent from './components/HigherOrderComponent';


class SocialCard extends React.Component {
    render() {
        return (
            <div className='CardContainer'>
                <Box className='TitleContainer' borderRadius={10} bgcolor="primary.main" color="primary.contrastText" p={1} m={1}>
                    <Typography className="AppTitle" variant="h6" component="h6" >
                        WEEKLY PROJECT
                     </Typography>
                    <Typography className="AppTitle" variant="h2" component="h2" mb={0}>
                        Social Cards
                    </Typography>
                </Box>
                <HigherOrderComponent />
            </div>
        )
    }
}

const App = document.getElementById('app');
ReactDOM.render(<SocialCard />, App);