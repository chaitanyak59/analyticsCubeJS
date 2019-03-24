import React from 'react';
import { Chart, Axis, Tooltip, Geom } from 'bizcharts';
import cubejs from '@cubejs-client/core';
import { QueryRenderer } from '@cubejs-client/react';

const API_URL = "http://localhost:4000"; // change to your actual endpoint

const cubejsApi = cubejs(
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE1NTM0NjQ5NDAsImV4cCI6MTU1MzU1MTM0MH0.FwLq4ghC_0EwjNgvxE68y9EFmpkiMM-J9Klazoy4O1E",
  { apiUrl: API_URL + "/cubejs-api/v1" }
);

const renderChart = (resultSet) => {
  if (!resultSet) return '...Loading';
  return (<Chart scale={{ category: { tickCount: 8 } }} height={400} data={resultSet.chartPivot()} forceFit>
    <Axis name="category" />
    {resultSet.seriesNames().map((s,i) => (<Axis key={i} name={s.key} />))}
    <Tooltip crosshairs={{ type: 'y' }} />
    {resultSet.seriesNames().map((s, i) => (<Geom key={i} type="line" position={`category*${s.key}`} size={2} />))}
  </Chart>)
}

const query =
{
  "measures": [
    "Flows.count"
  ],
  "filters": []
};

class App extends React.PureComponent {
  render() { 
    return (<QueryRenderer
      query={query}
      cubejsApi={cubejsApi}
      render={({ resultSet, error }) => (
        (resultSet && renderChart(resultSet)) ||
        '...Loading'
      )} />)
  }
}  

export default App;