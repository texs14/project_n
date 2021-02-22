import {EXAMP} from "../actions/actionConst";

const initialState = {
    post: [
        {
            title: 'title1'
        },
        {
            title: 'title2'
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
                        title: 'Example'
                    },
                    {
                        title: 'Example2'
                    }
                ]
            };

        default:
            return state;
    }
}

export default reducer;