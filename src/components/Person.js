import React from 'react';

class Person extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         editing: false,
         inputValue: props.data.name
      };
   }

   handleInputChange = event => {
      this.setState({
         inputValue: event.target.value
      });
   };
   handleEditing = () => {
      this.setState(prevState => ({
         editing: !prevState.editing
      }));
   };

   doEdit = event => {
      const { data, onChange } = this.props;
      const { inputValue } = this.state;
      event.preventDefault();
      onChange({ ...data, name: inputValue });
      this.setState(() => ({
         editing: false
      }));
   };

   renderForm() {
      const { inputValue } = this.state;
      return (
         <form className="item-container" onSubmit={this.doEdit}>
            <input
               autoFocus
               className="got-input"
               type="text"
               onChange={this.handleInputChange}
               value={inputValue}
            />
            <button className="got-button save" disabled={!Boolean(inputValue)}>
               Save
            </button>
            <button className={`got-button cancel`} onClick={this.handleEditing} type="button">
               Cancel
            </button>
         </form>
      );
   }
   renderInfo() {
      const { data } = this.props;
      return (
         <div className="item-container">
            <p className={'info-label'}>{data.name}</p>
            <button className="got-button edit" onClick={this.handleEditing} type="button">
               Edit
            </button>
            <button className="got-button remove">Delete</button>
         </div>
      );
   }

   render() {
      const { editing } = this.state;
      return editing ? this.renderForm() : this.renderInfo();
   }
}

export default Person;
