import React from "react";
import VideoRowCarousel from "./videocarousel.jsx";

const videoData = [
  {
    id: 1,
    src: "https://videos.pexels.com/video-files/32773470/13971084_2730_1440_30fps.mp4",
    title: "Editing",
    description: "Professional video editing for social and commercial use.",
  },
  {
    id: 2,
    src: "https://www.shutterstock.com/video/clip-3665878381-3d-render-abstract-art-loop-animation-video",
    title: "3D Animation",
    description: "Breathtaking animations for branding or entertainment.",
  },
  {
    id: 3,
    src: "https://videos.pexels.com/video-files/32773470/13971084_2730_1440_30fps.mp4",
    title: "VFX",
    description: "Add jaw-dropping visual effects to your films or ads.",
  },
  {
    id: 4,
    src: "https://videos.pexels.com/video-files/32773470/13971084_2730_1440_30fps.mp4",
    title: "Color Grading",
    description: "Cinema-grade color correction for all visuals.",
  },
  {
    id: 5,
    src: "https://videos.pexels.com/video-files/32773470/13971084_2730_1440_30fps.mp4",
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
]
export default function Services() {
  return (
    <section id="services">
      <h1 style={{ textAlign: "center", color: "#fff", fontSize: "3rem", marginBottom: "40px" }}>
        Our Services
      </h1>

      <VideoRowCarousel videos={videoData} rowTitle="Video Editing" />
      <VideoRowCarousel videos={videoData1} rowTitle="Animation Studio" reverse />
      <VideoRowCarousel videos={videoData} rowTitle="Post Production" />
      <VideoRowCarousel videos={videoData} rowTitle="Color & Composition" reverse />
      <VideoRowCarousel videos={videoData} rowTitle="Visual Effects" />
    </section>
  );
}
