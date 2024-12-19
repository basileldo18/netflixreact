import React, { useEffect } from "react";
import './banner.css'
import {API_KEY,imageURL} from '../constants/constant'
import axios from "../../axios";
import { useState } from "react";

function Banner() {
    const[movie,setMovie]=useState()
    useEffect(()=>{
        axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`).then((Response)=>{
            console.log(Response.data.results[0])
            setMovie(Response.data.results[0])
        })
    },[])
    return (
        <div
        style={{backgroundImage:`url(${movie ? imageURL+movie.backdrop_path:""})`
        }}
         className="banner">
            <div className="content"> {/* Changed content to className */}
                <h1 className="title">{movie ? movie.title : ""}</h1>
                <div className="banner_button">
                    <button className="btn">Play</button>
                    <button className="btn">My List</button>
                </div>
                <h1 className="description">{movie ? movie.overview:""}</h1>
            </div>
            <div className="fade"></div>

        </div>
    );
}

export default Banner;