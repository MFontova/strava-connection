import React, { useEffect, useState } from "react";
import { getActivities } from "../providers/stravaProvider";
import Header from "../components/Header";
import { LastActivitiesList } from "../components/LastActivitiesList";
import { Navigate } from "react-router-dom";

const Home = ({ accessToken }) => {
  const [activities, setActivities] = useState([]);
  const [activitiesLoaded, setActivitiesLoaded] = useState(false);

  useEffect(() => {
    const fetchActivities = async () => {
      const cachedActivities = localStorage.getItem("activities");

      if (cachedActivities) {
        setActivities(JSON.parse(cachedActivities));
        setActivitiesLoaded(true);
      } else {
        try {
          const response = await getActivities(accessToken);
          setActivities(response);
          setActivitiesLoaded(true);
          localStorage.setItem("activities", JSON.stringify(response));
        } catch (error) {
          return window.location.replace("/login");
        }
      }
    };

    fetchActivities();
  }, []); // El arreglo de dependencias está vacío para que se ejecute solo una vez al montar el componente

  console.log(activities)
  return activities.length > 0 ? (
    <>
      <Header activitiesList={activities} />
      <LastActivitiesList activitiesList={activities} />
    </>
  ) : (
    <p>Cargando...</p>
  );
};

export default Home;
