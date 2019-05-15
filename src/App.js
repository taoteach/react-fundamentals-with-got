import React from 'react';
import Person from './components/Person';

function App() {
   return (
      <div>
         <header>
            <h1>GOT, WHO WILL DIE?</h1>
         </header>
         <main>
            <div className="list-container">
               <Person />
               <Person />
               <Person />
            </div>
         </main>
      </div>
   );
}

export default App;
