
import PlacesActions from "./../constants/places";

const INITIAL_STATE = {
    places: null,
    isProcessing: false,
    isError: false,
    errorMessage: {},
    road: null
}

function PlacesReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case PlacesActions.PARKS_FETCH:
            return { ...state, isProcessing: true, isError: false, road: null };
        case PlacesActions.PARKS_SUCCESSFULLY_DONE:
            return { ...state, isProcessing: false, isError: false, places: action.payload, road: null };
        case PlacesActions.PARKS_FAILED:
            return { ...state, isProcessing: false, isError: true, errorMessage: action.payload, road: null };
        case PlacesActions.DISTANCE_FETCH:
            return { ...state, isProcessing: true, isError: false };
        case PlacesActions.DISTANCE_SUCCESS:
            return { ...state, isProcessing: false, isError: false, road: action.payload};
        case PlacesActions.DISTANCE_FAILED:
            return { ...state, isProcessing: false, isError: true, errorMessage: action.payload };

        default:
            return state;
    }
}

export default PlacesReducer;