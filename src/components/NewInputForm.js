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
        names: event.target.names.value,
        
        location: event.target.location.value,
        
        event: event.target.event.value,
        
        guests: event.target.guests.value,
        
        date: event.target.date.value , 
        timeOpen: firestore.FieldValue.serverTimestamp()
      }
    );
  }
  // props.onNewTicketCreation({
  //   names: event.target.names.value,
  //   location: event.target.location.value,
  //   issue: event.target.issue.value,
  //   id: v4(),
  //   timeOpen: new Moment(),
  //   formattedWaitTime: new Moment().fromNow(true)
  // });
  // }

  return (
    <React.Fragment>
      <ReusableForm
        formSubmissionHandler={addInputToFirestore}
        buttonText="Submit your party information!" />
    </React.Fragment>
  );
}

NewInputForm.propTypes = {
  onNewInputCreation: PropTypes.func
};

export default NewInputForm;