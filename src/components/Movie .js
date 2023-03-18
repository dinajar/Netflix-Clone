import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import { useState } from 'react';
import ModalMovie from './ModalMovie'

function Movie(props) {
    /*const addMovie = () => {
      props.AddToFavorites({
        name: props.name,
        image: 'https://image.tmdb.org/t/p/w500' + props.src,
        overview: props.overview
      });
    };*/
    const [showFlag, setShowFlag] = useState(false);
    const handleShow = (item) => {
        setShowFlag(true);
    }

    const handleclose = () => {
        setShowFlag(false);
    }


    return (
        <>
            <Col>
                <Card style={{ width: '20rem', backgroundColor:"black", color:"white" }} >
                    <Card.Img variant="top" src={'https://image.tmdb.org/t/p/w500' + props.src} />
                    <Card.Body>
                        <Card.Title >{props.name}</Card.Title>
                        <Card.Text>{props.overview}</Card.Text>
                        <Button variant="primary" onClick={handleShow}>
                            More
                        </Button>
                    </Card.Body>
                </Card>
            </Col>
            <ModalMovie showFlag={showFlag} handleclose={handleclose} name={props.name} src={props.src} overview={props.overview}/>
        </>

    );

}

export default Movie;