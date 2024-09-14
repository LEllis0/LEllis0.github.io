import React from 'react';
import '../App.css'; // Make sure this import is included

const Blog = () => {
  return (
    <section className="blog-section">
      <div className="blog-post">
        <p>Welcome to the blog, where I discuss my current thoughts on the markets.</p>
        <p>REIT - what's been happening in the markets this month</p>
        <h2>Trends</h2>
        <p>What are the long-term growth drivers</p>
      </div>
      <div className="blog-post">
        <h2>Post Title</h2>
        <p>This is another blog post. Add content here...</p>
      </div>
      <div className="blog-post">
        <h2>Another Post</h2>
        <p>More content for additional blog posts...</p>
      </div>
      {/* Add more blog-post divs as needed */}
    </section>
  );
};

export default Blog;