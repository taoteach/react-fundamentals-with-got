/* eslint-disable prettier/prettier */
import React from 'react';

class Person extends React.Component {
   render() {
      return (
         <div className="item-container">
            <label className={'info-label'}>
               Tyrion Lannister
            </label>
            <button className="got-button edit" type="button">
               Edit
            </button>
            <button className="got-button remove">Delete</button>
         </div>
      );
   }
}

export default Person;
