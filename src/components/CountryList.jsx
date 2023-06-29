import styles from "./CountryList.module.css";
import Spinner from "./Spinner";
import CountryItem from "./CountryItem";
import PropTypes from "prop-types";
import Message from "./Message";
import { useCities } from "../contexts/CitiesContext";
export default function CountryList() {
  const { cities, isLoading } = useCities();
  if (isLoading) return <Spinner />;
  if (cities.length === 0)
    return (
      <Message message="Add your first cities by clicking on the city in the map" />
    );
  let countries = cities.reduce((arr, city) => {
    if (!arr.map((el) => el.country).includes(city.country)) {
      return [
        ...arr,
        { country: city.country, emoji: city.emoji, id: city.country },
      ];
    } else {
      return arr;
    }
  }, []);
  return (
    <ul className={styles.countryList}>
      {countries.map((country) => (
        <CountryItem country={country} key={country.country} />
      ))}
    </ul>
  );
}
