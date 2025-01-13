import React from 'react';
import "./CSS Files/Blogs.css";
import { useNavigate } from 'react-router-dom'; 
import Particles from "./Particles"; // Import Particles component

const Blogs = () => {
  const navigate = useNavigate(); 

  const goToHome = () => {
    navigate("/"); 
  };

  const blogPosts = [
    { id: "beginnings", title: "To Beginnings, Self Improvement & End of a Term", content: "December 13th, 2024" },
    { id: "Dilemma", title: "LeetCode vs Projects", content: "January 8th, 2025" },
  ];

  const handleBlogClick = (id) => {
    navigate(`/blogs/${id}`);
  };

  return (
    <div className="blogs-container">
      
      <Particles id="blogs-particles" />

      <h1>Welcome to my Thoughts!</h1>
      <p className='pargraph'>
        I honestly made this to keep track of what I have done recently to the means of attempting to be more productive with my time.
      </p>
      <button className="home-button" onClick={goToHome}>
        Main Page
      </button>
      <div className="blog-list">
        {blogPosts.map((blog) => (
          <div
            key={blog.id}
            className="blog-box"
            onClick={() => handleBlogClick(blog.id)}  
          >
            <h2>{blog.title}</h2>
            <p>{blog.content.slice(0, 50)}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
