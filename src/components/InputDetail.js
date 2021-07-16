import React from "react";
import PropTypes from "prop-types";

function InputDetail(props) {
  const { input, onClickingDelete } = props;

  return (
    <React.Fragment>
      <h1>Input Detail</h1>
        <h3>{Input.names}</h3>
        <h3>{Input.location}</h3>
        <h3>{Input.event}</h3>
        <h3>{Input.guests}</h3>
        <h3>{Input.date}</h3>
      
      <p><em>{input.issue}</em></p>
      <button onClick={props.onClickingEdit}>Update Event</button>
      <button onClick={() => onClickingDelete(Input.id)}>Delete Event!</button>
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