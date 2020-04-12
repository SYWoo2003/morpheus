import React from 'react';

import Top from './components/top';

function App() {
  window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  }

  return (
    <>
      <Top />
    </>
  );
}

export default App;
