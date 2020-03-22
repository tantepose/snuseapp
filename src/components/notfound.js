import React from 'react';
import { Link } from "@reach/router"

function NotFound () {
    return (
        <div>
            <p>Oh no, 404!</p>
            <Link to="/">home</Link>
        </div>
    );
}

export default NotFound;