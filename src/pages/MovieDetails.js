import { useParams } from "react-router-dom";
import useHttp from "../hooks/useHttp";
import { getMovie } from "../helpers/helpers";
import { Fragment, useEffect } from "react";
import LoadingSpinner from "../components/UI/LoadingSpinner";
import Movie from "../components/Movie";

const MovieDetails = () => {
  const params = useParams();
  const { movieID } = params;

  const { isLoading, error, sendRequest, data: loadedMovie } = useHttp();
  console.log(loadedMovie);
  useEffect(() => {
    sendRequest({ url: `https://swapi.dev/api/films/${movieID}` }, getMovie);
  }, [sendRequest]);

  let content;

  if (isLoading) content = <LoadingSpinner />;

  if (!isLoading && loadedMovie) {
    content = <Movie onLoadMovie={loadedMovie} />;
  }

  return <Fragment>{content}</Fragment>;
};

export default MovieDetails;
