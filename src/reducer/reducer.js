import {EXAMP} from "../actions/actionConst";

const initialState = {
    post: [
        {
            hui: 'hui'
        },
        {
            hui: 'hui2'
        }
    ]
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case EXAMP:
            console.log(state);

            return {
                ...state,
                post: [
                    {
                        hui:'Example'
                    },
                    {
                        hui:'Example2'
                    }
                ]
            };

        default:
            return state;
    }
}


export default reducer;