import React, { useState, useEffect } from 'react';

export function unlogged() {
    return (
        <div>
            <h1>You must be logged in to acces this page</h1>
            <div>
                <a className="main-nav-item" href="./sign-in.html">
                    <i className="fa fa-user-circle"></i>
                    Sign In
                </a>
            </div>
        </div>
    )
}