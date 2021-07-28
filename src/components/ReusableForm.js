import React from "react";
import PropTypes from "prop-types";

function ReusableForm(props) {
  return (
    <React.Fragment>
      <form onSubmit={props.formSubmissionHandler}>
        <input
          type='text'
          name='name'
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
          onBlur={() => this.onBlur()}
          onFocus={() => this.onFocus()}
          style={{ height: 60, backgroundColor: this.state.backgroundColor, color: this.state.color }} />
          name='addInfo'
          placeholder='Additional Info.' /><br />
        
        <button style={{
          fontFamily: 'monospace',
          border: '2px solid green',
          backgroundColor: 'pink',
          color: 'chocolate',
          padding: '1px 4px',
          margin: '3px'
        }} type='submit'>{props.buttonText}</button>
      </form>
    </React.Fragment>
  );
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
};

export default ReusableForm;