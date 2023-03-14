import Movie from './Movie ';
import Row from 'react-bootstrap/Row';
import { useState } from 'react';



function MovieList(props) {
    const [favorites, setFavorites] = useState([]);

    const addToFavorites = (movie) => {
        setFavorites([...favorites, movie]);
    };
    return (
        <Row xs={1} md={4} className="g-4">
            {props.data.map((item) => {
                return <Movie
                    src={item.poster_path}
                    name={item.name}
                    overview={item.overview}
                    key={item.id}
                />;
            })}
        </Row>
    );
}

export default MovieList;