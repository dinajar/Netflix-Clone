import MovieList from './MovieList';
import { useEffect, useState } from "react";
import axios from 'axios';
//import MovieList from "./MovieList";

function Home(){
    const [movList , setmovList] = useState([]);
    const sendReq = async ()=>{
        const serverURL ='http://localhost:3001/trending';
        const resdata = await axios(serverURL);
        console.log(resdata.data);
        setmovList(resdata.data);

    }

    useEffect(()=>{
        sendReq();
    },[])

    return (
        <>
           <MovieList  data={movList}/> 
        </>
    )
}
export default Home;