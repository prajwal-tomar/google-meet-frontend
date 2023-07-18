import React, { useRef, useEffect } from 'react';

const VideoCall = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    // Code to access the user's camera and stream it to the video element
    navigator.mediaDevices
      .getUserMedia({ video: true, audio: false })
      .then((stream) => {
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
      })
      .catch((error) => {
        console.log("Error accessing camera:", error);
      });

    return () => {
      // Code to stop the video stream when the component is unmounted
      const stream = videoRef.current.srcObject;
      if (stream) {
        const tracks = stream.getTracks();
        tracks.forEach((track) => {
          track.stop();
        });
      }
    };
  }, []);
  return (
    <>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <a className="navbar-brand" href="#">
            Google Meet
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto">
              {/* Add your navigation links here */}
            </ul>
          </div>
        </div>
      </nav>

      {/* Video Call Section */}
      <section
        id="video-call"
        className="d-flex align-items-center justify-content-center"
      >
        <div className="container">
          <div className="video-container">
            <video ref={videoRef} autoPlay playsInline></video>
          </div>
          <div className="controls-container">
            {/* Add video call controls */}
            {/* For example: */}
            <button>Start Call</button>
            <button>End Call</button>
          </div>
        </div>
      </section>
    </>
  );
};

export default VideoCall;
