import React from 'react';
import { 
  FaHeart, 
  FaRegHeart, 
  FaComment, 
  FaShare, 
  FaBug 
} from 'react-icons/fa';

export const HeartIcon = ({ filled }) => 
  filled ? <FaHeart color="#ff6b6b" /> : <FaRegHeart />;

export const CommentIcon = () => <FaComment />;

export const ShareIcon = () => <FaShare />;

export const BugIcon = () => <FaBug color="#75c9b7" />;