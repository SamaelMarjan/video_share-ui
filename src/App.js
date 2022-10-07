import React from 'react';
import Navbar from './components/Navbar';

import Sidebar from './components/Sidebar';

function App() {
  return (
    <>
      <div>

        <Sidebar />

        <div>
          <Navbar />

          <div>
            Video cards
          </div>

        </div>

      </div>
    </>
  );
}

export default App;
