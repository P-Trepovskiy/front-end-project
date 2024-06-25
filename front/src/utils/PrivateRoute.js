import { observer } from "mobx-react-lite";
import { Navigate } from "react-router-dom";
import React, {useContext, useEffect, useState} from 'react';
import {Context} from "../index";

const PrivateRoute = observer(({ element, ...rest }) => {
    const {user} = useContext(Context)

    return user.isAuth ? (
        element
    ) : (
        <Navigate to="/login" replace />
    );
});

export default PrivateRoute;
