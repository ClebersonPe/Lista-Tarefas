function Video() {
    return (
        <div>
            <video autoplay muted loop playsinline>
                <source src="video.mp4" type="video/mp4" />
            </video>
        </div>
    )
}

export default Video