import { getNumbers, getDate  } from './tools'

export default {
    user: {
        avatar: 'images/bolso.jpg',
        fullName: 'Jair M. Bolsonaro',
  		  verified: 'images/verified.png',
        twitter: '@jairbolsonaro'
    },
    datetime: getDate(),
    retweets: getNumbers(),
    likes: getNumbers(),
    comments: Math.floor(Math.random() * 10 + 1 ),
    avatars: [
        'images/avatar-1.jpg',
        'images/avatar-2.jpg',
        'images/avatar-3.jpg',
        'images/avatar-4.jpg',
        'images/avatar-5.jpg',
        'images/avatar-6.jpg',
        'images/avatar-7.jpg',
        'images/avatar-8.jpg'
    ]
};
