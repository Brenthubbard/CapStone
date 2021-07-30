import React from 'react';
import NewInputForm from './NewInputForm';
import InputList from './InputList';
import InputDetail from './InputDetail';
import EditInputForm from './EditInputForm';
import { connect } from 'react-redux';
import PropTypes from "prop-types";
import * as a from './../actions/Index';
import { withFirestore, isLoaded } from 'react-redux-firebase';
import '.././App.css'





class Homepage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedInput: null,
      editing: false
    };
  }

  handleClick = () => {
    if (this.state.selectedInput != null) {
      this.setState({
        selectedInput: null,
        editing: false
      });
    } else {
      const { dispatch } = this.props;
      const action = a.toggleForm();
      dispatch(action);
    }
  }

  handleAddingNewInputToList = () => {
    const { dispatch } = this.props;
    // const action = a.addTicket(newTicket)
    // dispatch(action);
    const action2 = a.toggleForm();
    dispatch(action2);
  }

  handleChangingSelectedInput = (id) => {
    this.props.firestore.get({ collection: 'inputs', doc: id }).then((input) => {
      const firestoreInput = {
        name: input.get("name"),
        location: input.get("location"),
        event: input.get("event"),
        guests: input.get("guests"),
        date: input.get("date"),
        addInfo: input.get("addInfo"),
        id: input.id
      }
      this.setState({ selectedInput: firestoreInput });
    });
  }

  handleEditClick = () => {
    this.setState({ editing: true });
  }

  handleEditingInputInList = () => {
    // const { dispatch } = this.props;
    // const action = a.addTicket(ticketToEdit);
    // dispatch(action);
    this.setState({
      editing: false,
      selectedInput: null
    });
  }

  handleDeletingInput = (id) => {
    this.props.firestore.delete({ collection: 'inputs', doc: id });
    this.setState({ selectedInput: null });
  }

  render() {
    const auth = this.props.firebase.auth();
    if (!isLoaded(auth)) {
      return (
        <React.Fragment>
          <h1>Loading.....</h1>
        </React.Fragment>
      )
    }
    if ((isLoaded(auth)) && (auth.currentUser == null)) {
      return (
        <React.Fragment>
          <h1>You must be signed in to access the Event List.</h1>
        </React.Fragment>
      )
    }
    if ((isLoaded(auth)) && (auth.currentUser != null)) {
      let currentlyVisibleState = null;
      let buttonText = null;
      if (this.state.editing) {
        currentlyVisibleState = <EditInputForm input={this.state.selectedInput} onEditInput={this.handleEditingInputInList} />
        buttonText = "Return to Event List";
      } else if (this.state.selectedInput != null) {
        currentlyVisibleState =
          <InputDetail
            input={this.state.selectedInput}
            onClickingDelete={this.handleDeletingInput}
            onClickingEdit={this.handleEditClick} />
        buttonText = "Return to Event List";
      } else if (this.props.formVisibleOnPage) {
        currentlyVisibleState = <NewInputForm onNewInputCreation={this.handleAddingNewInputToList} />;
        buttonText = "Return to Event List";
      } else {
        currentlyVisibleState = <InputList inputList={this.props
          .masterInputList
        } onInputSelection={this.handleChangingSelectedInput} />;
        buttonText = "Add Event to Event List";
      }
      return (
        <React.Fragment>
          <button style={{
            fontFamily: 'monospace',
            border: '2px solid green',
            backgroundColor: 'pink',
            color: 'chocolate',
            padding: '1px 4px',
            margin: '3px'
          }} onClick={this.handleClick}>{buttonText}</button>
          {currentlyVisibleState}
          <button style={{
            fontFamily: 'monospace',
            border: '2px solid green',
            backgroundColor: 'pink',
            color: 'chocolate',
            padding: '1px 4px',
            margin: '3px'
          }} onClick={this.handleClick}>{buttonText}</button>
        </React.Fragment>
      );
    }
  }
}


Homepage.propTypes = {
  masterInputList: PropTypes.object
};

const mapStateToProps = state => {
  return {
    formVisibleOnPage: state.formVisibleOnPage
  }
}

Homepage = connect(mapStateToProps)(Homepage);

export default withFirestore(Homepage);