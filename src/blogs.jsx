import React from 'react';
import "./CSS Files/Blogs.css";
import { useNavigate } from 'react-router-dom'; 

const Blogs = () => {
  const navigate = useNavigate(); 

  const goToHome = () => {
    navigate("/"); 
  };

  const blogPosts = [
    { id: "beginnings", title: "To Beginnings, Self Improvement & End of a Term", content: "December 13th, 2024" },
    { id: "Dilemma", title: "LeetCode vs Projects", content: "January 8th, 2025" },

  ];
  //ui front page

  const handleBlogClick = (id) => {
    navigate(`/blogs/${id}`); // a dynamic blog page
  };

  return (
    <div className="blogs-container">
 
      <h1>Welcome to my Thoughts!</h1>
      <p className='pargraph'>i honestly made this to  keep track of what i have done recently to the means of attempting to be more productive with my time  </p>
      <button className="home-button" onClick={goToHome}>
        Main Page
      </button>
      <div className="blog-list">
        {blogPosts.map((blog) => (
          <div
            key={blog.id}
            className="blog-box"
            onClick={() => handleBlogClick(blog.id)}  
          > {/* handles navigating between unique blogs */}
            <h2>{blog.title}</h2>
            <p>{blog.content.slice(0, 50)}</p> {/* preview of the content */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
