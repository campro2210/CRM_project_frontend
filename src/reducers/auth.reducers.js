import { authConstants } from "../actions/constants"

const initState = {
    token: null,
    user: {
        firstName: '',
        lastName: '',
        email: '',
        picture: ''
    },
    authenticate: false,
    authenticating: false,
    loading: false,
    error: false,
    message: ''
}
export default (state = initState, action) => {
    console.log(action)
    switch (action.type) {
        case authConstants.LOGIN_REQUEST:
            return (
                state = {
                    ...state,
                    authenticating: true
                }
            )
        case authConstants.LOGIN_SUCCESS:
            return (
                state = {
                    ...state,
                    user: action.payload.user,
                    token: action.payload.token,
                    authenticate: true,
                    authenticating: false
                }
            )
        case authConstants.LOGOUT_REQUEST:
            return (
                state = {
                    ...state,
                    loading: true
                }
            )
        case authConstants.LOGOUT_SUCCESS:
            return (
                state = {
                    ...initState
                }
            )
        case authConstants.LOGOUT_FAILURE:
            return (
                state = {
                    ...state,
                    error: action.payload.error,
                    loading: false
                }
            )
        default:
            return state
    }
}