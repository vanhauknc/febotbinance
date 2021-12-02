import React, { Component } from 'react';
import { Link } from "react-router-dom";

class NotFoundPage extends Component {
    render() {
        return (


            <div>
                <div class="error-page flex flex-col lg:flex-row items-center justify-center h-screen text-center lg:text-left">
                    <div class="-intro-x lg:mr-20">
                        <img alt="" class="h-48 lg:h-auto" src="dist/images/error-illustration.svg" />
                    </div>
                    <div class="text-white mt-10 lg:mt-0">
                        <div class="intro-x text-6xl font-medium">404</div>
                        <div class="intro-x text-xl lg:text-3xl font-medium">Oops. This page has gone missing.</div>
                        <div class="intro-x text-lg mt-3">You may have mistyped the address or the page may have moved.</div>
                        <button class="intro-x button button--lg border border-white mt-10"><Link to="/">Back to Home</Link> </button>
                    </div>
                </div>
            </div>


        );
    }
}

export default NotFoundPage;