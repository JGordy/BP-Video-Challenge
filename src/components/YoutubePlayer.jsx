const YoutubePlayer = ({ youtubeId, title }) => {
    console.log({ youtubeId, title });

    return (
        <div className="video-responsive">
            <iframe
                width="400"
                height="200"
                allow="accelerometer; 
                    autoplay; 
                    clipboard-write; 
                    encrypted-media; 
                    gyroscope; 
                    picture-in-picture; 
                    web-share"
                src={`https://www.youtube.com/embed/${youtubeId}?autoplay=1`}
                frameborder="0"
                title={title}
                allowFullScreen
            />
        </div>
    );
};

export default YoutubePlayer;