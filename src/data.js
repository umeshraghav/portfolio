import React from 'react';
import {FaLinkedin, FaTwitter, FaGithub } from 'react-icons/fa';
export const links = [
  {
    id: 1,
    url: '/',
    text: 'home',
  },
  {
    id: 2,
    url: '/about',
    text: 'about',
  },
  {
    id: 3,
    url: '/projects',
    text: 'projects',
  },
  {
    id: 4,
    url: '/contact',
    text: 'contact',
  },
  {
    id: 5,
    url: '/profile',
    text: 'profile',
  },
];

export const socialLinks= [
  {
    id: 1,
    url: 'https://www.github.com/umeshraghav',
    icon: <FaGithub />,
    text: 'umeshragahv'
  },
  {
    id: 2,
    url: 'https://www.twitter.com/umeshraghav55',
    icon: <FaTwitter />,
    text: 'umeshragahv55'
  },
  {
    id: 3,
    url: 'https://www.linkedin.com/in/raghav7',
    icon: <FaLinkedin />,
    text: 'raghav7'
  },
 
];
