import React from "react";
import Post from "./Post";

export default class Posts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      hasError: false
    };
  }

  // Lifecycle method to load data when component mounts
  componentDidMount() {
    this.loadPosts();
  }

  loadPosts() {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => {
        this.setState({ posts: data.slice(0, 10) }); // Show first 10 posts
      })
      .catch((error) => {
        this.setState({ hasError: true });
      });
  }

  // Error boundary
  componentDidCatch(error, info) {
    alert("An error occurred in Posts component.");
    console.error("Error caught:", error, info);
  }

  render() {
    return (
      <div>
        <h1>Blog Posts</h1>
        {this.state.posts.map((post) => (
          <Post key={post.id} title={post.title} body={post.body} />
        ))}
      </div>
    );
  }
}
