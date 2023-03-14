import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';

function FavList(props) {
  const selectedMovie = props.favorites.filter((movie) => movie.id === props.selectedMovieId)[0];

  return (
    <Col>
      <Card style={{ width: '23rem' }}>
        <Card.Img variant="top" src={selectedMovie.image} />
        <Card.Body>
          <Card.Title>{selectedMovie.name}</Card.Title>
          <Card.Text>{selectedMovie.overview}</Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default FavList;