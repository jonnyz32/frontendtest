import { reactive } from "vue";

const state = reactive<{clicked: string[]}>({ clicked: [] });

const addHighlight = (square: string) => {
  state.clicked.push(square);
};

const removeHighlight = (square: string) => {
  state.clicked = state.clicked.filter((clicked) => clicked !== square);
};

export default {
  state: state,
  addHighlight,
  removeHighlight,
};
