import React from 'react';

function Person(props) {
  return (
    <div>
      <img src={props.profileImage} alt={props.firstName} />
    </div>
  );
}

export default Person;
