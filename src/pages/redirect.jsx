import React, { useEffect, useState } from "react";
import axios from "axios";
import { Navigate, useParams, useSearchParams } from "react-router-dom";

const Redirect = () => {
  const [shouldNavigate, setShouldNavigate] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post(
          `https://www.strava.com/oauth/token?client_id=${process.env.REACT_APP_CLIENT_ID}&client_secret=${process.env.REACT_APP_CLIENT_SECRET}&code=${searchParams.get(
            "code"
          )}&grant_type=authorization_code`
        );

        console.log(response);
        const accessToken = response.data.access_token;
        const refreshToken = response.data.refresh_token;
        const expires_at = response.data.expires_at;
        const cookie_expires = new Date(expires_at * 1000).toUTCString();
        document.cookie = `refreshToken=${refreshToken}`;
        document.cookie = `accessToken=${accessToken}; expires=${cookie_expires}`;

        setShouldNavigate(true); // Actualizar el estado para permitir la navegación
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []); // Asegúrate de pasar un arreglo vacío como dependencia para que useEffect se ejecute solo una vez

  return shouldNavigate ? <Navigate to={"/"} /> : null;
};

export default Redirect;
