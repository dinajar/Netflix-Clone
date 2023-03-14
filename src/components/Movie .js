import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';

function Movie(props) {
  const addMovie = () => {
    props.AddToFavorites({
      name: props.name,
      image: 'https://image.tmdb.org/t/p/w500' + props.src,
      overview: props.overview
    });
  };

  return (
    <Col>
      <Card style={{ width: '23rem' }}>
        <Card.Img variant="top" src={'https://image.tmdb.org/t/p/w500' + props.src} />
        <Card.Body>
          <Card.Title>{props.name}</Card.Title>
          <Card.Text>{props.overview}</Card.Text>
          <Button variant="primary" onClick={addMovie}>
            Add to Favorites
          </Button>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default Movie;