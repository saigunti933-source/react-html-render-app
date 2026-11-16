import { useState } from "react";

function App() {
  const [html, setHtml] = useState(
    "<h1>Hello World!</h1><p>My website is working!</p>"
  );

  return (
    <div style={{ padding: "25px", fontFamily: "Arial" }}>
      <h1>HTML Preview App</h1>
      <p>Write HTML and see your live preview.</p>

      <div style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "20px"
      }}>
        <div>
          <h2>HTML Editor</h2>
          <textarea
            value={html}
            onChange={(e) => setHtml(e.target.value)}
            style={{ width: "100%", height: "350px" }}
          />
        </div>

        <div>
          <h2>Live Preview</h2>
          <iframe
            title="HTML Preview"
            srcDoc={html}
            sandbox=""
            style={{ width: "100%", height: "350px" }}
          />
        </div>
      </div>
    </div>
  );
}

export default App;