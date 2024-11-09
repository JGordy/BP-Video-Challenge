const VideoCard = ({
    description,
    images,
    publishDate,
    shareUrl,
    subtitle,
    title,
    youtubeId,
}) => {
    return (
        <div className="video-card">
            <h5>{title}</h5>
            <p>{subtitle}</p>
        </div>
    );
};

export default VideoCard;
