import styles from './App.module.scss';
import { useEffect } from 'react';

const URL = `https://gist.githubusercontent.com/Sir-Unkie/8e7a83acaab32c3f6aa6224aea3c3b6c/raw/Rawdata.csv`;

function App() {
  useEffect(() => {
    const fetchData = async URL => {
      try {
        const response = await fetch(URL);
        const data = await response.text();
        console.log(data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData(URL);
  }, []);
  return <div className={styles.App}></div>;
}

export default App;
