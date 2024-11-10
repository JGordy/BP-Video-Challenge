import { useEffect, useState, useRef } from 'react';

// contexts
import ThemeProvider from '../context/ThemeContext';

// hooks
import useDebugMode from '../hooks/useDebugMode';

// components
import ThemeToggle from './ThemeToggle';
import CategoryContainer from './CategoryContainer';
import YoutubePlayer from './YoutubePlayer';
import VideoCard from './VideoCard';
import ErrorMessage from './ErrorMessage';

export const App = () => {

    const debugMode = useDebugMode();

    const [seriesDetails, setSeriesDetails] = useState({});
    const { videoCategory = {} } = seriesDetails;
    const { videos = [] } = videoCategory;

    const [activeVideo, setActiveVideo] = useState({});

    const [error, setError] = useState({});
    const errorRefs = useRef([]);

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

    const removeError = () => setError({});

    const onVideoCardClick = (youtubeId) => {
        if (debugMode) {
            setError({
                message: 'We had an issue loading this video. Wait a few minutes before you try again. '
            });
            return;
        }

        const activeVideoDetails = videos.find((video) => video.youtubeId === youtubeId);
        setActiveVideo(activeVideoDetails);

        // Scroll back to the top where the video starts to play
        window.scrollTo({ top: 0, behavior: 'smooth' });

        if (error?.message) {
            removeError();
        }
    };

    const showVideoPlayer = activeVideo?.youtubeId;

    return (
        <ThemeProvider>
            <main>
                <div className="hero-container">

                    <div id="header">
                        <div id="logo">BibleProject</div>
                        <ThemeToggle />
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


                <div className="list-container">
                    <div id="video-list-container">
                        {videos?.map((video) => (
                            <VideoCard
                                key={video.id}
                                onVideoCardClick={onVideoCardClick}
                                {...video}
                            />
                        ))}
                    </div>
                </div>

                {error?.message && (
                    <div className="error-container">
                        <ErrorMessage
                            ref={(el) => (errorRefs.current = el)}
                            message={error?.message}
                            onClose={removeError}
                        />
                    </div>
                )}
            </main>
        </ThemeProvider>
    );
};
