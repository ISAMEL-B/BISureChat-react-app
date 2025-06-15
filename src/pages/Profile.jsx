import React from 'react';
import { useParams } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import ProfileHeader from './ProfileHeader';
import ProfilePosts from './ProfilePosts';
import './profile.css';

const Profile = () => {
  const { userId } = useParams();
  const { currentUser } = useAuth();
  
  const isCurrentUser = !userId || userId === currentUser?.id;

  return (
    <div className="profile-page">
      <ProfileHeader 
        userId={userId} 
        isCurrentUser={isCurrentUser} 
      />
      
      <div className="profile-content">
        <aside className="profile-sidebar">
          {/* Additional profile info */}
        </aside>
        
        <main className="profile-main">
          <ProfilePosts 
            userId={userId} 
            isCurrentUser={isCurrentUser} 
          />
        </main>
      </div>
    </div>
  );
};

export default Profile;