import React from 'react';

function Person(props) {
  return (
    <li className="flex items-center border-b">
      <img src={props.profileImage} alt={props.firstName} className="rounded-full border-2 border-blue-600 w-12 m-2" />
      <p className="text-gray-800 font-medium">{props.firstName} {props.lastName} <span className="font-normal">({props.email})</span></p>
    </li>
  );
}

export default Person;
