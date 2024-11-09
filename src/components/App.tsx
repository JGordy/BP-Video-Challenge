import { useEffect, useState } from 'react';

import { CategoryContainer } from './CategoryContainer';

export const App = () => {

    const [seriesDetails, setSeriesDetails] = useState({});
    const { videoCategory } = seriesDetails;

    useEffect(() => {
        const fetchSeriesDetails = async () => {
            const response = await fetch('api/data.json');

            const { data } = await response.json();

            if (data) {
                setSeriesDetails(data);
            }
        };

        fetchSeriesDetails();
    }, []);

    return (
        <main>
            <h1>BibleProject</h1>
            <div className="hero-container">
                {videoCategory && <CategoryContainer videoCategory={videoCategory} />}
            </div>
        </main>
    );
};
