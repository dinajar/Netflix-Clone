import { useEffect, useState } from "react";
import axios from 'axios';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import MoreModal from "./MoreModal";
import UpdateModal from "./Update Modal";
//import Delete from "./Delete";
//import Col from 'react-bootstrap/Col';

function FavList() {

  const [movList, setmovList] = useState([]);
  const [showFlag, setShowFlag] = useState(false);
  const [updateFlage, setupdateFlage] = useState(false);
  const [cardValues, setcardValues] = useState({});



  const sendReq = async () => {
    const serverURL = 'http://localhost:3001/getMovies';
    const resdata = await axios(serverURL);
    setmovList(resdata.data);

  }


  const handleShow = (movie) => {
    setShowFlag(true);
    setcardValues(movie);
  }

  const showUpdateModal = (movie) => {
    setupdateFlage(true);
    setcardValues(movie);
  }


  const handleclose = () => {
    setShowFlag(false);
    setupdateFlage(false);
  }

  const takeNewArr = (newArr) => {
    setmovList(newArr);
  }


  const deleteArr = async (movie ,e)=>{
    e.preventDefault();
    const serverURL = `http://localhost:3001/delete/${movie.id}`;
        const axiosRes = await axios.delete(serverURL);
        console.log(axiosRes.data);
        setmovList(axiosRes.data);


  }

  useEffect(() => {
    sendReq();
  }, [])

  return (
    
    <div className="row" style={{ backgroundColor: 'black' }}>
      {movList.map((movie) => (
        <div className="col" key={movie.id} >
          <Card style={{ width: '20rem' ,  backgroundColor:"black" , color:"white"}}>
            <Card.Img variant="top" src={movie.poster_path} />
            <Card.Body>
              <Card.Title>{movie.name}</Card.Title>
              <Card.Text>{movie.overview}</Card.Text>
              <Card.Text>{movie.comment}</Card.Text>
              <Button variant="primary" onClick={() => { handleShow(movie) }} >
                More
              </Button>{' '}
              <Button variant="success" onClick={() => { showUpdateModal(movie) }}>
                Update
              </Button>{' '}
              <Button variant="danger" onClick={(e)=>{deleteArr(movie , e)}}>
                Delete
              </Button>
            </Card.Body>
          </Card>
        </div>
      ))}
      <MoreModal showFlag={showFlag} handleclose={handleclose} cardValues={cardValues} />
      <UpdateModal updateFlage={updateFlage} handleclose={handleclose} cardValues={cardValues} takeNewArr={takeNewArr} />

    </div>

  );
}


export default FavList;