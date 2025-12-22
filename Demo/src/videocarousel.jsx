import React, { useEffect, useRef, useState } from "react";
import "./index.css";

const VideoRowCarousel = ({ videos, rowTitle, reverse = false }) => {
  const containerRef = useRef(null);
  const [clickedVideo, setClickedVideo] = useState(null);
  const loopVideos = [...videos, ...videos];

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let scrollAmount = reverse ? -0.5 : 0.5;
    let animationFrameId;

    const scroll = () => {
      container.scrollLeft += scrollAmount;

      if (scrollAmount > 0 && container.scrollLeft >= container.scrollWidth / 2) {
        container.scrollLeft = 0;
      } else if (scrollAmount < 0 && container.scrollLeft <= 0) {
        container.scrollLeft = container.scrollWidth / 2;
      }

      animationFrameId = requestAnimationFrame(scroll);
    };

    animationFrameId = requestAnimationFrame(scroll);
    return () => cancelAnimationFrame(animationFrameId);
  }, [reverse]);

  useEffect(() => {
    if (clickedVideo) {
      document.body.classList.add("modal-open");
    } else {
      document.body.classList.remove("modal-open");
    }

    return () => document.body.classList.remove("modal-open");
  }, [clickedVideo]);

  return (
    <div className="carousel-row-wrapper">
      <h2 className="carousel-row-title">{rowTitle}</h2>
      <div className="video-row-carousel" ref={containerRef}>
        {loopVideos.map((video, index) => (
          <div
            className="video-card"
            key={index}
            onClick={() => setClickedVideo(video)}
          >
            <video src={video.src} muted preload="metadata" />
            <div className="video-info">
              <h3>{video.title}</h3>
              <p>{video.description}</p>
            </div>
          </div>
        ))}
      </div>

      {clickedVideo && (
        <div
          className="hover-popup-video-overlay"
          onClick={() => setClickedVideo(null)}
        >
          <div
            className="hover-popup-video"
            onClick={(e) => e.stopPropagation()}
          >
            <video src={clickedVideo.src} autoPlay muted loop />
            <h3>{clickedVideo.title}</h3>
            <p>{clickedVideo.description}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default VideoRowCarousel;
