import React from 'react';

import Button from '../src/components/Buttons/Button';

function App() {
  return (
    <div className="App">
      <p>Yarn storybook</p>
      <Button color="#fff" loading href target="#example" variant="primary" size="small">Primary</Button>
    </div>
  );
}

export default App;
