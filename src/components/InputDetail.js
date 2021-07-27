import React from "react";
import PropTypes from "prop-types";

function InputDetail(props) {
  const { input, onClickingDelete } = props;
  // super()
  // this.style = {
      
    
  return (
    <React.Fragment>
      {/* <div style={this.style}> */}
        
      <h1>Input Detail</h1>
        <h3>{input.name}</h3>
        <h3>{input.location}</h3>
        <h3>{input.event}</h3>
        <h3>{input.guests}</h3>
        <h3>{input.date}</h3>
        <h3>{input.addInfo}</h3>
      {/* </div> */}
      {/* <p><em>{input.issue}</em></p> */}
      <button onClick={props.onClickingEdit}>Update Event</button>
      <button onClick={() => onClickingDelete(input.id)}>Delete Event!</button>
      <hr />
    </React.Fragment>
  );
}

InputDetail.propTypes = {
  input: PropTypes.object,
  ingDelete: PropTypes.func,
  ingEdit: PropTypes.func
};

export default InputDetail;