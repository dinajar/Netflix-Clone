import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Image from 'react-bootstrap/Image';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import axios from 'axios';


function ModalMovie(props) {

  const [comment, setComment] = useState('');

  const handleChange = (event) => {
    setComment(event.target.value);
  };
  const handleFavList = () => {

  };
  const [addMovie, setaddMovie] = useState([]);

  const sendReq = async () => {
      const resdata = await axios.post('http://localhost:3001/addMovie', {
      name: props.name,
      poster_path: `https://image.tmdb.org/t/p/w500${props.src}`,
      overview: props.overview,
      comment: comment
    });
  }

  return (

    <Modal show={props.showFlag} onHide={props.handleclose}>
      <Modal.Header closeButton>
        <Modal.Title>{props.name}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Image style={{ width: '18rem' }} src={'https://image.tmdb.org/t/p/w500' + props.src}></Image>
        <p>{props.overview}</p>
        <Form>
          <Form.Group>
            <Form.Label>Add a comment:</Form.Label>
            <Form.Control as="textarea" rows={3} value={comment} onChange={handleChange} />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={props.handleclose}>
          Close
        </Button>
        <Button variant="primary" onClick={sendReq}>
          Add to Favorites
        </Button>
      </Modal.Footer>
    </Modal>
  )
}
export default ModalMovie;