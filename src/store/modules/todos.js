// import axios from "axios"

const state = {
    todos: [
        {
            id: 1,
            title: 'Todo One'
        },
        {
            id: 1,
            title: 'Todo two'
        }
    ]
}

const getters  = {
    allTodos: state => state.todos
}

const mutations = {}

export default {
    state,
    getters,
    mutations,
}
