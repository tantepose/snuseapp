import React from 'react';
import { Link } from "@reach/router"

function Signup () {
    return (
        <div className="hero-wrapper dark">
            <div className="hero-content">
                <p>La oss signe opp! 👋</p>

                <Link to="/">home</Link>
                <Link to="/login">log in</Link>
                <Link to="/signup">sign up</Link>
            </div>
        </div>
    );
}

export default Signup;