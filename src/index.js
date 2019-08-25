import React from 'react';
import ReactDOM from 'react-dom';
import SocialCards from './components/SocialCards';

class SocialCard extends React.Component {
    render() {
        return (
            <div>
                <SocialCards />
            </div>
        )
    }
}

const App = document.getElementById('app');
ReactDOM.render(<SocialCard />, App);