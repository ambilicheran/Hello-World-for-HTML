import "./App.css";

function App() {
  return (
    <article>
      <p>
        <time>30 Aug 2021</time>
      </p>
      <p>
        <time datetime="2021-08-30">30 Aug,2021</time>
      </p>
      <p>
        <time datetime="2021-08-30">30 Aug</time>
      </p>
      <p>
        <time datetime="2021-08-30">2 days ago</time>
      </p>
      <p>
        <time datetime="2021-08-30">tomorrow</time>
      </p>
    </article>
  );
}

export default App;
