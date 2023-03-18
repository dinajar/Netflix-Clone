import './Home.css';
import MovieList from './MovieList';
import { useEffect, useState } from "react";
import axios from 'axios';
//import MovieList from "./MovieList";

function Home(){
    const [movList , setmovList] = useState([]);
    const sendReq = async ()=>{
        const serverURL =`${process.env.REACT_APP_serverURL}/trending`;
        const resdata = await axios(serverURL);
        console.log(resdata.data);
        setmovList(resdata.data);

    }

    useEffect(()=>{
        sendReq();
    },[])

    return (
        <div  className='home'>
           <MovieList  data={movList}/> 
        </div>
    )
}
export default Home;