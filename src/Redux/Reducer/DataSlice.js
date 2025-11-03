
const stateData = {
    board: {
        board1: [
            [
                { id: 1, data: "mohammmed 1 list 1 board 1", isActive: false },
                { id: 2, data: "mohammmed 2 list 1 board 1", isActive: false },
                { id: 3, data: "mohammmed 3 list 1 board 1", isActive: false }
            ],
            [
                { id: 1, data: "mohammmed 1 list 2 board 1", isActive: false },
                { id: 2, data: "mohammmed 2 list 2 board 1", isActive: false },
                { id: 3, data: "mohammmed 3 list 2 board 1", isActive: false }
            ],
        ],
                board2: [
            [
                { id: 1, data: "mohammmed 1 list 1 board 2", isActive: false },
                { id: 2, data: "mohammmed 2 list 1 board 2", isActive: false },
                { id: 3, data: "mohammmed 3 list 1 board 2", isActive: false }
            ],
            [
                { id: 1, data: "mohammmed 1 list 2 board 2", isActive: false },
                { id: 2, data: "mohammmed 2 list 2 board 2", isActive: false },
                { id: 3, data: "mohammmed 3 list 2 board 2", isActive: false }
            ],
        ],
        
    },
};

export const DataSlice = (state = stateData, action) => {
    // Minimal reducer: handle known action types here.
    // For now return previous state by default to avoid unused var errors.
    switch (action.type) {
        case "ADD":

            break;
        default:
            return state;
    }
};