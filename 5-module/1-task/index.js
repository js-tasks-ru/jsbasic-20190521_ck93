'use strict';

/**
 * Метод устанавливает необходимые по условию аттрибуты таблице
 * @param {Element} table
 */
let highlight = function(table) {
    let allTr = table.querySelectorAll('tr');

    for (let i = 0; i < allTr.length; i++) {

        let status = allTr[i].children[3].dataset.available;
        if (status ==='true') {
            allTr[i].classList.add('available');
        } else if (status ==='false'){
            allTr[i].classList.add('unavailable');
        } else {
            allTr[i].setAttribute('hidden', 'true');
        }

        let gender = allTr[i].children[2].textContent;
        allTr[i].classList.add((gender == 'm') ? 'male' : 'female');

        let age = +allTr[i].children[1].textContent;
        if (age < 18) {
            allTr[i].setAttribute('style', 'text-decoration: line-through')
        } 
    }
}