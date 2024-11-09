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
            <div className="hero-container">
                <div id="logo">BibleProject</div>
                <div id="hero-content">
                    {videoCategory && <CategoryContainer videoCategory={videoCategory} />}
                    <div>
                        VideoPlayer stub
                    </div>
                </div>
            </div>
        </main>
    );
};
