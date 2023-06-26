import style from "./CityList.module.css";
import Spinner from "./Spinner";
import CityItem from "./CityItem";
import PropTypes from "prop-types";
import Message from "./Message";
export default function CityList({ cities, isLoading }) {
  if (isLoading) return <Spinner />;
  if (cities.length === 0)
    return (
      <Message message="Add your first cities by clicking on the city in the map" />
    );
  return (
    <ul className={style.cityList}>
      {cities.map((city) => (
        <CityItem city={city} key={city.id} />
      ))}
    </ul>
  );
}

CityList.propTypes = {
  cities: PropTypes.arrayOf(
    PropTypes.shape({
      cityName: PropTypes.string.isRequired,
      country: PropTypes.string.isRequired,
      emoji: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
      notes: PropTypes.string.isRequired,
      position: PropTypes.shape({
        lat: PropTypes.number.isRequired,
        lng: PropTypes.number.isRequired,
      }).isRequired,
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
  isLoading: PropTypes.bool.isRequired,
};
