import type { User, Post, Experience, Education } from './types';

export const users: User[] = [
  {
    id: '1',
    name: 'Jane Doe',
    headline: 'Senior Software Engineer at TechCorp',
    avatarUrl: 'https://picsum.photos/seed/user1/200/200',
    avatarHint: 'woman portrait',
    location: 'San Francisco, CA',
    industry: 'Computer Software',
    summary:
      'Experienced software engineer with a passion for developing innovative programs that expedite the efficiency and effectiveness of organizational success. Well-versed in technology and writing code to create systems that are reliable and user-friendly.',
    skills: ['React', 'TypeScript', 'Node.js', 'GraphQL', 'Next.js', 'Cloud Computing'],
    experience: [
      {
        id: 'exp1',
        title: 'Senior Software Engineer',
        company: 'TechCorp',
        location: 'San Francisco, CA',
        startDate: 'Jan 2020',
        endDate: 'Present',
        description: 'Leading the development of a new cloud-based platform for enterprise clients. Mentoring junior engineers and driving architectural decisions.',
      },
      {
        id: 'exp2',
        title: 'Software Engineer',
        company: 'Innovate LLC',
        location: 'Austin, TX',
        startDate: 'Jun 2017',
        endDate: 'Dec 2019',
        description: 'Developed and maintained features for a large-scale e-commerce application using React and Redux.',
      },
    ],
    education: [
      {
        id: 'edu1',
        school: 'University of Texas at Austin',
        degree: 'Bachelor of Science',
        fieldOfStudy: 'Computer Science',
        startYear: 2013,
        endYear: 2017,
      },
    ],
    connections: ['2', '3'],
  },
  {
    id: '2',
    name: 'John Smith',
    headline: 'Product Manager at Solutions Inc.',
    avatarUrl: 'https://picsum.photos/seed/user2/200/200',
    avatarHint: 'man portrait',
    location: 'New York, NY',
    industry: 'Information Technology and Services',
    summary:
      'A dedicated Product Manager with over 8 years of experience in managing product lifecycles from conception to launch. Proven ability to work with cross-functional teams to deliver high-quality products that meet customer needs.',
    skills: ['Product Management', 'Agile Methodologies', 'User Research', 'Roadmap Planning', 'JIRA'],
    experience: [
      {
        id: 'exp3',
        title: 'Product Manager',
        company: 'Solutions Inc.',
        location: 'New York, NY',
        startDate: 'Mar 2018',
        endDate: 'Present',
        description: 'Define product strategy and roadmap. Deliver MRDs and PRDs with prioritized features and corresponding justification.',
      },
    ],
    education: [
      {
        id: 'edu2',
        school: 'New York University',
        degree: 'Master of Business Administration (MBA)',
        fieldOfStudy: 'Business Administration and Management',
        startYear: 2016,
        endYear: 2018,
      },
    ],
    connections: ['1', '4'],
  },
  {
    id: '3',
    name: 'Sarah Lee',
    headline: 'UX/UI Designer at Creative Minds',
    avatarUrl: 'https://picsum.photos/seed/user3/200/200',
    avatarHint: 'woman smiling',
    location: 'London, United Kingdom',
    industry: 'Design',
    summary:
      'Creative and detail-oriented UX/UI designer with a strong background in creating user-centric designs for web and mobile applications. Proficient in a wide range of design tools and methodologies.',
    skills: ['UX Design', 'UI Design', 'Figma', 'Sketch', 'Adobe XD', 'Prototyping', 'User Testing'],
    experience: [
      {
        id: 'exp4',
        title: 'UX/UI Designer',
        company: 'Creative Minds',
        location: 'London, United Kingdom',
        startDate: 'Sep 2019',
        endDate: 'Present',
        description: 'Designing and prototyping user interfaces for a variety of clients. Conducting user research and usability testing to inform design decisions.',
      },
    ],
    education: [
      {
        id: 'edu3',
        school: 'Central Saint Martins',
        degree: 'Bachelor of Arts',
        fieldOfStudy: 'Graphic Design',
        startYear: 2016,
        endYear: 2019,
      },
    ],
    connections: ['1'],
  },
  {
    id: '4',
    name: 'Michael Brown',
    headline: 'Data Scientist at Data Insights',
    avatarUrl: 'https://picsum.photos/seed/user4/200/200',
    avatarHint: 'man glasses',
    location: 'Chicago, IL',
    industry: 'Data & Analytics',
    summary: 'Data scientist with a knack for finding valuable insights in large datasets. Experienced in machine learning, statistical modeling, and data visualization.',
    skills: ['Python', 'R', 'Machine Learning', 'TensorFlow', 'Pandas', 'SQL'],
    experience: [],
    education: [],
    connections: ['2'],
  },
   {
    id: '5',
    name: 'Emily White',
    headline: 'Marketing Director at Growth Co.',
    avatarUrl: 'https://picsum.photos/seed/user5/200/200',
    avatarHint: 'woman professional',
    location: 'Boston, MA',
    industry: 'Marketing and Advertising',
    summary: 'Results-driven marketing director with a track record of developing and executing successful marketing campaigns that drive brand growth and revenue.',
    skills: ['Digital Marketing', 'SEO', 'Content Strategy', 'Brand Management', 'Google Analytics'],
    experience: [],
    education: [],
    connections: [],
  },
  {
    id: '6',
    name: 'David Green',
    headline: 'DevOps Engineer at Cloud Services',
    avatarUrl: 'https://picsum.photos/seed/user6/200/200',
    avatarHint: 'man casual',
    location: 'Seattle, WA',
    industry: 'Computer Software',
    summary: 'Specializing in automating and streamlining operations and processes. Building and maintaining tools for deployment, monitoring and operations.',
    skills: ['AWS', 'Docker', 'Kubernetes', 'CI/CD', 'Terraform', 'Ansible'],
    experience: [],
    education: [],
    connections: [],
  }
];

export const posts: Post[] = [
  {
    id: 'post1',
    authorId: '1',
    content:
      "Excited to share that our new cloud platform is now in beta! It's been a journey of innovation and hard work from the entire team at TechCorp. We're redefining what's possible for enterprise-level cloud solutions. #CloudComputing #Tech #Innovation",
    imageUrl: 'https://picsum.photos/seed/post1/800/400',
    imageHint: 'technology abstract',
    createdAt: '2 days ago',
    likes: 128,
    comments: 15,
  },
  {
    id: 'post2',
    authorId: '2',
    content:
      "Just published an article on 'The Future of Product Management'. It covers how AI and data analytics are shaping the next generation of product development. Would love to hear your thoughts! #ProductManagement #AI #FutureOfWork",
    imageUrl: 'https://picsum.photos/seed/post2/800/400',
    imageHint: 'business chart',
    createdAt: '5 days ago',
    likes: 95,
    comments: 22,
  },
  {
    id: 'post3',
    authorId: '3',
    content:
      'Simplicity is the ultimate sophistication. Sharing some recent UI explorations focused on clean, intuitive navigation patterns. Feedback is always welcome! #UIDesign #UX #DesignThinking',
    createdAt: '1 week ago',
    likes: 210,
    comments: 34,
  },
];

// Helper functions to get data
export const getUsers = () => users;
export const getUserById = (id: string) => users.find((user) => user.id === id);
export const getPosts = () => posts;
export const getPostById = (id: string) => posts.find((post) => post.id === id);
