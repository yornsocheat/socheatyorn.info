import _r from '../modules/render.js';

let profile = {
  title: 'Profile',
  description:
    'Passionate web developer with 8+ and a year experience of backend developer in a remote job in Romania. Currently, I worked as a full-stack web developer remotely in Travel Curators (Singapore) for 2+ years. In Travel Curator I am responsible to do frontend and backend tasks which are assigned from the team leader.',
};

let experiences = [
  {
    jobTitle: 'Web Developer',
    employer: 'My Lekha Social Media Group',
    startDate: 'June 2012',
    endDate: 'January 2014',
    city: 'Phnom Penh',
    created_at: '2012-06-01',
    description:
      'Making a new website is what I have done. I have learned a lot of experiences  with Codeigniter, and the Wordpress framework. Sometimes I have done a website  with my own PHP code structure.',
  },
  {
    jobTitle: 'Web & Graphic Designer',
    employer: 'OS! FOR CREATIVE PUSH',
    startDate: 'April 2014',
    endDate: 'May 2018',
    city: 'Phnom Penh',
    created_at: '2014-04-01',
    description:
      'Experiences of creative design are interested. I can create my own idea and put it on the street. I also worked on some website designs and coding when the client requested.',
  },
  {
    jobTitle: 'Backend Developer',
    employer: 'RCI Cambodia',
    startDate: 'June 2018',
    endDate: 'September 2019',
    city: 'Romania and HongKong - Remote',
    created_at: '2018-06-01',
    description:
      'Worked as a team member at a large company in Romania. I have learned a lot of experiences with a remote job. I have been done with two kinds of projects, first is Salesforce Commerce Cloud Platform, it uses Demandware package. I am also have learned about JavaScript controllers, Digital Script, Pipeline, Sass, Business Management Tools, Administrator Tools, Demandware Structure like cartridges, Rest API, ISML template, Git tool, JIRA tool, and Bitbucket as well. Additionally, I also learned some Demandware modules such as Newsletter, Login, Product modules, Check out, and form. The second, I have learned about the Shopify framework, which works with an eCommerce site.',
  },
  {
    jobTitle: 'English Teacher',
    employer: 'Coconut School Cambodia',
    startDate: 'June 2015',
    endDate: 'August 2018',
    city: 'Phnom Penh',
    created_at: '2015-06-01',
    description:
      'It is a volunteer job that I enjoy the most. It teaches me about life lessons a lot. Being a human, I should care about the people around me and also around the world as much as possible.  Why? because the world is our home. Should I protect my home? Yes, I should. Many people now destroy their homes by cut trees, throw rubbish away into the water, and kills some important animals. Why they do it? Because they don\'t have the knowledge, so I should spend my time to educate them as much as I can. "A big change needs smalls change."',
  },
  {
    jobTitle: 'Full-stack Developer',
    employer: 'Freelancer',
    startDate: 'September 2019',
    endDate: 'Present',
    city: 'Phnom Penh',
    created_at: '2019-09-01',
    description:
      'Coding in JavaScript is my activity. I am also doing on a mobile app project, which is a project that uses react-native to build. I am not a professional with react-native but I just want to challenge myself.',
  },
  {
    jobTitle: 'Senior Web Developer',
    employer: 'SoulAdvisor',
    startDate: 'Feb 2020',
    endDate: 'Nov 2022',
    city: 'Phnom Penh, Cambodia',
    created_at: '2020-02-01',
    description:
      'I have joined the SoulAdvisor team 2 years+ to build a big wellness market platform which can help practitioner who have a real skill meet with customer who need a service to treat their soul. To build that project, we use Laravel Framework as API and ReactJs as User Interface. We have use Jira Scrum Master to manage and grow the project. Step by step the project grow and can lunch the first time in Australia and New Zealand.',
  },
  {
    jobTitle: 'Senior Full Stack Web Developer',
    employer: 'Travel Curators',
    startDate: 'Mar 2023',
    endDate: 'Present',
    city: 'Remote - Singapore',
    created_at: '2023-03-01',
    description:
      'Currently I am joining the Travel Curators team to manage and build mobile app and web app for the travel agency using Laravel Framework and NodeJs as Backend. NextJS and ReactJS as Frontend.',
  },
];

let educations = [
  {
    school: 'Bunrany Hun Sen Koh Choram',
    degree: 'Secondary School',
    startDate: 'October 2002',
    endDate: 'July 2005',
    city: 'Kandal',
    description: '',
  },
  {
    school: 'Hun Sen Khsach Kandal',
    degree: 'High School',
    startDate: 'October 2005',
    endDate: 'July 2008',
    city: 'Kandal',
    description: '',
  },
  {
    school: 'Cambodian Mekong University',
    degree: 'Bachelor of Computer Information Technology',
    startDate: 'November 2008',
    endDate: 'October 2012',
    city: 'Phnom Penh',
    description:
      'Completed with a website design project, and a database management system project (Inventory). I have a great final project before graduating, and the name of this project is the Online Student Attendant Management System. I am a tutor at a Graphic Design class and Microsoft offices class.',
  },
];

let courses = [
  {
    institution: 'Paññāsāstra',
    name: 'General English as a Second Language',
    startDate: 'October 2012',
    endDate: 'July 2015',
  },
  {
    institution: 'Edniche English School',
    name: 'Guaranteed General English Program',
    startDate: 'September 2019',
    endDate: 'Present',
  },
  {
    institution: 'Udemy.com',
    name: 'Node.js',
    startDate: 'April 2019',
    endDate: 'Present',
  },
  {
    institution: 'Udemy.com',
    name: 'Modern Javascript',
    startDate: 'August 2019',
    endDate: 'Present',
  },
  {
    institution: 'Udemy.com',
    name: 'React Native with Firebase',
    startDate: 'October 2019',
    endDate: 'Present',
  },
];

let references = [
  {
    fullName: 'Mr. Hiromitsu Nakaue',
    company: 'Travel Curators / Dynasty Travel, ABEJA Singapore NKK Consulting Pte. Ltd',
    phone: '',
    email: 'hiromitsunakaue@gmail.com',
  },
  {
    fullName: 'Mr. Jaryl Sim, CTO',
    company: 'Travel Curators',
    phone: '+65 9113 4349',
    email: '',
  },
  {
    fullName: 'Mr. Thaisan, Software Engineer',
    company: 'Travel Curators',
    phone: '+855 69 301363',
    email: '',
  },
];

let details = {
  address: 'St. 6, Rolurs village, Prasat Bakorng disctric, Siem Reap province, Cambodia',
  phone: '+855 12 487958',
  email: 'socheaty68@gmail.com',
};

let links = [
  {
    title: 'LinkedIn',
    urls: ['https://www.linkedin.com/in/yorn-socheat/'],
  },
  {
    title: 'Github',
    urls: ['https://github.com/yornsocheat'],
  },
  {
    title: 'eCommerces site I did',
    urls: [
      'https://www.kiehls.jp/',
      'https://www.yslbeautyus.com/',
      'https://www.armanibeauty.jp/',
      'https://souladvisor.com',
    ],
  },
  {
    title: 'Wordpress site I did',
    urls: [
      'https://camupjobagency.com/',
      'https://kohandetecoresort.com/',
      'https://thansurtataiecoresort.com/',
      'https://rciapac.online/',
    ],
  },
  {
    title: 'Travel Curators',
    urls: [
      'https://travel-curators.com/',
      'https://dynastytravel.com.sg/',
      'https://dashboard.tora-q.com/',
    ],
  },
];

let skills = [
  {
    name: 'PHP',
    level: 95,
  },
  {
    name: 'Laravel',
    level: 50,
  },
  {
    name: 'JavaScript',
    level: 75,
  },
  {
    name: 'NodeJs',
    level: 70,
  },
  {
    name: 'Roby on Rail',
    level: 50,
  },
  {
    name: 'ReactJs',
    level: 85,
  },
  {
    name: 'NextJs',
    level: 70,
  },
  {
    name: 'React Native',
    level: 50,
  },
  {
    name: 'HTML5 & CSS3',
    level: 75,
  },
  {
    name: 'MySQL',
    level: 75,
  },
  {
    name: 'JIRA',
    level: 50,
  },
  {
    name: 'Git',
    level: 75,
  },
  {
    name: 'Bitbucket',
    level: 50,
  },
  {
    name: 'WordPress',
    level: 75,
  },
  {
    name: 'Bootstrap',
    level: 100,
  },
  {
    name: 'Tailwind',
    level: 80,
  },
  {
    name: 'Graphic Design',
    level: 100,
  },
  {
    name: 'Salesforces',
    level: 50,
  },
  {
    name: 'Linux Hosting',
    level: 50,
  },
  {
    name: 'Docker',
    level: 50,
  },
  {
    name: 'AWS',
    level: 50,
  },
];

let languages = [
  {
    name: 'Khmer',
    level: 100,
  },
  {
    name: 'English',
    level: 75,
  },
];

_r.renderProfile(profile, '#profile');
_r.renderExperiences(experiences, '#employment-history');
_r.renderEducations(educations, '#educations');
_r.renderCourses(courses, '#courses');
_r.renderReferences(references, '#references');
_r.renderDetails(details, '#details');
_r.renderLinks(links, '#links');
_r.renderSkills(skills, '#skills');
_r.renderLanguages(languages, '#languages');
