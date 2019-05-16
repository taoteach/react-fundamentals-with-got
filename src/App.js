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

class App extends React.Component {
   state = {
      list: [{
         id: 1,
         name: 'Tyrion Lannister',
         isDead: false
      }, {
            id: 2,
            name: 'Jon Snow',
            isDead: false
      }, {
         id: 3,
         name: 'Daenerys Targaryen',
         isDead: false
      }]
   }

   render() {
      const { list } = this.state;
      return (
         <div>
            <header>
               <h1>GOT, WHO WILL DIE?</h1>
            </header>
            <main>
               <div className="list-container">
                  {list.map((item) => (
                     <Person 
                        key={`item-${item.id}`} 
                        data={item} 
                     />
                  ))}
               </div>
            </main>
         </div>
      );
   }
}

export default App;
