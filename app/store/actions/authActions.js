import AuthConstants from "../constants/auth";

export default class AuthActions {

    static signup(payload) {
        return {
            type: AuthConstants.SIGNUP,
            payload: payload
        }
    }

    static signupupSuccessful(authUser) {
        return {
            type: AuthConstants.SIGNUP_SUCCESSFUL,
            payload: authUser
        }
    }

    static signupRejected(error) {
        return {
            type: AuthConstants.SIGNUP_REJECTED,
            payload: error
        }
    }


    static signin(payload) {
        return {
            type: AuthConstants.SIGNIN,
            payload: payload
        }
    }

    static signinSuccessful(authUser) {
        return {
            type: AuthConstants.SIGNIN_SUCCESSFUL,
            payload: authUser
        }
    }

    static signinRejected(error) {
        return {
            type: AuthConstants.SIGNIN_REJECTED,
            payload: error
        }
    }
}