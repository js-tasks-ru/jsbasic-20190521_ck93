'use strict';

/**
 * Генерация HTML списка друзей
 * @param {Friend[]} friends
 * @return {HTMLUListElement}
 */
// function makeFriendsList (friends) {

// let ul = document.createElement('ul');

// for (let i = 0; i < friends.length; i++) {
//     let li = document.createElement('li');
//     li.innerHTML = friends[i].firstName + ' ' + friends[i].lastName;
//     ul.appendChild(li);
// }

// document.body.appendChild(ul);
// return ul;
// }

let makeFriendsList = function(arr) {

    let ul = document.createElement('ul');
    document.body.appendChild(ul);

    for (let i = 0; i < arr.length; i++) {
        let li = document.createElement('li');
        li.innerHTML = arr[i].firstName + ' ' + arr[i].lastName;
        ul.appendChild(li);
    }
    return ul;
}