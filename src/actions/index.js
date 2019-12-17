let nextTodoId = 0;

export const addToDo = (text) => ({
    type: 'ADD_TODO',
    id: nextTodoId++,
    text: text,
});

export const toggleToDo = (id) => ({
    type: 'TOGGLE_TODO',
    id: id,
});
