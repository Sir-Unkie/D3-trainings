import styles from './App.module.scss';
import { useEffect, useState } from 'react';
import * as d3 from 'd3';

const URL = `https://gist.githubusercontent.com/Sir-Unkie/8e7a83acaab32c3f6aa6224aea3c3b6c/raw/Rawdata.csv`;

function App() {
  const [data, setData] = useState([]);
  const width = '500';
  const height = '500';
  const centerX = width / 2;
  const centerY = height / 2;
  const pieArc = d3.arc();

  useEffect(() => {
    const getData = async () => {
      const response = await fetch(URL);
      const data = await response.text();
      const dataParsed = d3.csvParse(data);
      // console.log(dataParsed);
      setData(dataParsed);
    };
    getData();
  }, []);
  return (
    <div className={styles.App}>
      <svg width={width} height={height}>
        <g transform={`translate(${centerX},${centerY})`}>
          {data.map((element, i) => {
            return (
              <path
                key={element.Keyword}
                fill={element['RGB hex value']}
                d={pieArc({
                  innerRadius: 0,
                  outerRadius: width,
                  startAngle: (i / data.length) * 2 * Math.PI,
                  endAngle: ((i + 1) / data.length) * 2 * Math.PI,
                })}
              />
            );
          })}
        </g>
      </svg>
    </div>
  );
}

export default App;
