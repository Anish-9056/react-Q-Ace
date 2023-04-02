import React from 'react'

export default function Props(props) {
    const { name, lastname } = props;
    function handleClick() {
        alert("button click");
    }
    return (
        <div>props {name}{lastname}
            <button onClick={handleClick}>function event</button>
        </div>
    )
}
