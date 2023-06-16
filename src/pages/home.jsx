import { useEffect, useState } from "react";
import { getActivities } from "../providers/stravaProvider";
import Header from "../components/Header";
import { LastActivitiesList } from "../components/LastActivitiesList";
import { Navigate } from "react-router-dom";

const Home = ({ accessToken }) => {
  const [activities, setActivities] = useState([]);
  const [activitiesLoaded, setActivitiesLoaded] = useState(false);

  useEffect(() => {
    const fetchActivities = async () => {
      if (!activitiesLoaded) { // Verifica si las actividades ya se cargaron previamente
        try {
          const response = await getActivities(accessToken);
          setActivities(response);
          setActivitiesLoaded(true); // Marca las actividades como cargadas
        } catch (error) {
          return window.location.replace("/login");
        }
      }
    };

    fetchActivities();
  }, [accessToken, activitiesLoaded]); // Agrega 'activitiesLoaded' como dependencia

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