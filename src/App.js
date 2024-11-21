import React, { useState, useEffect } from 'react';
import Header from './components/header';
import Movie from './components/movie';
import { Container, Row, Col } from 'react-bootstrap';

const App = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [query, setQuery] = useState('Random'); 

  const API_KEY = 'c367c422';

  const fetchMovies = async () => {
    setLoading(true);
    try {
      const response = await fetch(`http://www.omdbapi.com/?s=${query}&apikey=${API_KEY}`);
      const data = await response.json();

      if (data.Search) {
        setMovies(data.Search);
      } else {
        setMovies([]); 
      }
    } catch (error) {
      console.error('Error fetching movies:', error);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchMovies();
  }, [query]);

  return (
    <>
      <Header title="RNF-21" setQuery={setQuery} />
      <Container fluid style={{ marginTop: '80px' }}> {}
        <h3 className="text-center my-4">these are the most popular films and series right now</h3> {}
        {loading ? (
          <div className="text-center">
            <h3>Loading movies...</h3>
          </div>
        ) : (
          <Row className="justify-content-center g-4">
            {movies.length > 0 ? (
              movies.map((movie) => (
                <Col key={movie.imdbID} lg={3} md={4} sm={6} xs={12}>
                  <Movie movie={movie} />
                </Col>
              ))
            ) : (
              <p>No movies found. Please try searching for another title.</p>
            )}
          </Row>
        )}
      </Container>
    </>
  );
};

export default App;
