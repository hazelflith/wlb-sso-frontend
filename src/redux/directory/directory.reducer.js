const INITIAL_STATE = {
  sections: [
    {
      id: 1,
      title: 'Learning',
      linkUrl: '/learning',
    },
    {
      id: 2,
      title: 'Organization',
      linkUrl: '/learning',
    },
    {
      id: 3,
      title: 'Finance',
      linkUrl: '/finance',
    },
    {
      id: 4,
      title: 'Time',
      linkUrl: '/time',
    },
    {
      id: 5,
      title: 'Digital Document',
      linkUrl: '/digital',
    },
    {
      id: 6,
      title: 'Recruitment',
      linkUrl: 'http://localhost:3002/',
    },
    {
      id: 7,
      title: 'Support',
      linkUrl: '/support',
    },
    {
      id: 8,
      title: 'Talent',
      linkUrl: '/talent',
    },
    {
      id: 9,
      title: 'Reward',
      linkUrl: '/reward',
    },
    {
      id: 10,
      title: 'Performance',
      linkUrl: '/performance',
    },
    {
      id: 11,
      title: 'Job Portal',
      linkUrl: 'http://localhost:3001/',
    },
  ],
}

const directoryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state
  }
}

export default directoryReducer
