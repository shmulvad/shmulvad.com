import React, { Fragment, useState, useEffect } from 'react';
import {
  VictoryChart,
  VictoryGroup,
  VictoryLine,
  VictoryTooltip,
  VictoryScatter
} from 'victory';

const url =
  'https://script.google.com/macros/s/AKfycbxXN_DW0pXOuQxqTkUfXnIAPg4vT9B8bOeZjH5YgtrkO03fgDQW/exec';

const Steps = () => {
  const [data, setData] = useState(null);

  const formatDate = date => {
    const day = date.getDate();
    const month = date.getMonth();

    return `${day}/${month}`;
  };

  useEffect(() => {
    fetch(url)
      .then(response => response.json())
      .then(json => {
        const first30 = json.user.slice(0, 15);
        const parsed = first30.map((val, index) => {
          // const date = index === 0 || index === 29 ? val.date.slice(5, 10) : '';
          return {
            date: index, // val.date.slice(5, 10),
            steps: val.steps,
            energy: val.energy
          };
        });

        console.log(parsed);

        setData(parsed);
      })
      .catch(error => console.warn(error));
  }, []);

  return (
    <Fragment>
      <h3>Daily steps</h3>
      <p>
        ...for the last 30 days. Tracked with Apple HealthKit. (I have to go
        into an app to manually upload the data since Apple doesn&apos;t have a
        cloud API for this data, so it may be a bit outdated).
      </p>
      {data ? (
        <VictoryChart polar={false} height={300}>
          <VictoryGroup
            color="#c43a31"
            labels={d => `Steps: ${d.steps.toFixed(0)}`}
            labelComponent={<VictoryTooltip style={{ fontSize: 10 }} />}
            data={data}
            x="date"
            y="steps"
          >
            <VictoryLine />
            <VictoryScatter
              size={(d, a) => {
                return a ? 8 : 3;
              }}
            />
          </VictoryGroup>
          <VictoryGroup
            color="blue"
            labels={d => `Energy: ${d.energy.toFixed(0)}`}
            labelComponent={<VictoryTooltip style={{ fontSize: 10 }} />}
            data={data}
            x="date"
            y="energy"
          >
            <VictoryLine />
            <VictoryScatter
              size={(d, a) => {
                return a ? 8 : 3;
              }}
            />
          </VictoryGroup>
        </VictoryChart>
      ) : (
        <p>Loading data...</p>
      )}
    </Fragment>
  );
};

export default Steps;
