import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';

class App extends Component {
    render () {
        return (
            <BrowserRouter>
                <div className="App">
                    <h1>Launch Trip</h1>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
