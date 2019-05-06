import React from 'react';

class FirstPage extends React.Component {
    render() {
        return (
            <div className="App">
            <header className="App-header">
            <img src={require('./logo.svg')} className="App-logo" alt="logo" />
            <p>
                Edit <code>src/App.js</code> and save to reload.
            </p>
            <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
            >
                Learn React
            </a>
            </header>
            </div>        
        )        
    }
}

export default FirstPage;