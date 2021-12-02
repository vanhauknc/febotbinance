import React from "react";
import LoginPage from "../Pages/Login/LoginPage";
import RegisterPage from "../Pages/Login/RegisterPage";




const routes = [
    // {
    //     path :'/home',
    //     exact : false,
    //     main : ()=> <HomePage/>
    // },
    {
        path :'/login',
        exact : false,
        main : ()=> <LoginPage/>
    },
    {
        path :'/register',
        exact : false,
        main : ()=> <RegisterPage/>
    },
    {
        path :'/',
        exact : true,
        main : ()=> <LoginPage/>
    },
    // { 
    //     path: "", 
    //     exact: false, 
    //     main: () => <NotFoundPage /> 
    // },
];
export default routes;