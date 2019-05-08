import React from 'react';
import GlobalStyle from './global-styles';

import Table from './components/Table';
import Chart from './components/Chart';

function App() {
  return (
    <>
      <GlobalStyle />
      <div>
        <Table />
        <Chart />
      </div>
    </>
  );
}

export default App;
