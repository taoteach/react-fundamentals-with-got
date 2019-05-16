import React from 'react';
import Person from './components/Person';

class App extends React.Component {
   state = {
      inputValue: '',
      list: []
   };

   createPerson = event => {
      event.preventDefault();
      this.setState(prevState => ({
         inputValue: '',
         list: [
            ...prevState.list,
            {
               isDead: false,
               id: prevState.list.length,
               name: prevState.inputValue
            }
         ]
      }));
   };

   handleInputChange = event => {
      this.setState({
         inputValue: event.target.value
      });
   };

   rendercreateForm() {
      const { inputValue } = this.state;
      return (
         <form className="got-inline-form" key="create-form" onSubmit={this.createPerson}>
            <input
               className="got-input"
               onChange={this.handleInputChange}
               placeholder="Write a name"
               type="text"
               value={inputValue}
            />
            <button className="got-button save" disabled={!Boolean(inputValue.trim())}>
               Add
            </button>
         </form>
      );
   }

   render() {
      const { list } = this.state;
      return (
         <div>
            <header>
               <h1>GOT, WHO WILL DIE?</h1>
            </header>
            <main>
               <div className="action-bar">{this.rendercreateForm()}</div>
               <div className="list-container">
                  {list.map(item => (
                     <Person key={`item-${item.id}`} data={item} />
                  ))}
               </div>
            </main>
         </div>
      );
   }
}

export default App;
