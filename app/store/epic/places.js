import { Observable } from 'rxjs';
import { ActionsObservable } from 'redux-observable';
import PlacesActions from "../constants/places";
import Places from "../actions/places";
import { API_KEY ,SHORTEST_DISTANCE_API} from "../../config/api";
import { HttpService } from "../../services/http";
//** Epic Middlewares For Auth **//
export default class AuthEpic {

    // Epic middleware for login
    static Places = (action$) =>
        action$.ofType(PlacesActions.PARKS_FETCH)
            .switchMap(({ payload }) => {
                console.log(payload)
                return HttpService.get(`https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${payload.latitude},${payload.longitude}&radius=500&type=${payload.type}&key=${API_KEY}`)
                    .map((arr) => Places.parksSuccessful(arr.response.results))
                    .catch(err => Places.parksRejected(err.message))
            })
    // .mergeMap(({ payload }) => {
    //     return LocalStorageApi.login(payload)
    //  .map(arr=>{console.log(arr);return Observable.of({
    //      type:AuthActions.SIGNIN_SUCCESSFUL,
    //      payload:arr
    //  })})
    //  .catch(error=>{
    //      console.log(err);
    //      return Observable.of({
    //          type:AuthActions.SIGNIN_REJECTED,
    //          payload:error
    //      })
    //  })
    // })


    //Epic middleware for signup
    static shortestDistance = (action$) =>
        action$.ofType(PlacesActions.DISTANCE_FETCH)
            .switchMap(({ payload }) => {
                return HttpService.get(`https://maps.googleapis.com/maps/api/directions/json?origin=${payload.curLattitude},${payload.curLongitude}&destination=${payload.latitude},${payload.longitude}&key=${API_KEY}`)
                    .map((arr) => Places.distanceSuccessful(arr.response))
                    .catch((err) => Places.distanceRejected(err))
            })
}