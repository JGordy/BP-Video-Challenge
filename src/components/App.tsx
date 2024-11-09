import { useEffect, useState } from 'react';

import CategoryContainer from './CategoryContainer';
import VideoCard from './VideoCard';

export const App = () => {

    const [seriesDetails, setSeriesDetails] = useState({});
    const { videoCategory = {} } = seriesDetails;
    const { videos = [] } = videoCategory;


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
                    {videoCategory && <CategoryContainer {...videoCategory} />}
                    <div>
                        VideoPlayer stub
                    </div>
                </div>
            </div>
            <div id="video-list-container">
                {videos.length && videos.map((video) => (
                    <VideoCard
                        key={video.id}
                        {...video}
                    />
                ))}
            </div>
        </main>
    );
};
