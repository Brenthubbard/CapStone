import React from "react";
import PropTypes from "prop-types";

function InputDetail(props) {
  const { input, onClickingDelete } = props;

  return (
    <React.Fragment>
      <h1>input Detail</h1>
        <h3>{input.names}</h3>
        <h3>{input.location}</h3>
        <h3>{input.event}</h3>
        <h3>{input.guests}</h3>
        <h3>{input.date}</h3>
      
      <p><em>{input.issue}</em></p>
      <button onClick={props.onClickingEdit}>Update Event</button>
      <button onClick={() => onClickingDelete(input.id)}>Delete Event!</button>
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