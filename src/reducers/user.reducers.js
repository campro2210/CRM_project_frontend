import { userConstants } from "../actions/constants";
const initState = {
    error: null,
    message: '',
    loading: false,
    user: {}
}

export default (state = initState, action) => {
    switch (action.type) {
        case userConstants.USER_REGISTER_REQUEST:
            return (
                state = {
                    ...state,
                    loading: true
                }
            )

        case userConstants.USER_REGISTER_SUCCESS:
            return (
                state = {
                    ...state,
                    loading: false,
                    message: action.payload.message
                }

            )

        case userConstants.USER_REGISTER_FAILURE:
            return (
                state = {
                    ...state,
                    loading: false,
                    message: action.payload.error
                }
            )
        case userConstants.USER_GET_USER_REQUEST: {
            return (
                state = {
                    ...state,
                    loading: true,
                }
            )
        }
        case userConstants.USER_GET_USER_SUCCESS: {
            return (
                state = {
                    ...state,
                    loading: false,
                    user: action.payload.user
                }
            )
        }
        default:
            return state
    }
}