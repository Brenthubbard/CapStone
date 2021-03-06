import React from "react";
import ReusableForm from "./ReusableForm";
import PropTypes from "prop-types";
import { useFirestore } from 'react-redux-firebase';
import '.././App.css'
  
  
  
function EditInputForm(props) {
  const firestore = useFirestore();
  const { input } = props;

  function handleEditInputFormSubmission(event) {
    event.preventDefault();
    props.onEditInput();
    const propertiesToUpdate = {
      
      name: event.target.name.value,
      location: event.target.location.value,
      event: event.target.event.value,
      guests: event.target.guests.value,
      date: event.target.date.value,
      addInfo: event.target.addInfo.value
    }
    return firestore.update({ collection: 'inputs', doc: input.id }, propertiesToUpdate)
  }

  return (
    <React.Fragment>
      <ReusableForm class="inputs"
        formSubmissionHandler={handleEditInputFormSubmission}
        buttonText="Update Input" />
    </React.Fragment>
  );
}

EditInputForm.propTypes = {
  onEditInput: PropTypes.func
};

export default EditInputForm;