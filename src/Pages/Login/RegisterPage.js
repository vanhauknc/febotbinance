import React, { Component } from 'react';
import { Link } from "react-router-dom";
import {checkValidateForm} from '../../helper/helper'
import callApi from '../../utils/apiCaller'
import NotificationComponent from '../../Components/NotificationComponent'
class RegisterPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            email: '',
            password: '',
            repassword: ''
        }
    }
    onChange = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        this.setState({
            [name]: value
        })
    }
    onSubmit = ()=>{
        let resultCheck = checkValidateForm(this.state);
        if(resultCheck !='')
        {
            return
        }
        callApi('register','POST',this.state).then(res=>{
            if(res.data.status)
            {
                NotificationComponent.openNotificationWithIcon('success',"Thông báo !",res.data.message)
            }else{
                NotificationComponent.openNotificationWithIcon('error',"Thông báo !",res.data.message)
            }
            
        })
        
        
     }
    render() {

        let { name, email, password, repassword } = this.state;
        return (
            <div className="login">
                <div className="container sm:px-10">
                    <div className="block xl:grid grid-cols-2 gap-4">
                        {/* BEGIN: Register Info */}
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
                                    sign up to your account.
                                </div>
                                <div className="-intro-x mt-5 text-lg text-white">Open your store in just a few clicks!</div>
                            </div>
                        </div>
                        {/* END: Register Info */}
                        {/* BEGIN: Register Form */}
                        <div className="h-screen xl:h-auto flex py-5 xl:py-0 my-10 xl:my-0">
                            <div className="my-auto mx-auto xl:ml-20 bg-white xl:bg-transparent px-5 sm:px-8 py-8 xl:p-0 rounded-md shadow-md xl:shadow-none w-full sm:w-3/4 lg:w-2/4 xl:w-auto">
                                <h2 className="intro-x font-bold text-2xl xl:text-3xl text-center xl:text-left">
                                    Sign Up
                                </h2>
                                <div className="intro-x mt-2 text-gray-500 xl:hidden text-center">Open your store in just a few clicks!</div>
                                <div className="intro-x mt-8">
                                    <input type="text" name="name" value={name} onChange={this.onChange} className="intro-x login__input input input--lg border border-gray-300 block mt-4" placeholder="Full Name" />
                                    <input type="text" name="email" value={email} onChange={this.onChange} className="intro-x login__input input input--lg border border-gray-300 block mt-4" placeholder="Email" />
                                    <input type="password" name="password" value={password} onChange={this.onChange} className="intro-x login__input input input--lg border border-gray-300 block mt-4" placeholder="Password" />
                                    <input type="password" name="repassword" value={repassword} onChange={this.onChange} className="intro-x login__input input input--lg border border-gray-300 block mt-4" placeholder="Password Confirmation" />
                                </div>
                                <div className="intro-x flex text-gray-700 text-xs sm:text-sm mt-4">


                                </div>
                                <div className="intro-x mt-5 xl:mt-8 text-center xl:text-left">
                                    <button className="button button--lg w-full xl:w-32 text-white bg-theme-1 xl:mr-3" onClick={this.onSubmit}>Register</button>
                                    <button className="button button--lg w-full xl:w-32 text-gray-700 border border-gray-300 mt-3 xl:mt-0"><Link to="/login">Login</Link></button>
                                </div>
                            </div>
                        </div>
                        {/* END: Register Form */}
                    </div>
                </div>
            </div>
        );
    }
}

export default RegisterPage;