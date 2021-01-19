import React from 'react';
import moment from 'moment';

const getCurrentAge = date => {
  return date.getFullYear() - new Date().getFullYear();
};

// const getCurrentAge = birthDate = moment(birthDate).diff('09-Feb-1983', 'years');

const Greeting = (props) => {
  return (
    <div className="greeting">
      {`My name is ${props.firstName} ${props.lastName}. I'm ${getCurrentAge(props.birthDate)} years old`}
    </div>
  )
}

export default Greeting;



