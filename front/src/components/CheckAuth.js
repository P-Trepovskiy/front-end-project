import React, {useContext, useEffect, useState} from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate, useNavigate } from 'react-router-dom';
import {Context} from "../index";
import {check} from "../http/userApi";

const CheckAuth = () => {
    const {user} = useContext(Context)

    useEffect(() => {
        check()
        .then(data => {
            user.setUser(data)
            user.setIsAuth(true)
            user.setRole(data.role)
            console.log(user);
        })
        .catch((e) => {
            user.setIsAuth(false)
        })
    }, [])
  
    return null;
};

export default CheckAuth;