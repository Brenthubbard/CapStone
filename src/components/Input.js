import React from "react";
import PropTypes from "prop-types";

function Input(props) {
  return (
    <React.Fragment>
      <div onClick={() => props.whenInputClicked(props.id)}>
        <h3>{props.name} </h3 > 
          <h3> {props.location} </h3 > 
            <h3> {props.event} </h3 > 
              <h3>  {props.guests} </h3 >
              <h3>  {props.date} </h3 >
              <h3> <p><em>{props.formattedWaitTime}</em></p> </h3>
      </div>
            {/* <hr /> */}
    </React.Fragment>
          );
}

          Input.propTypes = {
            names: PropTypes.string,
          location: PropTypes.string,
          event: PropTypes.string,
          guest: PropTypes.number,
          date: PropTypes.string,
          id: PropTypes.string,
          formattedWaitTime: PropTypes.string,
          whenInputClicked: PropTypes.func
};

          export default Input;