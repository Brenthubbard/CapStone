import React from "react";
import PropTypes from "prop-types";

function InputDetail(props) {
  const { input, onClickingDelete } = props;
      
    
  return (
    <React.Fragment>
        
      <h1 style={{
        fontFamily: 'monospace',
        color: 'olivedrab',
        border: '2px solid olivedrab',
        flexDirection: 'column',
        backgroundColor: "pink",
        width: 675,
        height: 50,
      }}>Input Details for this event</h1>
      <h3 style={{
        fontFamily: 'monospace',
        fontSize: '40px',
        font: 'bold'
      }} >{input.name}</h3>
      <h3 style={{
        fontFamily: 'monospace',
        border: 'seagreen',
        font: 'bold'
      }} >{input.location}</h3>
        <h3>{input.event}</h3>
        <h3>{input.guests}</h3>
        <h3>{input.date}</h3>
        <h3>{input.addInfo}</h3>
      <button style={{
        fontFamily: 'monospace',
        border: '2px solid green',
        backgroundColor: 'pink',
        color: 'chocolate',
        padding: '1px 4px',
        margin: '3px'
      }}  onClick={props.onClickingEdit}>Update Event</button>
      <button style={{
        fontFamily: 'monospace',
        border: '2px solid green',
        backgroundColor: 'pink',
        color: 'chocolate',
        padding: '1px 4px',
        margin: '3px'
      }}  onClick={() => onClickingDelete(input.id)}>Delete Event!</button>
      <hr />
    </React.Fragment>
  );
}

InputDetail.propTypes = {
  input: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func
};

export default InputDetail;