import React from 'react';
import { Link } from "@reach/router"

function Login () {
    return (
        <div className="hero-wrapper dark">
            <div className="hero-content">
                <p>La oss logge inn! 👋</p>

                <Link to="/">home</Link>
                <Link to="/login">log in</Link>
                <Link to="/signup">sign up</Link>
            </div>
        </div>
    );
}

export default Login;