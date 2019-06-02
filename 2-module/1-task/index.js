/**
 * Клонируем объект
 * @param {Object} obj - клонируем объект
 * @returns {Object}
 */
let clone = function(obj) {
    let copy = {};
    for (let key in obj) {
        if ( typeof(obj[key]) === 'object' && obj[key] !== null) {
            if ( Array.isArray(obj[key]) === false) {
                copy[key] = clone(obj[key]);
            } else {
                if ( Array.isArray(obj[key]) ) {
                        copy[key] = key.slice();
                } else {
                    copy[key] = obj[key]; 
                } 
            }
        } else {
            copy[key] = obj[key];
        }
    }
    return copy;
}
