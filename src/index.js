import React from 'react';
import ReactDOM from 'react-dom';

class SocialCard extends React.Component {
    render() {
        return (
            <div>
                Hello World!!
            </div>
        )
    }
}

const App = document.getElementById('app');
ReactDOM.render(<SocialCard />, App);