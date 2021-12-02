import React from "react";
import IndexPage from "../Pages/IndexPage";
import NotFoundPage from "../Pages/NotFoundPage";

import NotificationPage from "../Pages/NotiPage/NotificationPage";
import TestPage from "../Pages/TestPage";

const routerMenu = [
    {
        path :'/home/',
        exact : true,
        main : ()=> <IndexPage/>
    },
    {
        path :'/home/test',
        exact : false,
        main : ()=> <TestPage/>
    },
    {
        path :'/home/notify',
        exact : false,
        main : ()=> <NotificationPage/>
    }
];
export default routerMenu;