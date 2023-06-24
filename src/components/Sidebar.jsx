import styles from "./Sidebar.module.css";
import Logo from "../components/Logo";
import AppNav from "./AppNav";

export default function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <Logo />
      <AppNav />
      <p>List of Cities</p>
      <footer className={styles.footer}>
        <p className={styles.copyright}>
          &copy; Copyright{new Date().getFullYear()} by WorldWise inc.
        </p>
      </footer>
    </div>
  );
}
