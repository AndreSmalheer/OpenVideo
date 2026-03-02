import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { getVideoInfo } from "../../utils/GetVideoInfo";
import Header from "../../Components/Header/Header";
import "./VideoPage.css";

export default function VideoPage() {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const video_id = params.get("video_id") || null;
  const [videoData, setVideoData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchVideo() {
      setLoading(true);
      const data = await getVideoInfo(video_id);
      setVideoData(data);
      setLoading(false);
    }
    fetchVideo();
  }, [video_id]);

  if (loading) return <p>Loading...</p>;
  if (!videoData) return <p>Video not found</p>;

  console.log(videoData)

  return (
    <>
      <Header />
      <div id="video-page">

        {/* Left: video + info glued together */}
        <div className="video-main-column">
          {videoData.formatStreams?.length > 0 && (
            <video
              id="main-video"
              className="main-video-player"
              src={videoData.formatStreams[0].url}
              controls
              autoPlay
            />
          )}
          <div className="video-info">
            <h1 className="video-title">{videoData.title}</h1>

            <div className="author-container">
                <div className="author-info">
                <img
                    className="author-thumbnail"
                    src={videoData.authorThumbnails[0].url}
                    alt={`${videoData.author} thumbnail`}
                />
                <h2 className="author-name">{videoData.author}</h2>
                <h2 className="author-subCount">{videoData.subCountText}</h2>
                </div>

                <div className="like-dislike-container">
                    <div className="like-container">
                        <img className="like-icon" src="/images/like.png"></img>
                    </div>
                    <div className="dislike-container">
                        <img className="dislike-icon" src="/images/dislike.png"></img>
                    </div>
                </div>
            </div>
            <div className="video-meta">
              <h3 className="video-views">Views: {videoData.viewCount}</h3>
              <h3 className="video-published">Published: {videoData.publishedText}</h3>
            </div>
          </div>
        </div>

        {/* Right: sidebar */}
        <div className="recommended-videos">
          {videoData.recommendedVideos?.length > 0 ? (
            videoData.recommendedVideos.map((video) => (
              <div key={video.videoId} className="recommended-video-card">
                <p className="recommended-video-title">{video.title}</p>
                {/* <p className="recommended-video-id">{video.videoId}</p> */}
              </div>
            ))
          ) : (
            <p className="no-recommended">No recommended videos</p>
          )}
        </div>

      </div>
    </>
  );
}
