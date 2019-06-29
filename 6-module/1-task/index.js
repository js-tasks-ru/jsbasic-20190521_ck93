(function () {
    'use strict';

    /**
     * Компонент, который реализует таблицу
     * с возможностью удаления строк
     *
     * Пример одного элемента, описывающего строку таблицы
     *
     *      {
     *          name: 'Ilia',
     *          age: 25,
     *          salary: '1000',
     *          city: 'Petrozavodsk'
     *      },
     *
     * @constructor
     */
    // class ClearedTable {

    //     constructor(data) {
    //         this.el = document.createElement('table');
    //         this.data = data;
    //     }

    //     /**
    //      * Метод который выщывается после удалении строки
    //      * @param {number} id - идентификатор удаляемого пользователя
    //      */
    //     onRemoved(id) {}
    // }

let rows = [
    {
        id: 1,
        name: 'Ilia',
        age: 25,
        salary: 1000,
        city: 'Petrozavodsk'
    },
    {
        id: 2,
        name: 'Vasya',
        age: 14,
        salary: 1500,
        city: 'Moscow'
    },
    {
        id: 3,
        name: 'Ivan',
        age: 22,
        salary: 100,
        city: 'Bryansk'
    },
    {
        id: 4,
        name: 'Petya',
        age: 45,
        salary: 990,
        city: 'Chita'
    }
];
    
let tableConfiguration = [
    {
        title: 'Name',
        dataIndex: 'name'
    },
    {
        title: 'Age',
        dataIndex: 'age'
    },
    {
        title: 'Salary',
        dataIndex: 'salary'
    },
    {
        title: 'City',
        dataIndex: 'city'
    },
    {
        title: '',
        render: function (obj) {
            var removeElement = '<a class="remove-button" data-id="' + obj.id + '">X</a>';
            return removeElement;
        },

    }
];

let ClearedTable = function(rows) {
    var self = this;

    let renderRow= function(obj, tableConfiguration) {
        let createdRow = document.createElement('tr');
        for (let i = 0; i < tableConfiguration.length; i++) {
            let createdCell = document.createElement('td');
            let currentKey = tableConfiguration[i].dataIndex;
    
            let currentValue = tableConfiguration[i].render ? tableConfiguration[i].render(obj) : obj[currentKey];
    
            createdCell.innerHTML = currentValue;
            createdRow.appendChild(createdCell);
        }
        return createdRow;
    };
    
    let renderHeaderRow= function(tableConfiguration) {
        let createdHeaderRow = document.createElement('tr');
        for (let i = 0; i < tableConfiguration.length; i++) {
            let createdHeaderCell = document.createElement('th');
            createdHeaderCell.innerHTML = tableConfiguration[i].title;
            createdHeaderRow.appendChild(createdHeaderCell);
        }
        return createdHeaderRow;
    };
    
    let renderTable = function(arr, tableConfiguration) {
        let createdTable = document.createElement('table');
        createdTable.appendChild(renderHeaderRow(tableConfiguration));
        for (let i = 0; i < arr.length; i++) {
            createdTable.appendChild(renderRow(arr[i], tableConfiguration));
        }
        return createdTable;
    };
    
    let applyChanges = function() {
        let oldTable = document.querySelector('table');
        if (oldTable) {
            oldTable.remove();
        }
        self.el = renderTable(rows, tableConfiguration);
        let removeButtons = self.el.querySelectorAll('.remove-button');
        for (let i = 0; i < removeButtons.length; i++) {
            removeButtons[i].onclick = function(event) {
                var target = event.target;
                let currentId = +target.getAttribute('data-id');
                let currentRow = target.parentNode.parentNode;
                currentRow.remove();
                // rows = rows.filter(function(number) {
                //     return number.id != currentId;
                // });
                self.onRemoved ? self.onRemoved(currentId) : console.log('Из таблицы удален пользователь' + currentId);
                // applyChanges();
            };
        }
        self.el.classList.add('pure-table');
    };
    
    self.onRemoved = function(currentId) {
        console.log('Из таблицы удален пользователь' + currentId);
    };

    applyChanges();
};

window.ClearedTable = ClearedTable;

})();
