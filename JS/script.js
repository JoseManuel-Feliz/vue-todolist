console.log('JS OK')

const { createApp } = Vue

createApp({
    data: () => ({
        addTask: '',
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

        removeTask(index) {
            this.toDoList.splice(index, 1);
        },
        addNewTask(element) {
            if (element.length > 5) {
                this.toDoList.push({ toDo: element, done: false })

            }
        },


    }
}).mount('#app')