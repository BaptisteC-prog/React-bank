import axios from "axios";
import { API_URL } from "..";
import { setInLocalStore } from "../helpers";
import { store } from "..";
import { useSelector, useReducer } from "react-redux";
import { getFromLocalStore } from "../helpers";

export const USER_TOKEN = "USER_TOKEN"
export const SET_USER = "SET_USER"
export const LOG_OUT = "LOG_OUT"

//export const SET_USER = (payload) => ({ type: "SET_USER", payload })
//export const LOG_OUT = () => ({ type: "LOG_OUT" })
//password123
/*
    export const fetchUser = (userInfo) => dispatch => {
        fetch(`http://localhost:4000/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(userInfo)
        })
        .then(res => res.json())
        .then(data => {
            // data sent back will in the format of
            // {
            //     user: {},
            //.    token: "aaaaa.bbbbb.bbbbb"
            // }
            localStorage.setItem("token", data.token)
            dispatch(setUser(data.user))
        })
    }
*/

function isAuthenticated() {
    let state = store.getState();
    return getFromLocalStore("token") === state.userReducer.token
  }

export const userLogin = (username_, password_) => {
    console.log(username_, password_)
    return (dispatch) => {
        //console.log("email:", username_, "password:", password_ )
        return axios.post(API_URL + "login", { email: username_, password: password_ })
            .then((response) => {
                if (response.status === 200) {
                    console.log("✔️👍", response)
                    //dispatch(SET_USER(response.data))
                    store.dispatch({
                        type: SET_USER, payload: {
                            email: username_,
                            password: password_,
                            token: response.data.body.token
                        }
                    })
                    //dispatch({ type: USER_TOKEN, payload: response.data.body.token })

                }
                console.log("TOKEN", response.data.body.token)
                setInLocalStore("login", response.data)
                setInLocalStore("token", response.data.body.token)
                
                console.log("TOKEN LOCAL STORAGE", getFromLocalStore("token"))
                const state = store.getState();
                console.log("TOKEN STORE REDUX", state.userReducer.token)
                console.log("AUTH ",isAuthenticated())
                // localStorage.setItem("login", JSON.stringify(response.data));
                // localStorage.setItem("token", JSON.stringify(response.data.body.token));
            })
            .catch((err) => console.log("❌💥", err))
    }
}