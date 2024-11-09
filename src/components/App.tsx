import { useEffect, useState } from 'react';

import CategoryContainer from './CategoryContainer';
import YoutubePlayer from './YoutubePlayer';
import VideoCard from './VideoCard';

export const App = () => {

    const [seriesDetails, setSeriesDetails] = useState({});
    const { videoCategory = {} } = seriesDetails;
    const { videos = [] } = videoCategory;

    const [activeVideo, setActiveVideo] = useState({});

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

    const onVideoCardClick = (youtubeId) => {
        const activeVideoDetails = videos.find((video) => video.youtubeId === youtubeId);
        setActiveVideo(activeVideoDetails);
    };

    return (
        <main>
            <div className="hero-container">
                <div id="header">
                    <div id="logo">BibleProject</div>
                    <div>Theme Toggle (Coming Soon)</div>
                </div>
                <div id="hero-content">
                    {videoCategory && <CategoryContainer {...videoCategory} />}
                    {activeVideo?.youtubeId && <YoutubePlayer {...activeVideo} />}
                </div>
            </div>
            <div id="video-list-container">
                {videos?.map((video) => (
                    <VideoCard
                        key={video.id}
                        onVideoCardClick={onVideoCardClick}
                        {...video}
                    />
                ))}
            </div>
        </main>
    );
};
