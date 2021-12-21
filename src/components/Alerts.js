import React from 'react'

function Alerts(props) {
    return (
        <div style={{height:"50px"}}>
        {props.alert &&
            <div class={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
                <strong>{props.alert.type}: </strong>{props.alert.message}.
            </div>}
        </div>
    )
}

export default Alerts
