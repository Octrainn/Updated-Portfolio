import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import "./CSS Files/blogpages.css";

const BlogPages = () => {
  const { id } = useParams(); 
  const navigate = useNavigate();

  const backtoBlog = () => {
    navigate("/blogs");
  };

  const HighlightWords = () => {

  }
  const blogPosts = [
    {
      id: "beginnings",
      title: "End of 3rd Year Fall Semester",
      Date: "12/13/2024",

      sections: [
        {
            heading: "Visualizing Change",
             content: " As mentioned in the main blog page, I want to create a timeline for myself where I can visualize the improvements that I have made and knowledge I have learned as I took on more meaningful challenges.  As I was growing up, I was kind of a passive person when it came to learning, I would do the bare minimum of what was told to me, so just going to class, doing work, but never usually anything outside of that. I believe it was a combination of me being extremely lazy, and just apathetic to the idea of learning which I believe roots from the entire idea of simply being more curious. Being more curious allows you to explore multiple perspectives of why something behaves the way it does, and how it does that. I am always trying to learn new skills, techniques or develop a system where I have a well balanced lifestyle. I plan to achieve this by essentially getting out of my comfort zone, because I ultimately believe the place where you are most uncomfortable is the place you should exist to improve yourself. You will force yourself to adapt to the environment you are placed in, allowing you to think in different ways that you might not thought about previously, and also experience new challenges. All of these are unique  variables that when combined together form the byproduct known as IMPROVEMENT.  This idea does not only apply to programming for me, but also a mark of character. This includes things I struggle with myself such as discipline, being more consistent, although these two kinda go hand in hand, but I digress. "
        },
        {
          heading: "Review of this Semester",
          content: "Honestly, this semester was one of my better ones I've had, this implies both GPA and pure enjoyability. The courses I took this term were CPS633(Comp Security), CPS510(Databases), RTA928 and CPCS181.  The one course that stood out the most was CPS510,  this course is honestly one of Ryerson's best courses CPS courses I have ever taken. I believe the information that you derive from this course is  extremely useful in the practical sense. Not to say that other courses that I was taught were not practical, I just personally did not see the impact they had on my  knowledge and programming skills.  We were taught SQL, a popular programming language used to create tables  about entities that exist within a relationship inside of a database. The database we used was oracle, honestl I would've prefered a more mainstream type of database such as MySQL, but oracle was not the worst choice so I was fine with it. We were given lots of labs from this course, which meant we were required to keep up with  the course content in order to complete the labs and present to the TA.  I hated the fact that it was 8 am every Monday, but we move regardless.    "
        },
        
      ],
    },
  ];

  const blog = blogPosts.find((post) => post.id === id);

  return (
    <div className="blog-container">
      {blog ? (
        <div className="blog-content">
          <h1>{blog.title}</h1>
          <p><strong>Date:</strong> {blog.Date}</p>
          <button className="blogsButton" onClick={backtoBlog}>
            Blog Page
          </button>

          {/* Render sections dynamically */}
          {blog.sections.map((section, index) => (
            <div key={index} className="blog-section">
              <h2>{section.heading}</h2>
              <p>{section.content}</p>
            </div>
          ))}

         
        </div>
      ) : (
        <h1>Blog not found!</h1>
      )}
    </div>
  );
};

export default BlogPages;
