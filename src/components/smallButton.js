import React from "react"
import { useNavigate } from 'react-router-dom';

const SmallButton = () => {
    const navigate = useNavigate()

    const navToBooking = () =>{
        return(
            navigate("/Bookings")
        )
    }
    return (
        <button type="button" onClick={navToBooking} class="btn btn-danger">Book now</button>
    );
}
export default SmallButton;