/**
 * Проверяем объект obj на пустоту
 * @param {Object} obj
 * @returns {Boolean}
 */

let isEmpty = function(obj) {
    let counter = 0;
    for ( let key in obj) {
        counter++;
    }
    return (counter > 0) ? false : true;
}
