export const sortedSavedTodos = (todos) => {
    return [...todos].sort((a,b) => a.order - b.order);
}