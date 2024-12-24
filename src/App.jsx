import { Container } from "./components/container";
import styles from "./app.module.css";
import { useEffect, useState } from "react";

function App() {
  const [scale, setScale] = useState(1);
  const [rotate, setRotate] = useState(0);

  const windowHeight = window.innerHeight;

  const handleScroll = () => {
    const scrollY = window.scrollY;

    if (scrollY < windowHeight) {
      setScale(1 - scrollY / 2000);
      setRotate(scrollY * 0.025);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={styles.app}>
      <div
        className={styles.oblozhka}
        style={{
          transform: `scale(${scale}) rotate(${rotate}deg) translate(-50%, -50%)`,
          transition: "transform .2s ease-in-out",
          position: "fixed" /* Фиксируем положение относительно окна */,
          top: "50%",
          left: "50%",
        }}
      >
        <Container>
          <div className={styles.journal}>
            <div className={styles.kolontitul}>
              <p>внутри журнала - стикер в подарок</p>
            </div>
            <h2 className={styles.title}>PLAYBOY</h2>
            <div className={styles.startname}>
              <p className={styles.name}>ЕЛЕНА</p>
            </div>
          </div>
        </Container>
      </div>

      <div className={styles.background}></div>
    </div>
  );
}

export default App;
