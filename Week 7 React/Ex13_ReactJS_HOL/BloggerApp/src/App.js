import React, { useState } from 'react';
import BookDetails from './components/BookDetails';
import BlogDetails from './components/BlogDetails';
import CourseDetails from './components/CourseDetails';

function App() {
  const [view, setView] = useState("book");

  // Method 1: If-Else inside JSX
  const renderUsingIfElse = () => {
    if (view === "book") return <BookDetails />;
    else if (view === "blog") return <BlogDetails />;
    else if (view === "course") return <CourseDetails />;
    else return <p>No view selected</p>;
  };

  // Method 2: Element Variables
  let componentToRender;
  if (view === "book") componentToRender = <BookDetails />;
  else if (view === "blog") componentToRender = <BlogDetails />;
  else if (view === "course") componentToRender = <CourseDetails />;
  else componentToRender = <p>No component selected</p>;

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Blogger App - Conditional Rendering</h1>
      <div style={{ marginBottom: "20px" }}>
        <button onClick={() => setView("book")}>Show Book</button>
        <button onClick={() => setView("blog")}>Show Blog</button>
        <button onClick={() => setView("course")}>Show Course</button>
        <button onClick={() => setView("none")}>Clear</button>
      </div>

      <div>
        <h2>1. Using If-Else Inside Function</h2>
        {renderUsingIfElse()}
      </div>

      <hr />

      <div>
        <h2>2. Using Element Variables</h2>
        {componentToRender}
      </div>

      <hr />

      <div>
        <h2>3. Using Ternary Operators</h2>
        {view === "book" ? <BookDetails /> :
         view === "blog" ? <BlogDetails /> :
         view === "course" ? <CourseDetails /> :
         <p>No content selected</p>}
      </div>

      <hr />

      <div>
        <h2>4. Using Short Circuit (&&)</h2>
        {view === "book" && <BookDetails />}
        {view === "blog" && <BlogDetails />}
        {view === "course" && <CourseDetails />}
        {view === "none" && <p>No view selected</p>}
      </div>
    </div>
  );
}

export default App;
