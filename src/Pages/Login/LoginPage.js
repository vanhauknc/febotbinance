import React, { Component } from 'react';
import {  Link,Redirect,withRouter  } from "react-router-dom";
import NotificationComponent from '../../Components/NotificationComponent';
import {checkValidateForm} from '../../helper/helper'
import callApi from '../../utils/apiCaller';



class LoginPage extends Component {
    constructor(props){
        super(props)
        this.state={
            email : '',
            password: '',
        }
        
    }
    onChange = (e)=>{
        let name = e.target.name;
        let value = e.target.value;
        this.setState({
            [name]:value
        })
    }
   
    onSubmit = ()=>{
       let resultCheck = checkValidateForm(this.state);
       if(resultCheck !='')
       {
           return
       }
       callApi('login','POST',this.state).then(res=>{
           if(res.data.status)
           {
            localStorage.setItem("token",res.data.token)
            this.props.history.push('/home')
            
           }else{
            NotificationComponent.openNotificationWithIcon('error',"Thông báo !",res.data.message)
           }
       })
       
    }

    render() {
        let isLogin = localStorage.getItem('token');

        if(isLogin)
        {
            return <Redirect to='/home' />
        }

        let {email,password} = this.state
        return (
            <div className="login">
                <div className="container sm:px-10">
                    <div className="block xl:grid grid-cols-2 gap-4">
                        {/* BEGIN: Login Info */}
                        <div className="hidden xl:flex flex-col min-h-screen">
                            <a href className="-intro-x flex items-center pt-5">
                                <img alt="HyperSoft" className="w-6" src="dist/images/img/logo.png" />
                                <Link to="/"><span className="text-white text-lg ml-3"> Hyper <span className="font-medium">Soft</span></span></Link> 
                            </a>
                            <div className="my-auto">
                                <img alt="HyperSoft" className="-intro-x w-1/2 -mt-16" src="dist/images/illustration.svg" />
                                <div className="-intro-x text-white font-medium text-4xl leading-tight mt-10">
                                    A few more clicks to
                                    <br />
                                    sign in to your account.
                                </div>
                                <div className="-intro-x mt-5 text-lg text-white">Free Toolkit for trader!</div>
                            </div>
                        </div>
                        {/* END: Login Info */}
                        {/* BEGIN: Login Form */}
                        <div className="h-screen xl:h-auto flex py-5 xl:py-0 my-10 xl:my-0">
                            <div className="my-auto mx-auto xl:ml-20 bg-white xl:bg-transparent px-5 sm:px-8 py-8 xl:p-0 rounded-md shadow-md xl:shadow-none w-full sm:w-3/4 lg:w-2/4 xl:w-auto">
                                <h2 className="intro-x font-bold text-2xl xl:text-3xl text-center xl:text-left">
                                    Sign In
                                </h2>
                                <div className="intro-x mt-2 text-gray-500 xl:hidden text-center">Free Toolkit for trader!</div>
                                <div className="intro-x mt-8">
                                    <input type="text" className="intro-x login__input input input--lg border border-gray-300 block" name="email" value={email} onChange={this.onChange} placeholder="Email" />
                                    <input type="password" className="intro-x login__input input input--lg border border-gray-300 block mt-4" name="password" value={password} onChange={this.onChange} placeholder="Password" />
                                </div>
                                <div className="intro-x flex text-gray-700 text-xs sm:text-sm mt-4">
                                    {/* <div className="flex items-center mr-auto">
                                        <input type="checkbox" className="input border mr-2" id="remember-me" />
                                        <label className="cursor-pointer select-none" htmlFor="remember-me">Remember me</label>
                                    </div> */}
                                   
                                    
                                </div>
                                <div className="intro-x mt-5 xl:mt-8 text-center xl:text-left">
                                    <button className="button button--lg w-full xl:w-32 text-white bg-theme-1 xl:mr-3" onClick={this.onSubmit}>Login</button>
                                    <button className="button button--lg w-full xl:w-32 text-gray-700 border border-gray-300 mt-3 xl:mt-0"><Link to="/register">Sign up</Link> </button>
                                </div>
                                <div className="intro-x mt-10 xl:mt-24 text-gray-700 text-center xl:text-left">
                                    By signin up, you agree to our
                                    <br />
                                    <a className="text-theme-1" href>Terms and Conditions</a> &amp; <a className="text-theme-1" >Privacy Policy</a>
                                </div>
                            </div>
                        </div>
                        {/* END: Login Form */}
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(LoginPage);