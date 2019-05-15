/* eslint-disable prettier/prettier */
import React from 'react';

class Person extends React.Component {
   render() {
      return (
         <div className="item-container">
            <p className={'info-label'}>
               Tyrion Lannister
            </p>
            <button className="got-button edit" type="button">
               Edit
            </button>
            <button className="got-button remove">Delete</button>
         </div>
      );
   }
}

export default Person;
