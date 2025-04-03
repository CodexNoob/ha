import React from "react";

function Video() {
  const videos = [
    {
      id: 1,
      title: "First Video",
      description: "Explore the latest in tech advancements.",
      url: "https://www.youtube.com/embed/5NCFoC3U1Fw",
      date: "2023-01-15",
      category: "Technology",
    },
    {
      id: 2,
      title: "Second Video",
      description: "Learn the best development practices.",
      url: "https://www.youtube.com/embed/5NCFoC3U1Fw",
      date: "2023-01-16",
      category: "Development",
    },
    {
      id: 3,
      title: "Third Video",
      description: "Discover cutting-edge design ideas.",
      url: "https://www.youtube.com/embed/5NCFoC3U1Fw",
      date: "2023-01-17",
      category: "Design",
    },
  ];

  return (
    <section className="section-gallery" id="videos">
      <div className="text-center mb-4">
          <h1>Videos</h1>
          <p>Select a fruit to view more details.</p>
        </div>
      <div className="container">
        <div className="row">
          {videos.map((video) => (
            <div key={video.id} className="col-md-4 mb-4">
              <div className="video-card">
                {/* Video Frame */}
                <div className="ratio ratio-16x9">
                  <iframe
                    src={`${video.url}?rel=0`}
                    title={video.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
                {/* Video Details */}
                <div className="video-info p-3">
                  <h5 className="video-title">{video.title}</h5>
                  <p className="video-description">{video.description}</p>
                  <div className="video-meta">
                    <span className="video-date">{video.date}</span> |{" "}
                    <span className="video-category">{video.category}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <style>{`
      .video-card {
  background: #fff;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease-in-out;
}

.video-card:hover {
  transform: translateY(-5px);
}

.video-info {
  text-align: center;
}

.video-title {
  font-size: 1.2rem;
  font-weight: bold;
  margin-bottom: 5px;
}

.video-description {
  font-size: 0.9rem;
  color: #666;
}

.video-meta {
  font-size: 0.8rem;
  color: #888;
}
      `}</style>
    </section>
  );
}

export default Video;
