import React, { useState, useEffect } from "react";
import SecondsCounter from "../components/SecondsCounter";

const Home = () => {
    const [seconds, setSeconds] = useState(0);
    const [isRunning, setIsRunning] = useState(true);

    useEffect(() => {
        if (!isRunning) return;
        
        const interval = setInterval(() => {
            setSeconds(prev => prev + 1);
        }, 1000);

        return () => clearInterval(interval);
    }, [isRunning]);

    return (
        <div className="container text-center mt-5">
            <SecondsCounter seconds={seconds} />
            <div className="mt-3">
                <button className="btn btn-warning me-2" onClick={() => setIsRunning(!isRunning)}>
                    {isRunning ? "Pausar" : "Reanudar"}
                </button>
                <button className="btn btn-danger" onClick={() => { setSeconds(0); setIsRunning(true); }}>
                    Reiniciar
                </button>
            </div>
        </div>
    );
};

export default Home;
