import React from 'react'
import { Link } from "@reach/router"

function User (props) {
    if (!props.userID) {
        return(<p>hæ?</p>)
    } else {
        return (
            <div>
                <p>Hei, {props.userID}! 👋</p>
            </div>
        )
    }
}
  
export default User