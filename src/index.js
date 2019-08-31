import React from 'react';
import ReactDOM from 'react-dom';
import SocialCards from './components/SocialCards';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import FetchingData from './components/data/FetchData'


class SocialCard extends React.Component {
    render() {
        return (
            <div className='CardContainer'>
                <Box className='TitleContainer' borderRadius={10} bgcolor="primary.main" color="primary.contrastText" p={1} m={1}>
                    <Typography className="AppTitle" variant="h6" component="h6" gutterBottom="false" >
                        REACT WEEKLY PRACTICE PROJECT
                     </Typography>
                    <Typography className="AppTitle" variant="h2" component="h2" gutterBottom="false" mb={0}>
                        Social Cards
                    </Typography>
                </Box>
                <SocialCards />
                <FetchingData />
            </div>
        )
    }
}

const App = document.getElementById('app');
ReactDOM.render(<SocialCard />, App);