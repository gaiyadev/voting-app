import React from 'react';
import '../../components/Button/Button.css';


const button = (props) => {
    return (
        <div className="Button">
            <button onClick={props.voteBtn}>
                {props.children}
            </button>

        </div>
    );
}

export default button;