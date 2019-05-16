import React from 'react';
import Person from './components/Person';

/**
 * Person
 * {
 *    id: 1,
 *    name: 'Tyrion Lannister',
 *    isDead: true | false
 * }
 */

function App() {
   const tyrion = {
      id: 1,
      name: 'Tyrion Lannister',
      isDead: false
   };
   const jon = {
      id: 2,
      name: 'Jon Snow',
      isDead: false
   };
   const dany = {
      id: 3,
      name: 'Daenerys Targaryen',
      isDead: false
   };

   return (
      <div>
         <header>
            <h1>GOT, WHO WILL DIE?</h1>
         </header>
         <main>
            <div className="list-container">
               <Person data={tyrion} />
               <Person data={jon} />
               <Person data={dany} />
            </div>
         </main>
      </div>
   );
}

export default App;
