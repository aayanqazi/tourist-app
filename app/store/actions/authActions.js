export default class AuthActions {

    static SIGNUP = 'SIGNUP';
    static SIGNUP_SUCCESSFUL = 'SIGNUP_SUCCESSFUL';
    static SIGNUP_REJECTED = 'SIGNUP_REJECTED';

    static SIGNIN = 'SIGNIN';
    static SIGNIN_SUCCESSFUL = 'SIGNIN_SUCCESSFUL';
    static SIGNIN_REJECTED = 'SIGNIN_REJECTED';

    static SEARCH_PATIENT = 'SEARCH_PATIENT';
    static LOGOUT_SUCCESSFUL = 'LOGOUT_SUCCESSFUL';

    static GET_PATIENT = 'GET_PATIENT';
    static GET_PATIENT_SUCCESSFUL = 'GET_PATIENT_SUCCESSFUL';
    static GET_PATIENT_FAILED = 'GET_PATIENT_FAILED';


    static ISLOGGEDIN = 'ISLOGGEDIN';

    static ADD_PATIENT = "ADD_PATIENT";
    static ADD_PATIENT_SUCCESSFULL = "ADD_PATIENT_SUCCESSFULL";
    static ADD_PATIENT_FAILED = "ADD_PATIENT_FAILED";

    static DELETED_PATIENT = "DELETED_PATIENT";
    //static NULL = 'NULL';

    static add_patient(payload) {
        return {
            type: AuthActions.ADD_PATIENT,
            payload: payload
        }
    }

    static signup(payload) {
        return {
            type: AuthActions.SIGNUP,
            payload: payload
        }
    }

    static signupupSuccessful(authUser) {
        return {
            type: AuthActions.SIGNUP_SUCCESSFUL,
            payload: authUser
        }
    }

    static signupRejected(error) {
        return {
            type: AuthActions.SIGNUP_REJECTED,
            payload: error
        }
    }


    static login(payload) {
        return {
            type: AuthActions.SIGNIN,
            payload: payload
        }
    }

    static signinSuccessful(authUser) {
        return {
            type: AuthActions.SIGNIN_SUCCESSFUL,
            payload: authUser
        }
    }

    static signinRejected(error) {
        return {
            type: AuthActions.SIGNIN_REJECTED,
            payload: error
        }
    }

    static logout() {
        return {
            type: AuthActions.LOGOUT
        }
    }

    static searchPatient(data) {
        // alert(data);
        return {
            type: AuthActions.SEARCH_PATIENT,
            payload:data
        }
    }
    static Logged(user) {
        return {
            type: "logging",
            payload: user
        }
    }

    static deletePatient(index) {
        // alert(index);
        return {
            type: AuthActions.DELETED_PATIENT,
            payload: index
        }
    }

    static getPatient() {
        return {
            type: AuthActions.GET_PATIENT,
        }
    }
}