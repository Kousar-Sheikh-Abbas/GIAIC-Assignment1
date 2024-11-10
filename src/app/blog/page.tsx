
import React from 'react'
const Blog = () => {
    const blogPosts = [
      {
        id: 1,
        title: "Exploring the Hidden Waterfalls",
        description: "A journey to uncover some of the most beautiful and hidden waterfalls in the world.",
        imageUrl: "/image/img1.jpg", 
      },
      {
        id: 2,
        title: "Top 10 Ancient Cities",
        description: "A list of the most fascinating ancient cities you must visit for a trip back in time.",
        imageUrl: "/image/img2.jpg",
      },
      {
        id: 3,
        title: "A Foodie's Guide to Street Food",
        description: "Discover the best street food around the globe and where to find them.",
        imageUrl: "/image/img3.jpg",
      },
    ];
  
    return (
      <div className="p-8">
        <h1 className="text-[60px] uppercase text-center font-bold mb-8">Blog</h1>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <div key={post.id} className="bg-white shadow-md rounded-lg overflow-hidden">
              <img src={post.imageUrl} alt={post.title} className="h-48 w-full object-cover" />
              <div className="p-4">
                <h2 className="text-2xl font-bold mb-2">{post.title}</h2>
                <p className="text-gray-700 mb-4">{post.description}</p>
                <button className="px-4 py-2 bg-black text-white rounded hover:bg-gray-800">
                  Read More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default Blog;
  
