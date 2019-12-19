import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import BetrayalCheatSheet from "./components/BetrayalCheatSheet";

ReactDOM.render(<BetrayalCheatSheet />, document.getElementById('root'));
window.onload=() => {
    const table = document.querySelector('#SyndicateTable');
    console.log(table);
    table.addEventListener('click', (e) => {
        let cell = e.target;
        while (cell.tagName) {
            if (cell.tagName === 'TD') {
                break;
            }
            cell = cell.parentElement;
        }
        if (!cell) {
            return;
        }

        if (!cell.className) {
            cell.className = 'ColourOne';
        } else if (cell.className === 'ColourOne') {
            cell.className = 'ColourTwo';
        } else if (cell.className === 'ColourTwo') {
            cell.className = 'ColourThree';
        } else {
            cell.className = '';
        }

    });
}


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
