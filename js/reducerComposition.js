const addTodo = action => {
  return {
    id: action.id,
    text: action.text,
    completed: false
  };
};

const toggleTodo = (state, action) => {
  if (state.id !== action.id) {
    return state;
  }

  return {
    ...state,
    completed: !state.completed
  };
};

const todos = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        addTodo(action)
      ];
    case 'TOGGLE_TODO':
      return state.map(todo => toggleTodo(todo, action));
    default:
      return state;
  };
};
