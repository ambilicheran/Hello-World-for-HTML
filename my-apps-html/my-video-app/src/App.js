import "./App.css";

function App() {
  return (
    <video controls width="960" height="720">
      <source src="video1.mp4" />
      <track
        src=""
        kind="captions"
        label="English"
        srclang="en"
        default
      ></track>
      <track src="" kind="subtitles" label="Espanol" srclang="es"></track>
    </video>
  );
}

export default App;
