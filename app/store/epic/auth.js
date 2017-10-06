import { Observable } from 'rxjs';
import { ActionsObservable } from 'redux-observable';
import Auth from "../constants/auth";
import AuthActions from "../actions/authActions";
// import { API_KEY ,SHORTEST_DISTANCE_API} from "../../config/api";
import { firebase } from "../../config/firebase";
import { HttpService } from "../../services/http";
//** Epic Middlewares For Auth **//
export default class AuthEpic {

    // Epic middleware for login
    static loginEpic = (action$) =>
        action$.ofType(Auth.SIGNIN)
            .switchMap(({ payload }) => {
                return firebase.auth().signInWithEmailAndPassword(payload.email, payload.password)
                .then((arr) => {
                    return AuthActions.signinSuccessful(arr)
                })
                .catch((err) => AuthActions.signinRejected(err))
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
    static signupEpic = (action$) =>
        action$.ofType(Auth.SIGNUP)
            .switchMap(({ payload }) => {
                return firebase.auth().createUserWithEmailAndPassword(payload.email, payload.password)
                    .then((arr) => {
                        return AuthActions.signupupSuccessful(arr)
                    })
                    .catch((err) => AuthActions.signupRejected(err))
            })
}