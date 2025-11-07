
const stateData = {
   board: {
    board1: [
      // List 1: To Do
      [
        { id: 101, data: "Write project requirements document", isActive: true },
        { id: 102, data: "Create initial UI wireframes", isActive: false },
        { id: 103, data: "Set up GitHub repository", isActive: false }
      ],
      // List 2: In Progress
      [
        { id: 104, data: "Develop authentication system", isActive: true },
        { id: 105, data: "Design home page layout", isActive: false },
        { id: 106, data: "Connect backend to database", isActive: false }
      ]
    ],

    board2: [
      // List 1: To Do
      [
        { id: 201, data: "Design mobile app splash screen", isActive: false },
        { id: 202, data: "Define app navigation structure", isActive: true },
        { id: 203, data: "Select color theme and typography", isActive: false }
      ],
      // List 2: In Progress
      [
        { id: 204, data: "Implement login UI", isActive: false },
        { id: 205, data: "Integrate Firebase authentication", isActive: true },
        { id: 206, data: "Build settings screen", isActive: false }
      ]
    ]
  },
    ActivBoard:'board2',
};

export const DataSlice = (state = stateData, action) => {
    switch (action.type) {
        case "ADD":
           { const nawState = {
                ...state, board: {
                  //تحديد اسم اللوحه المراد التعديل فيها 
                    ...state.board, [action.boardName]: state.board.board1.map((list, index) => {
                        if (index === action.ListIndex) {
                            return [
                                ...list, {
                                    id: Date.now(),
                                    data: "empty text",
                                    isActive: false
                                }
                            ]
                        }
                        return list;
                    }
                    )

                }
            }
            return nawState;
        }

        default:
            return state;
    }
};