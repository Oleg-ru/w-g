export const sortedSavedTodos = (todos) => {
    return [...todos].sort((a,b) => a.order - b.order);
}

export function createNewTodo(text, deadline, order) {
    return {
        id: `temp_${crypto.randomUUID()}`,
        text,
        completed: false,
        createdAt: new Date().toISOString(),
        deadline: deadline || null,
        order,
    }
}