import React from 'react';

const topVote = (props) => {
    return (
        <div>
            <h4 style={{ color: 'white', paddingTop: '26px' }} >
                <div style={{
                    backgroundColor: '#1976D2', borderRadius: '50%', width: '50px', height: '50px',
                    fontWeight: 'bold', margin: 'auto'
                }}>
                    <span style={{ position: 'relative', top: '13px' }}> {props.children} </span>
                </div>
            </h4>
        </div>
    );
}

export default topVote;