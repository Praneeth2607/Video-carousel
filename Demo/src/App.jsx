import React from "react";
import VideoRowCarousel from "./videocarousel.jsx";

const videoData = [
  {
    id: 1,
    src: "https://videos.pexels.com/video-files/31964055/13619613_1920_1080_25fps.mp4",
    title: "Editing",
    description: "Professional video editing for social and commercial use.",
  },
  {
    id: 2,
    src: "https://videos.pexels.com/video-files/31964055/13619613_1920_1080_25fps.mp4",
    title: "3D Animation",
    description: "Breathtaking animations for branding or entertainment.",
  },
  {
    id: 3,
    src: "https://videos.pexels.com/video-files/31964055/13619613_1920_1080_25fps.mp4",
    title: "VFX",
    description: "Add jaw-dropping visual effects to your films or ads.",
  },
  {
    id: 4,
    src: "https://videos.pexels.com/video-files/31964055/13619613_1920_1080_25fps.mp4",
    title: "Color Grading",
    description: "Cinema-grade color correction for all visuals.",
  },
  {
    id: 5,
    src: "https://videos.pexels.com/video-files/31964055/13619613_1920_1080_25fps.mp4",
    title: "Storyboarding",
    description: "Visual storytelling from concept to creation.",
  },
];
const videoData1=[
  {
    id: 1,
    src: "https://videos.pexels.com/video-files/32773470/13971084_2730_1440_30fps.mp4",
    title: "Editing",
    description: "Professional video editing for social and commercial use.", 
  },
    {
    id: 2,
    src: "https://videos.pexels.com/video-files/32773470/13971084_2730_1440_30fps.mp4",
    title: "Editing",
    description: "Professional video editing for social and commercial use.", 
  },
    {
    id: 3,
    src: "https://videos.pexels.com/video-files/32773470/13971084_2730_1440_30fps.mp4",
    title: "Editing",
    description: "Professional video editing for social and commercial use.", 
  },
    {
    id: 4,
    src: "https://videos.pexels.com/video-files/32773470/13971084_2730_1440_30fps.mp4",
    title: "Editing",
    description: "Professional video editing for social and commercial use.", 
  },
    {
    id: 5,
    src: "https://videos.pexels.com/video-files/32773470/13971084_2730_1440_30fps.mp4",
    title: "Editing",
    description: "Professional video editing for social and commercial use.", 
  },
]
const videoData2=[ 
  {
    id: 1,
    src: "https://videos.pexels.com/video-files/9714625/9714625-uhd_2560_1440_30fps.mp4",
    title: "Storyboarding",
    description: "Visual storytelling from concept to creation.",
  },
    {
    id: 2,
    src: "https://videos.pexels.com/video-files/9714625/9714625-uhd_2560_1440_30fps.mp4",
    title: "Storyboarding",
    description: "Visual storytelling from concept to creation.",
  },
    {
    id: 3,
    src: "https://videos.pexels.com/video-files/9714625/9714625-uhd_2560_1440_30fps.mp4",
    title: "Storyboarding",
    description: "Visual storytelling from concept to creation.",
  },
    {
    id: 4,
    src: "https://videos.pexels.com/video-files/9714625/9714625-uhd_2560_1440_30fps.mp4",
    title: "Storyboarding",
    description: "Visual storytelling from concept to creation.",
  },
    {
    id: 5,
    src: "https://videos.pexels.com/video-files/9714625/9714625-uhd_2560_1440_30fps.mp4",
    title: "Storyboarding",
    description: "Visual storytelling from concept to creation.",
  },
]
const videoData3=[ 
  {
    id: 1,
    src: "https://videos.pexels.com/video-files/19956503/19956503-uhd_2560_1440_60fps.mp4",
    title: "Storyboarding",
    description: "Visual storytelling from concept to creation.",
  },
    {
    id: 2,
    src: "https://videos.pexels.com/video-files/19956503/19956503-uhd_2560_1440_60fps.mp4",
    title: "Storyboarding",
    description: "Visual storytelling from concept to creation.",
  },
    {
    id: 3,
    src: "https://videos.pexels.com/video-files/19956503/19956503-uhd_2560_1440_60fps.mp4",
    title: "Storyboarding",
    description: "Visual storytelling from concept to creation.",
  },
    {
    id: 4,
    src: "https://videos.pexels.com/video-files/19956503/19956503-uhd_2560_1440_60fps.mp4",
    title: "Storyboarding",
    description: "Visual storytelling from concept to creation.",
  },
    {
    id: 5,
    src: "https://videos.pexels.com/video-files/19956503/19956503-uhd_2560_1440_60fps.mp4",
    title: "Storyboarding",
    description: "Visual storytelling from concept to creation.",
  },
]
const videoData4=[ 
  {
    id: 1,
    src: "https://videos.pexels.com/video-files/32665219/13926714_2560_1440_24fps.mp4",
    title: "Storyboarding",
    description: "Visual storytelling from concept to creation.",
  },
    {
    id: 2,
    src: "https://videos.pexels.com/video-files/32665219/13926714_2560_1440_24fps.mp4",
    title: "Storyboarding",
    description: "Visual storytelling from concept to creation.",
  },
    {
    id: 3,
    src: "https://videos.pexels.com/video-files/32665219/13926714_2560_1440_24fps.mp4",
    title: "Storyboarding",
    description: "Visual storytelling from concept to creation.",
  },
    {
    id: 4,
    src: "https://videos.pexels.com/video-files/32665219/13926714_2560_1440_24fps.mp4",
    title: "Storyboarding",
    description: "Visual storytelling from concept to creation.",
  },
    {
    id: 5,
    src: "https://videos.pexels.com/video-files/32665219/13926714_2560_1440_24fps.mp4",
    title: "Storyboarding",
    description: "Visual storytelling from concept to creation.",
  },
]
function App() {
  return (
    <section id="services">
      <h1 style={{ textAlign: "center", color: "#fff", fontSize: "3rem", marginBottom: "40px" }}>
        OUR SERVICES
      </h1>

      <VideoRowCarousel rowTitle="Video Editing" videos={videoData} />
      <VideoRowCarousel rowTitle="Video Editing" videos={videoData1} reverse />
      <VideoRowCarousel rowTitle="Video Editing" videos={videoData2} />
      <VideoRowCarousel rowTitle="Video Editing" videos={videoData3} reverse />
      <VideoRowCarousel rowTitle="Video Editing" videos={videoData4}  />
    </section>
  );
}

export default App;
