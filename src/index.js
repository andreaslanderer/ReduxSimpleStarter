import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar'

const API_KEY = 'AIzaSyB56qzFLvC81F26YSqoLI9g1NNHup_VinU';

const App = () => {
    // write your first JSX code
    return (
        <div>
            <SearchBar/>
        </div>
    );
}
ReactDOM.render(<App />, document.querySelector('.container'));