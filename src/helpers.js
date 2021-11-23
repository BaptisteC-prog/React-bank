import { Route } from "react-router";
import { Redirect } from "react-router";

export function getFromLocalStore(data) {
    let find = localStorage.getItem(data);
    return find && JSON.parse(find);
}

export function setInLocalStore(name, data) {
    localStorage.setItem(name, JSON.stringify(data));
}

export function PublicRoute({ component: Component, isAuthenticated, ...children }) {
    return (
        <Route
            render={props =>
                isAuthenticated ? (
                    <Redirect to="/" />
                ) : (
                    <Component {...props} {...children} />
                )
            }
        />
    );
}

export function PrivateRoute({ component: Component, isAuthenticated, ...children }) {
    if (isAuthenticated) {
        return <Route {...children} render={props => <Component {...props} />} />;
    }
    return <Redirect to="/" />;
}

