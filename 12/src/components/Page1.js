import React from 'react';
import Grid from './Grid';
import Form from './Form';

const Page1 = (props) => {
  return (
    <div>
      <Form currentTitle={props.currentTitle} 
        currentDetails={props.currentDetails}
        handleChange={props.handleChange}
        handleSubmit={props.handleSubmit}
        />
      <Grid notes={props.notes} deleteNote={props.deleteNote} />
    </div>
  );
}

export default Page1;
