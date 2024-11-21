import React from 'react';

const Movie = ({ movie }) => {
  return (
    <div className="card h-100 shadow">
      <img 
        src={movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/300x450'} 
        className="card-img-top" 
        alt={movie.Title}
        style={{ height: '400px', objectFit: 'cover' }}
      />
      <div className="card-body" style={{ backgroundColor: '#EC8305' }}>
        <h5 className="card-title">{movie.Title}</h5>
        <p className="card-text">
          <small className="text-muted">
            {movie.Year} • {movie.Runtime}
          </small>
        </p>
      </div>
    </div>
  );
};

export default Movie;
