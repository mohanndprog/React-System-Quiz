import React, { useState, useEffect } from 'react';

const SoundInputField = () => {
  const [audioContext, setAudioContext] = useState(null);
  const [mediaStream, setMediaStream] = useState(null);
  const [audioRecorder, setAudioRecorder] = useState(null);
  const [chunks, setChunks] = useState([]);
  const [isRecording, setIsRecording] = useState(false);

  useEffect(() => {
    const initializeAudio = async () => {
      const audioContext = new (window.AudioContext || window.webkitAudioContext)();
      const mediaStream = await navigator.mediaDevices.getUserMedia({ audio: true });

      setAudioContext(audioContext);
      setMediaStream(mediaStream);
    };

    initializeAudio();

    return () => {
      if (mediaStream) {
        mediaStream.getTracks().forEach((track) => track.stop());
      }
    };
  }, []);

  const handleStart = () => {
    if (audioContext && mediaStream && !isRecording) {
      const audioSource = audioContext.createMediaStreamSource(mediaStream);
      const audioRecorder = new MediaRecorder(audioSource);
      const chunks = [];

      audioRecorder.addEventListener('dataavailable', (event) => {
        chunks.push(event.data);
      });

      audioRecorder.addEventListener('stop', () => {
        setChunks(chunks);
        setIsRecording(false);
      });

      audioRecorder.start();
      setIsRecording(true);
      setAudioRecorder(audioRecorder);
    }
  };

  const handleStop = () => {
    if (audioRecorder && isRecording) {
      audioRecorder.stop();
    }
  };

  const handlePlay = () => {
    if (chunks.length > 0) {
      const audioData = new Blob(chunks, { type: 'audio/webm' });
      const audioUrl = URL.createObjectURL(audioData);
      const audioElement = new Audio(audioUrl);

      audioElement.play();
    }
  };

  return (
    <div className="container">
   
      <div className="mt-3">
      <audio  controls="controls" />
        {/* <button className="btn btn-primary mr-2" onClick={handleStart} disabled={isRecording}>
          Start
        </button>
        <button className="btn btn-secondary mr-2" onClick={handleStop} disabled={!isRecording}>
          Stop
        </button>
        <button className="btn btn-success mr-2" onClick={handlePlay}>
          Play
        </button> */}
      </div>
    </div>
  );
};

export default SoundInputField;
