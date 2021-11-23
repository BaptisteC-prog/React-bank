import React, { useState, useEffect, useRef } from 'react';
import { userLogin } from '../actions/userActions';
import store from '../store';
//password123
export function SignIn() {

    const username = useRef(null)
    const password = useRef(null)

    const handleClick = e => {
        //alert()  

        e.preventDefault()
        //store dispatch
        //console.log(username.current.value,password.current.value)
        store.dispatch(userLogin(username.current.value, password.current.value))
        //
    }

    return (
        <div id="SignIn">
            <nav className="main-nav">
                <a className="main-nav-logo" href="./index.html">
                    <img
                        className="main-nav-logo-image"
                        src="./img/argentBankLogo.png"
                        alt="Argent Bank Logo"
                    />
                    <h1 className="sr-only">Argent Bank</h1>
                </a>
                <div>
                    <a className="main-nav-item" href="./sign-in.html">
                        <i className="fa fa-user-circle"></i>
                        Sign In
                    </a>
                </div>
            </nav>
            <main className="main bg-dark">
                <section className="sign-in-content">
                    <i className="fa fa-user-circle sign-in-icon"></i>
                    <h1>Sign In</h1>
                    <form>
                        <div className="input-wrapper">
                            <label htmlFor="username">Username</label>
                            <input type="text" id="username" ref={username} />
                        </div>
                        <div className="input-wrapper">
                            <label htmlFor="password">Password</label>
                            <input type="password" id="password" ref={password} />
                        </div>
                        <div className="input-remember">
                            <input type="checkbox" id="remember-me" />
                            <label htmlFor="remember-me">Remember me</label>
                        </div>

                        <button onClick={handleClick} className="sign-in-button">Sign In</button>
                        <a href="/user.html">user html</a>

                    </form>
                </section>
            </main>
            <footer className="footer">
                <p className="footer-text">Copyright 2020 Argent Bank</p>
            </footer>
        </div>
    )
}