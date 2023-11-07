import React from "react"
import { useNavigate } from 'react-router-dom';

const Button = () => {
    const navigate = useNavigate()

    const navToBooking = () =>{
        return(
            navigate("/Bookings")
        )
    }
    return (
        <button type="button" onClick={navToBooking} class="btn btn-danger w-25">Book now</button>
    );
}
export default Button;