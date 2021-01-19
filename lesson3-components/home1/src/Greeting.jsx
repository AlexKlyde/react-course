import React from 'react';
import moment from 'moment';

const getCurrentAge = date => moment().diff(date, 'year')

const Greeting = (props) => {
  return (
    <div className="greeting">
      {`My name is ${props.firstName} ${props.lastName}. I'm ${getCurrentAge(props.birthDate)} years old`}
    </div>
  )
}

export default Greeting;



