import React from 'react'

function Message(props) {
    return (
        <div class={props.class}>
            
            <h3>{props.message}</h3>
            <h2 class="info">{props.ins}</h2>
        </div>
    )
}

export default Message;
