import React from "react";
import PropTypes from "prop-types";
import '.././App.css'



function ReusableForm(props) {
  return (
    <React.Fragment>
      <form onSubmit={props.formSubmissionHandler}>
        <input
          style={{ width: '400px', border: 'solid olivedrab' }}
          type='text'
          name='name'
          placeholder='Host Names?' />
        <br />
        <br />
        <input
          style={{ width: '400px', border: 'solid olivedrab' }}
          type='text'
          name='location'
          placeholder='Desired location of the event?' />
        <br />
        <br />
        <div class = 'field1'>
        <input
          style={{ width: '400px', border: 'solid olivedrab', color: 'blue' }}
          type='text'
          name='event'
            placeholder='What type of event are we doing?' />
        </div>
        <br />
        <br />
        <input
          style={{ width: '400px', border:'solid olivedrab' }}

          type='number'
          name='guests'
          placeholder='How many guests are we inviting?' />
        <br />
        <br />
        <input
          style={{ width: '400px', border: 'solid olivedrab' }}
          type='date'
          name='date'
          placeholder='Desired location of the event?' />
        <br />
        <br />
        <textarea
          style={{ width: '400px', border: 'solid olivedrab',text:'blue' }}
          name='addInfo'
          placeholder='Additional Info.' />
        <br />
        <br />
        
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