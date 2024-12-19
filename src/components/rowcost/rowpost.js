import React,{useEffect,useState} from "react";
import './rowpost.css'
import {  imageURL,API_KEY } from "../constants/constant";
import axios from "../../axios";
import Youtube from "react-youtube"

function RowPost(props)
{
    const [post, setPost] = useState([]);
    const [uri,seturlid]=useState('')
    useEffect(()=>{
        axios.get(props.url).then(response=>{
            console.log(response.data.results);
            setPost(response.data.results)
            console.log("ssdsd")

        })
        .catch(error => {
            console.error("Error fetching data: ", error);
        });

    },[])
    const opts = {
        height: '490',
        width: '100%',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 1,
        },
      };
    const handlemovie=((id)=>{
        console.log(id)
        axios.get(`movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then(response=>{
            if(response.data.results.length!==0)
            {
                console.log(response.data.results)
                console.log("resss not empty")
                seturlid(response.data.results[0])
            }
        })
        .catch(error => {
            console.error("Error fetching data: ", error);
        });

    })
    return (
        <div className="row">
            <h2>
                {props.title}
            </h2>
            <div className="posters">
                {post.map((obj)=>
                <img onClick={()=>handlemovie(obj.id)} className={props.issmall ? 'smallposter':'poster'} alt="poster" src={`${imageURL+obj.backdrop_path}`}/>
                 )}</div>
                 { uri &&    <Youtube opts={opts} videoId={uri.key}/>}
        </div>
    )
}
export default RowPost