import {React , useEffect, useState }from 'react';
import Card from '../../HomeSection/CardSection/Card';
import axios from 'axios';
const Profile = () => {
  const [id,setId]=useState(1);
  const [authorData, setAuthorData] = useState(null); // State to store author data
  const [loading, setLoading] = useState(true); // State to handle loading

  const fetchUserData = async () => {
    try {
      const response = await axios.get('http://localhost:8000/api/auth/user', { withCredentials: true });
      console.log('API Response:', response);
      setId(response.data.Id);
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };

  useEffect(() => {
    fetchUserData(); 
  }, [id]);

  useEffect(() => {
    const fetchAuthorData = async () => {
      try {
        const response = await fetch(`http://localhost:8000/api/authors/${id}`);
        if (!response.ok) {
          throw new Error(`Error: ${response.statusText}`);
        }
        const data = await response.json();
        setAuthorData(data); // Store data in state
        console.log(data); // Log the data to console
        setLoading(false); // Set loading to false once data is fetched
      } catch (error) {
        console.error('Failed to fetch author data:', error);
        setLoading(false); // Set loading to false on error
      }
    };

    fetchAuthorData();
  }, [id,setId]);

  if (loading) {
    return <div>Loading...</div>; // Display loading message while fetching data
  }

  if (!authorData) {
    return <div>No data available</div>; // Handle case where no data is available
  }
  const transformedBlogs = authorData.Posts.map((post) => ({
    id: post.Id,
    title: post.PostTitle,
    snippet: post.Content.substring(0, 100) + '...', 
    likes: Math.floor(Math.random() * 200), 
    author:authorData.Username ,
    date: new Date(post.Date).toLocaleDateString(), 
    category: post.PostType, 
    imageUrl: 'https://via.placeholder.com/300', 
  }));

 
  return (
    <div className=' AuthorPagee AuthorPage '>
    <div className="containerpp">
        <div className="profile-image">
          <img src={authorData.ImageUrl} alt="Author Profile" />
        </div>

        <div className="profile-info">
          <h2>{authorData.AuthorName}</h2>
          <p>{authorData.Description}</p>
        </div>
        <div className="contact-info">
          <h3>Contact Info</h3>
          <p> <a href={`mailto:${authorData.contacts}`}>{authorData.contacts}</a></p>
          {/* Add more contact details if available */}
        </div>

        <div className="skills">
          <h3>Skills</h3>
          <div className="skills-list">
            {/* Example: Hardcoded skills, update with dynamic data if available */}
            <button>Creative Writing</button>
            <button>Copywriting</button>
            <button>Editing</button>
            <button>Content Creation</button>
            <button>Research</button>
            <button>SEO Writing</button>
            <button>Storytelling</button>
            <button>Technical Writing</button>
            <button>Blogging</button>
          </div>
        </div>
        <div className="software-skills">
          <h3>My Work</h3>
          <div>
          <div className="card-section">
      {transformedBlogs.map(blog => (
        <Card key={blog.id} blog={blog} />
      ))}
    </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile
