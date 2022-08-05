import React from "react";
import { Route, Redirect } from "react-router-dom";
import isAdmin from "./isAdmin";

const PublicRoute = ({ component: Component, restricted, ...rest }) => {
    return (
        <Route
            {...rest}
            render={(props) =>
                isAdmin() && restricted ? <Redirect to="/" /> : <Component {...props} />

            } />
    );
};
export default PublicRoute;