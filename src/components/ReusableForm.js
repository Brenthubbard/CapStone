import React from "react";
import PropTypes from "prop-types";

function ReusableForm(props) {
  return (
    <React.Fragment>
      <form onSubmit={props.formSubmissionHandler}>
        <input
          type='text'
          name='names'
          placeholder='Host Names?' /><br />
        <input
          type='text'
          name='location'
          placeholder='Desired location of the event?' /><br />
        <input
          type='text'
          name='event'
          placeholder='What type of event are we doing?' /><br />
        <input
          type='number'
          name='guests'
          placeholder='How many guests are we inviting?' /><br />
        <input
          type='date'
          name='date'
          placeholder='Desired location of the event?' /><br />
        <textarea
          name='additional info'
          placeholder='Additional Info.' /><br />
        
        <button type='submit'>{props.buttonText}</button>
      </form>
    </React.Fragment>
  );
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
};

export default ReusableForm;