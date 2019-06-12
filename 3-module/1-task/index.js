/**
 * showSalary
 * @param {Array} data - данные о пользователях
 * @param {number} age - максимальный возраст
 * @returns {string}
 */

let showSalary = function(data, age) {
    var newArray = data.filter(function(currentEmployee){
        return currentEmployee.age <= age;
    });

    var finalArray = newArray.map(function(currentEmployee){
        return currentEmployee.name + ', ' + currentEmployee.balance;
    })

    return finalArray.join('\n');
}