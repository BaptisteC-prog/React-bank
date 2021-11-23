import { USER_TOKEN } from "../actions/userActions";
import { SET_USER } from "../actions/userActions";
import { LOG_OUT } from "../actions/userActions";
import { getFromLocalStore } from "../helpers";
import { useSelector } from "react-redux";


const initialState = {
    loggedIn: false,
    user: {},
    type: "guest",
    token: null
}


export default function userReducer(state = initialState, action) {
    switch (action.type) {
        //	let machinjson=localStorage.getItem("game");
        //	let game2=machinjson && JSON.parse(machinjson);
        case SET_USER:
            //alert("logged in !")
            return {
                ...state,
                user: action.payload,
                loggedIn: true,
                type: "private",
                token: action.payload.token
            }
        //alert("logged !")
        /* return {
             loggedIn: true,
             user: {...action.payload }
         }*/

        case LOG_OUT:
            localStorage.clear()
            return {
                ...state,
                loggedIn: false,
                user: {},
                type: "guest",
                token: null
            }

        case USER_TOKEN:
            alert("logged in !(token)")
            return { ...state, token: action.payload }

        default:
            return state
    }
}