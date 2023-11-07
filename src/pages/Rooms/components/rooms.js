import React from 'react';
import RoomCard from '../../RoomCard/components/roomCard';
import Button from '../../../components/button';
import "../styles/rooms.css";
import { useState, useEffect } from 'react';
// import { RoomContents } from '../../../Rooms';
import room10 from "../../../asset/executive-room2.jpg";


import room1 from "../../../asset/normal-single_room.jpeg";
import room2 from "../../../asset/one-man-executive.jpg";
import room3 from "../../../asset/Double_room.jpeg";
import room4 from "../../../asset/personal-room.jpg";
import room5 from "../../../asset/executive-room.jpg";
import room6 from "../../../asset/single-executive.jpg";
import room7 from "../../../asset/twin-room.jpg";
import room8 from "../../../asset/family room.jpg";
import room9 from "../../../asset/couple-room.jpg";



const Rooms = () =>{
    
    const [searchRooms,setSearchRooms] = useState ([])
  

    const handleSearchChange = (event)=>{
        let roomTypes = event.target.value.toLowerCase();
    

        let result =(roomContents.filter(rm => rm.roomType.toLowerCase().includes(roomTypes)));
        setSearchRooms(result)
    }

    let roomContents = [
        {
            id:1,
            roomType:"single",
            price:"#20,000 per night",
            img:room1,
            desc:"The room is a personal room and has all the comfort"
    
        },
        {
            id:2,
            roomType:"single executive",
            price:"#50,000 per night",
            img:room2,
            desc:"The room is a personal room and has all the comfort"
    
        },
        {
            id:3,
            roomType:"double room",
            price:"#70,000 per night",
            img:room3,
            desc:"The room is a personal room and has all the comfort"
    
        },
        {
            id:4,
            roomType:"personal",
            price:"#20,000",
            img:room4,
            desc:"The room is a personal room and has all the comfort"
    
        },
        {
            id:5,
            roomType:"double executive",
            price:"#200,000",
            img:room5,
            desc:"The room is a personal room and has all the comfort"
    
        },
        {
            id:6,
            roomType:"single special",
            price:"#40,000",
            img:room6,
            desc:"The room is a personal room and has all the comfort"
    
        },
        {
            id:7,
            roomType:"apartment room",
            price:"#200,000 per night",
            img:room7,
            desc:"The room is a personal room and has all the comfort"
    
        },
        {
            id:8,
            roomType:"family",
            price:"#100,000",
            img:room8,
            desc:"The room is a personal room and has all the comfort"
    
        },
        {
            id:9,
            roomType:"single couple",
            price:"#50,000 per night",
            img:room9,
            desc:"The room is a personal room and has all the comfort"
    
        }
    ]


    
    useEffect(() => {
    
     setSearchRooms(roomContents)
        
    }, [])


    return(
        <>
            <div className="container-fluid Hero-section">
            <img src={room10} alt="" style={{width:"100%",height:"40vw"}}/>
            <div class="carousel-caption d-none d-md-block top">
                <h1 className="title">ROOMS & SUITES</h1>
                <p className="fs-2">We Give More Than What You Ask ; A Home.</p>
                <Button />
              </div>
            </div>

             <div className="container my-5">
                <div className='row mx-4'>
                    <input type="search" className="search-rooms" placeholder="Search room types" 
                    value={searchRooms.roomType} onChange={handleSearchChange}/>
                   
                    
                </div>
             

             <p className="text-dark text-center fs-3 py-2 fw-4 mt-3">
                We keep your peace as we give you comfort.
            </p>
            <div className="text-center center-text">
              <p className="text-dark fs-5 lh-sm">
                Lorem ipsum dolor sit amet. Aut ullam ipsam et doloremque dolores ut
                iste rerum qui ipsa corrupti. Eum impedit incidunt sit quis rerum 33
                tenetur adipisci aut debitis temporibus.
              </p>
            </div>

    <div className="row gy-3 gx-3 container-card">
        {
            searchRooms.map((item,index) =>{
                return(
                    <RoomCard key={item.id} img={item.img} roomType={item.roomType} price={item.price} desc ={item.desc} />
                )
            })
        }
    </div>
</div>

        </>
        
    );
}
export default Rooms;