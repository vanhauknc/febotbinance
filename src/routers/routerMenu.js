import React from "react";
import CauHinhBot from "../Pages/BotTelegram/CauHinhBot";
import HDTaoBot from "../Pages/BotTelegram/HDTaoBot";
import IndexPage from "../Pages/IndexPage";
import NotFoundPage from "../Pages/NotFoundPage";
import HistoryNoti from "../Pages/NotiPage/HistoryNoti";

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
    },
    {
        path :'/home/history-notify',
        exact : false,
        main : ()=> <HistoryNoti/>
    },
    {
        path :'/home/introbot',
        exact : false,
        main : ()=> <HDTaoBot/>
    },
    {
        path :'/home/configbot',
        exact : false,
        main : ()=> <CauHinhBot/>
    }
];
export default routerMenu;