import React from 'react';
import Person from './components/Person';

class App extends React.Component {
   state = {
      inputValue: '',
      list: [],
      stateFilter: 'all'
   };

   getList() {
      const { list, stateFilter } = this.state;
      return list.filter(item => {
         if ((item.isDead && stateFilter === 'alive') || (!item.isDead && stateFilter === 'dead')) {
            return false;
         }
         return true;
      });
   }

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

   updatePerson = task => {
      const { list } = this.state;
      const updatedList = list.map(item => {
         if (item.id === task.id) {
            return task;
         }
         return item;
      });

      this.setState(() => ({
         list: updatedList
      }));
   };

   handleStateFilter = e => {
      this.setState({
         stateFilter: e.target.value
      });
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
   renderFilters() {
      return (
         <div
            className="tabs-row"
            key="filters"
            role="radiogroup"
            onChange={this.handleStateFilter}
         >
            <div className="got-radio">
               <input type="radio" id="all" name="stateFilter" value="all" defaultChecked={true} />
               <label htmlFor="all">All</label>
            </div>
            <div className="got-radio">
               <input type="radio" id="alive" name="stateFilter" value="alive" />
               <label htmlFor="alive">Alive</label>
            </div>
            <div className="got-radio">
               <input type="radio" id="dead" name="stateFilter" value="dead" />
               <label htmlFor="dead">Dead</label>
            </div>
         </div>
      );
   }

   renderNoResults() {
      const { stateFilter } = this.state;
      return (
         <div className="got-no-results">
            <span>
               No Results for <strong>{stateFilter}</strong>
            </span>
         </div>
      );
   }

   render() {
      const list = this.getList();
      return (
         <div>
            <header>
               <h1>GOT, WHO WILL DIE?</h1>
            </header>
            <main>
               <div className="action-bar">{[this.rendercreateForm(), this.renderFilters()]}</div>
               <div className="list-container">
                  {list.length > 0
                     ? list.map(item => (
                          <Person
                             key={`item-${item.id}`}
                             data={item}
                             onChange={this.updatePerson}
                          />
                       ))
                     : this.renderNoResults()}
               </div>
            </main>
         </div>
      );
   }
}

export default App;
