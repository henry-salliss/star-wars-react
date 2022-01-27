const Movie = (props) => {
  const { onLoadMovie } = props;

  return (
    <div>
      <h1>{onLoadMovie.title}</h1>
      <p>{onLoadMovie.opening_crawl}</p>
    </div>
  );
};

export default Movie;
