import React from 'react';

class Person extends React.Component {
   render() {
      const { data } = this.props;
      // console.log(this.props);
      return (
         <div className="item-container">
            <p className={'info-label'}>{data.name}</p>
            <button className="got-button edit" type="button">
               Edit
            </button>
            <button className="got-button remove">Delete</button>
         </div>
      );
   }
}

export default Person;
