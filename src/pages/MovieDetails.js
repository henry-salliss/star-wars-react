import { useParams } from "react-router-dom";
import useHttp from "../hooks/useHttp";
import { getMovie } from "../helpers/helpers";
import { useEffect } from "react";

const MovieDetails = () => {
  const params = useParams();
  const { movieID } = params;

  const { isLoading, error, sendRequest } = useHttp();

  useEffect(() => {
    sendRequest({ url: `https://swapi.dev/api/films/${movieID}` }, getMovie);
  }, [sendRequest]);

  return <p>{params.movieID}</p>;
};

export default MovieDetails;
