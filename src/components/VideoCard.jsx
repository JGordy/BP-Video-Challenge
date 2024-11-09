const VideoCard = ({
    description,
    images,
    subtitle,
    title,
    youtubeId,
    onVideoCardClick
}) => {
    const handleVideoCardClick = () => {
        onVideoCardClick(youtubeId)
    };
    return (
        <div
            className="video-card"
            onClick={handleVideoCardClick}
        >
            <img src={images.large} />
            <div className="video-card-body">
                <p className="video-title">{title}</p>
                <p className="video-description">{description}</p>
            </div>
            <div className="video-card-footer">
                <p className="video-duration">{subtitle}</p>
            </div>
        </div>
    );
};

export default VideoCard;
