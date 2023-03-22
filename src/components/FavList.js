import { useEffect, useState } from "react";
import axios from 'axios';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';

function FavList(){

    const [movList , setmovList] = useState([]);
    const sendReq = async ()=>{
        const serverURL =`http://movies-library-production-fa39.up.railway.app/getMovies`;
        const resdata = await axios(serverURL);
        console.log(resdata.data);
        setmovList(resdata.data);

    }

    useEffect(()=>{
        sendReq();
    },[])
    return(
        
         <div className="row">
         {movList.map((movie) => (
           <div className="col" key={movie.id}>
             <Card style={{ width: '20rem' }}>
               <Card.Img variant="top" src={movie.poster_path} />
               <Card.Body>
                 <Card.Title>{movie.name}</Card.Title>
                 <Card.Text>{movie.overview}</Card.Text>
                 <Card.Text>{movList.comment}</Card.Text>
               </Card.Body>
             </Card>
           </div>
         ))}
       </div>
     );
    
}
export default FavList;
