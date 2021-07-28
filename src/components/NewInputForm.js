import React from "react";
// import { v4 } from 'uuid';
import PropTypes from "prop-types";
import ReusableForm from "./ReusableForm";
// import Moment from 'moment';
import { useFirestore } from 'react-redux-firebase'

function NewInputForm(props) {

  const firestore = useFirestore();
  
  function addInputToFirestore(event) {
    event.preventDefault();
    props.onNewInputCreation();
    
    return firestore.collection('inputs').add(
      {
        name: event.target.name.value,
        
        location: event.target.location.value,
        
        event: event.target.event.value,
        
        guests: event.target.guests.value,
        
        date: event.target.date.value,
        
        addInfo: event.target.addInfo.value,
        
        timeOpen: firestore.FieldValue.serverTimestamp()
      }
    );
  }
  

  return (
    <React.Fragment>
      <ReusableForm style={{
        fontFamily: 'monospace',
        border: '2px solid green',
        backgroundColor: 'pink',
        color: 'chocolate',
        padding: '1px 4px',
        margin: '3px'
      }}
        formSubmissionHandler={addInputToFirestore}
        buttonText="Submit your party information!" />
    </React.Fragment>
  );
}

NewInputForm.propTypes = {
  onNewInputCreation: PropTypes.func
};

export default NewInputForm;