const radioButtons = document.querySelectorAll('.radio-button');
const customButtons = document.querySelectorAll('.custom-radio');

const getChecked = (radioButton) => {
    radioButton.addEventListener ('change', () => {
        if(radioButton.checked) {
            const currentButton = radioButton.parentElement.querySelector('img');
            currentButton.src = '/img/check_ring.svg';
            for (let radioButton of radioButtons) {
                if (!radioButton.checked) {
                    radioButton.parentElement.querySelector('img').src = '/img/no-check_ring.svg';
                }
            }
        }
    });  
};

for (let radioButton of radioButtons) {
    getChecked(radioButton);
}

