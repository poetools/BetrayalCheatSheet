import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import BetrayalCheatSheet from "./components/BetrayalCheatSheet";

ReactDOM.render(<BetrayalCheatSheet />, document.getElementById('root'));
window.onload=() => {
    const table = document.querySelector('#SyndicateTable');
    table.addEventListener('click', (e) => {
        let cell = e.target;
        while (cell && cell.tagName) {
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
};
