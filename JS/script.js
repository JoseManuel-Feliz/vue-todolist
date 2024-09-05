console.log('JS OK')

const { createApp } = Vue

createApp({
    data: () => ({
        toDoList: [
            { toDo: 'Do my laundry' },
            { toDo: 'Cancel milk delivery' },
            { toDo: 'Clean fridge' },
            { toDo: 'Check passport' },
            { toDo: 'Do web check-in' },
            { toDo: 'Download a movie for the flight' },
            { toDo: 'Recharge mobile' },
            { toDo: 'Pack swimsuit' },
            { toDo: 'go biking' },
            { toDo: 'Laundry' },
            { toDo: 'cat litter box' },
            { toDo: 'dishes' },
            { toDo: 'stretch' },
            { toDo: 'meditate' },
        ],

    }),


}).mount('#app')