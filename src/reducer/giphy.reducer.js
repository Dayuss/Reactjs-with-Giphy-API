import { GIPHY_DATA } from '../action/types';
const initialState = {
    isLoading: false,
    datum:[]
};

const giphyReducer = (state = initialState, action) => {
    switch (action.type) {
        case GIPHY_DATA.LOADING: return { ...state, isLoading: action.load };
        case GIPHY_DATA.SET_DATA: return { ...state, datum: action.datum };
        default: return state;
    }
}

export default giphyReducer;