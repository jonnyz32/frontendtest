import {reactive} from "vue";

const state = reactive({clicked:[]})

const addHighlight = (square) => {
    state.clicked.push(square)
}

const removeHighlight = (square) => {
    state.clicked = state.clicked.filter(clicked => clicked !== square)
}

export default {
    state: state,
    addHighlight,
    removeHighlight,
}