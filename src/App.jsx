import { Container } from "./components/container";
import styles from "./app.module.css";

function App() {
  return (
    <div className={styles.app}>
      <Container>
        <div className={styles.journal}>
          <div className={styles.kolontitul}>
            <p>внутри журнала - стикер в подарок</p>
          </div>
          <h2 className={styles.title}>PLAYBOY</h2>
          <div className={styles.startname}>
            <p className={styles.surname}>СОКОЛОВА</p>
            <p className={styles.name}>ЕЛЕНА</p>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default App;
