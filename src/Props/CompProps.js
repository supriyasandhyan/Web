import React from 'react';

const CompProps = (props) => {
    return(
        <div className="title">
             <h1>Components & Props</h1>
             <button onClick={props.toggle}>show data</button>
            <h3> Introduction to React Js </h3>
            <p><u>React Introduction</u></p>
            <p>{props.intro} </p>

        </div>
    );
}
export default CompProps;
