console.log('JS OK')

const { createApp } = Vue

createApp({
    data: () => ({
        toDoList: [
            {
                toDo: 'Do my laundry',
                done: false,
            },
            {
                toDo: 'Cancel milk delivery',
                done: true,
            },
            {
                toDo: 'Clean fridge',
                done: false,
            },
            {
                toDo: 'Check passport',
                done: true,
            },
            {
                toDo: 'Do web check-in',
                done: false,
            },
            {
                toDo: 'Download a movie for the flight',
                done: false,
            },
            {
                toDo: 'Recharge mobile',
                done: true,
            },
            {
                toDo: 'Pack swimsuit',
                done: false,
            },
            {
                toDo: 'go biking',
                done: true,
            },
            {
                toDo: 'Laundry',
                done: true,
            },
            {
                toDo: 'cat litter box',
                done: false,
            },
            {
                toDo: 'dishes',
                done: true,
            },
            {
                toDo: 'stretch',
                done: true,
            },
            {
                toDo: 'meditate',
                done: true,
            },
        ],
        doneClasses: '',



    }),
    methods: {
        isDone(done) {
            if (done === true) {
                return this.doneClasses = "text-decoration-line-through"
            }
        },

        removeActivity(index) {
            this.toDoList.splice(index, 1);
        },


        /*  deleteTodoItem(todoItemIndex) {
             this.todoList.splice(todoItemIndex, 1);
             console.log(`L'elemento con indice ${todoItemIndex} e' stato rimosso!`);
         }, */

        /*   deleteTodoIndex(index) {
              // Your logic to delete the todo item at the given index
              // For example, you might update a data property or remove an item from an array.
              this.toDoList.splice(index, 1);
          } */


    }
}).mount('#app')