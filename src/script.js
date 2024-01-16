import radio from "./no-check_ring.svg";
import checkRadio from "./check_ring.svg";

const radioChangeFunction = function (evt) {
    let radioButtons = document.querySelectorAll('.radio-button');
    if(evt.target.checked) {
        const currentButton = evt.target.parentElement.querySelector('img');
        currentButton.src = checkRadio;
        for (let radioButton of radioButtons) {
            if (!radioButton.checked) {
                radioButton.parentElement.querySelector('img').src = radio;
            }
        }
    }
}

export {radioChangeFunction}; 
