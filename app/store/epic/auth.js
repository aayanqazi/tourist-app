import { Observable } from 'rxjs';
import { ActionsObservable } from 'redux-observable';
import AuthActions from "../actions/authActions";
// import LocalStorageApi from "../../services/api/localStorageApi";
import { AsyncStorage } from "react-native";
//** Epic Middlewares For Auth **//
export default class AuthEpic {

    // Epic middleware for login
    static loginEpic = (action$) =>
        action$.ofType(AuthActions.SIGNIN)
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
        action$.ofType(AuthActions.SIGNUP)
        .debounceTime(1000)
            .switchMap(({ payload }) => {
                return LocalStorageApi.signUp(payload)
            })
}