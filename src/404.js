import React from 'react';

export const NotFound = () => (
    <div className="body_wrapper">
        <section className="error_area text-center align-items-center d-flex">
            <div className="container">
                <div className="error_text">
                    <h3>Page not found!</h3>
                    <p>We’re sorry, the page you have looked for does not exist in our database!<br/> Maybe go to our home page or try to use a search?</p>
                    <a class="back_btn" href="/">Go Back to home Page</a>
                    <h1>404</h1>
                    <img src={require("./image/contact.svg")} alt=""/>
                    
                </div>
            </div>
        </section>
    </div>
)