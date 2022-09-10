import React, { useState } from 'react';
import Navbar from '../NavComponent/Navbar';
import EventContainer from './EventContainer';
import PostShare from './PostShare';
import PostUploads from './PostUploads';

const Community = () => {
  const [getPostId, setGetPostId] = useState(null)
  return (
    <section className='community'>
      <Navbar />
      <section className="content-container">
        <div className="post-container">
          <PostShare />
          <PostUploads/>
        </div>
        <EventContainer />
      </section>
      
    </section>
  )
}

export default Community