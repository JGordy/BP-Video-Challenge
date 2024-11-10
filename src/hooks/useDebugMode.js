import { useState, useEffect } from 'react';

const useDebugMode = () => {
    const [debugMode, setDebugMode] = useState(false);

    useEffect(() => {
        const queryParams = new URLSearchParams(window.location.search);

        const paramsObj = {};
        for (const [key, value] of queryParams.entries()) {
            paramsObj[key] = value;
        }

        if (paramsObj?.debug === 'true') {
            setDebugMode(true);
        }
    }, []);

    return debugMode;
};

export default useDebugMode;