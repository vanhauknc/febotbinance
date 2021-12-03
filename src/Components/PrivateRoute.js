import { Redirect, Route } from "react-router";

export const PrivateRoute = ({component:Component,...rest})=>(
    <Route {...rest} render={(props)=>(
        localStorage.getItem('hyperUser')
        ? <Component {...props} /> 
        : <Redirect to='/login' />

    )}  />
)
