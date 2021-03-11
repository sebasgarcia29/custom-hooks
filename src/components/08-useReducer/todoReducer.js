

export const todoReducer = (state = [], action) => {
  switch (action?.type) {
    case 'add':
      return [...state, action.task];
    case 'delete':
      return state.filter(a => a.id !== action.id);
    case 'toggle':
      return state.map((todo) =>
        (todo.id === action.toggle ? { ...todo, done: !todo.done } : todo))
    default: return state;
  }
}