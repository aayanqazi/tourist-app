import PlacesConstants from "../constants/places";

export default class PlacesActions {
    static parks(payload) {
        return {
            type: PlacesConstants.PARKS_FETCH,
            payload: payload
        }
    }

    static parksSuccessful(data) {
        return {
            type: PlacesConstants.PARKS_SUCCESSFULLY_DONE,
            payload: data
        }
    }

    static parksRejected(error) {
        return {
            type: PlacesConstants.PARKS_FAILED,
            payload: error
        }
    }
    static distance(payload) {
        return {
            type: PlacesConstants.DISTANCE_FETCH,
            payload: payload
        }
    }

    static distanceSuccessful(data) {
        return {
            type: PlacesConstants.DISTANCE_SUCCESS,
            payload: data
        }
    }

    static distanceRejected(error) {
        return {
            type: PlacesConstants.DISTANCE_FAILED,
            payload: error
        }
    }


}