
import { useState, useEffect } from 'react'
import "prismjs/themes/prism-tomorrow.css"
import Editor from "react-simple-code-editor"
import prism from "prismjs"
import Markdown from "react-markdown"
import rehypeHighlight from "rehype-highlight";
import "highlight.js/styles/github-dark.css";
import axios from 'axios'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [code, setCode] = useState(` function sum() {
  return 1 + 1
}`)

  const [review, setReview] = useState(``)

  useEffect(() => {
    prism.highlightAll()
  }, [])

  async function reviewCode() {
    const response = await axios.post('http://localhost:3002/ai/get-response', { code })
    setReview(response.data.response)
  }

  return (
    <>
      <main>
        <div className="left">
          <div className="code">



            <div style={{
              padding: "8px 12px",
              fontWeight: "bold",
              backgroundColor: "#343434",
              color: "#fff",
              borderBottom: "1px solid #444",
              borderTopLeftRadius: "10px",
              borderTopRightRadius: "10px"
            }}>
              💻 Code Editor
            </div>

            <Editor

              value={code}
              onValueChange={code => setCode(code)}
              highlight={code => prism.highlight(code, prism.languages.javascript, "javascript")}
              padding={10}
              style={{
                fontFamily: '"Fira code", "Fira Mono", monospace',
                fontSize: 16,

                height: "95%",
                width: "100%",

                minHeight: "300px",
                overflow: "auto",          // vertical scrollbar if needed
                whiteSpace: "pre-wrap",    // wrap lines
                wordBreak: "break-word"    // break long words
              }}
            />

          </div>
          <div
            onClick={reviewCode}
            className="review">Review</div>
        </div>
        <div className="right">
          <div style={{
            padding: "8px 12px",
            fontWeight: "bold",
            backgroundColor: "#222",
            color: "#fff",
            borderBottom: "1px solid #444",
            borderTopLeftRadius: "10px",
            borderTopRightRadius: "10px"
          }}>
            Code Review Output
          </div>
          <Markdown

            rehypePlugins={[rehypeHighlight]}

          >{review}</Markdown>
        </div>
      </main>
    </>
  )
}



export default App