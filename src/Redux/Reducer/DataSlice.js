
const stateData = {
    boardName: {
        listName: {
            taskName: {},
        },
    },
};

export const DataSlice = (state = stateData, action) => {
    // Minimal reducer: handle known action types here.
    // For now return previous state by default to avoid unused var errors.
    switch (action.type) {
        default:
            return state;
    }
};