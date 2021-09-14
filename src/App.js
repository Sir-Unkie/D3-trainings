import styles from './App.module.scss';
import { useEffect, useState, useCallback } from 'react';
import { fetchData } from './utils/utils';
import Circle from './Components/Circle/Circle';

const URL = `https://gist.githubusercontent.com/Sir-Unkie/8e7a83acaab32c3f6aa6224aea3c3b6c/raw/Rawdata.csv`;

function App() {
  const [data, setData] = useState();
  const [coordinates, setCoordinates] = useState({ x: 0, y: 0 });
  const mouseMoveHandler = useCallback(
    e => {
      setCoordinates({ x: e.clientX, y: e.clientY });
    },
    [setCoordinates]
  );
  useEffect(() => {
    const getData = async () => {
      const d = await fetchData(URL);
      setData(d);
    };
    getData();
  }, []);
  return (
    <div className={styles.App} onMouseMove={mouseMoveHandler}>
      <Circle x={coordinates.x} y={coordinates.y}></Circle>
    </div>
  );
}

export default App;
