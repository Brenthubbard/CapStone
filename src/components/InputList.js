import React from "react";
import PropTypes from "prop-types";
import Input from "./Input";
import { useSelector } from 'react-redux'
import { useFirestoreConnect, isLoaded, isEmpty } from 'react-redux-firebase'

function InputList(props) {

  useFirestoreConnect([
    { collection: 'inputs' }
  ]);

  const input = useSelector(state => state.firestore.ordered.inputs);

  if (isLoaded(input)) {
    return (
      <React.Fragment>
        <hr />
        {input.map((input) => {
          return <Input
            whenInputClicked={props.onInputSelection}
            name={input.name}
            location={input.location}
            event={input.event}
            guests={input.guests}
            date={input.date}
          
            formattedWaitTime={input.formattedWaitTime}
            id={input.id}
            key={input.id} />
        })}
      </React.Fragment>
    )
  } else {
    return (
      <React.Fragment>
        <h3>Loading...</h3>
      </React.Fragment>
    )
  }
}

InputList.propTypes = {
  onInputSelection: PropTypes.func
};

export default InputList;