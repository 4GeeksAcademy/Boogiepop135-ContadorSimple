import React from "react";

const SecondsCounter = ({ seconds }) => {
    return (
        <div className="d-flex justify-content-center align-items-center bg-dark text-white p-3 rounded">
            <i className="fa-solid fa-clock fa-2x me-2"></i>
            <h1 className="mb-0">{seconds.toString().padStart(6, '0')}</h1>
        </div>
    );
};

export default SecondsCounter;
