const todoApp = (state = {}, action) => {
  return {
     todos: todos(
      state.todos,
      action
    ),
    visibilityFilter: visibilityFilter(
      state.visibilityFilter,
      action
    )
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

const visibilityFilter = (state = 'SHOW_ALL', action) => {
    switch (action.type) {
      case 'SET_VISIBILITY_FILTER':
        return action.filter;
      default:
        return state;
    }
};

const { createStore } = Redux;
const store = createStore(todoApp);
