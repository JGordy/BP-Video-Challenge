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

        // Scroll back to the top where the video starts to play
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const showVideoPlayer = activeVideo?.youtubeId;

    return (
        <main>
            <div className="hero-container">
                <div id="header">
                    <div id="logo">BibleProject</div>
                    <div>Theme Toggle (Coming Soon)</div>
                </div>
                <div id="hero-content">
                    {videoCategory && <CategoryContainer {...videoCategory} />}
                    <div className="right-column-container">
                        {showVideoPlayer && <YoutubePlayer {...activeVideo} />}
                        {(!showVideoPlayer && videoCategory?.images) && (
                            <img
                                src={videoCategory.images.medium}
                            />
                        )}
                    </div>
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
