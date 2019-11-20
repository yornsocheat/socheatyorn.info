import _r from '../modules/render.js';

let profile = {
    title: 'Profile',
    description: 'Passionate web developer with 6+ years and graphic designer with 3+ years in the local company, and a year experience of backend developer with a remote job in Romania.Currently, I am a freelancer as a full stack developer.Worded as a web developer is not enough, I also worked as a volunteer teacher of English and Mathematics in a small village.It teaches me about life lessons.'
};

let experiences = [{
        jobTitle: 'Software Developer',
        employer: 'Fourth Sector Innovation',
        startDate: 'November 2011',
        endDate: 'February 2012',
        city: 'Phnom Penh',
        description: 'I am a part of a team to develop a webmail client project. In this project, I used PHP 5 as a server-side script and HTML/CSS, JavaScript, and Ajax as a client-side script. The operating system is Ubuntu and used SVN as a subversion control system for support.'
    },
    {
        jobTitle: 'Web Developer',
        employer: 'My Lekha Social Medea Group',
        startDate: 'June 2012',
        endDate: 'January 2014',
        city: 'Phnom Penh',
        description: 'Making a new website is what I have done. I have learned a lot of experiences with Codeigniter, and Wordpress framework. Sometimes I have done a website with my own PHP functions.'
    },
    {
        jobTitle: 'Graphic Designer',
        employer: 'OS! FOR CREATIVE PUSH',
        startDate: 'April 2014',
        endDate: 'May 2018',
        city: 'Phnom Penh',
        description: 'Experiences of creative design are interested. I can create my own idea and put it on the street. I also worked on some website designs and coding when the client requested.'
    },
    {
        jobTitle: 'Backend Developer',
        employer: 'RCI Cambodia',
        startDate: 'June 2018',
        endDate: 'September 2019',
        city: 'Phnom Penh',
        description: 'Worked as a team member at a large company in Romania. I have learned a lot of experiences with a remote job. I have been done with two kinds of projects, first is Salesforce Commerce Cloud Platform, it uses Demandware package. I am also have learned about JavaScript controllers, Digital Script, Pipeline, Sass, Business Management Tools, Administrator Tools, Demandware Structure like cartridges, Rest API, ISML template, Git tool, JIRA tool, and Bitbucket as well. Additionally, I also learned some Demandware modules such as Newsletter, Login, Product modules, Check out, and form. The second, I have learned about the Shopify framework, which works with an eCommerce site.'
    },
    {
        jobTitle: 'English Teacher',
        employer: 'Coconut School Cambodia',
        startDate: 'June 2015',
        endDate: 'August 2018',
        city: 'Phnom Penh',
        description: 'It is a volunteer job that I enjoy the most. It teaches me about life lessons a lot. Being a human, I should care about the people around me and also around the world as much as possible.  Why? because the world is our home. Should I protect my home? Yes, I should. Many people now destroy their homes by cut trees, throw rubbish away into the water, and kills some important animals. Why they do it? Because they don\'t have the knowledge, so I should spend my time to educate them as much as I can. "A big change needs smalls change."'
    },
    {
        jobTitle: 'Full-stack Developer',
        employer: 'Freelancer',
        startDate: 'September 2019',
        endDate: 'Present',
        city: 'Phnom Penh',
        description: 'Coding in JavaScript is my activity now. I am also doing on a mobile app project, which is a project that uses react-native to build. I am not a professional with react-native but I just want to challenge myself.'
    },
];

let educations = [{
        school: 'Bunrany Hun Sen Koh Choram',
        degree: 'Secondary School',
        startDate: 'October 2002',
        endDate: 'July 2005',
        city: 'Kandal',
        description: ''
    },
    {
        school: 'Hun Sen Khsach Kandal',
        degree: 'High School',
        startDate: 'October 2005',
        endDate: 'July 2008',
        city: 'Kandal',
        description: ''
    },
    {
        school: 'Cambodian Mekong University',
        degree: 'Bachelor of Computer Information Technology',
        startDate: 'November 2008',
        endDate: 'October 2012',
        city: 'Phnom Penh',
        description: 'Completed with a website design project, and a database management system project (Inventory). I have a great final project before graduating, and the name of this project is the Online Student Attendant Management System. I am a tutor at a Graphic Design class and Microsoft offices class.'
    }
];

let courses = [{
        institution: 'Paññāsāstra',
        name: 'General English as a Second Language',
        startDate: 'October 2012',
        endDate: 'July 2015'
    },
    {
        institution: 'Edniche English School',
        name: 'Guaranteed General English Program',
        startDate: 'September 2019',
        endDate: 'Present'
    },
    {
        institution: 'Udemy.com',
        name: 'Node.js',
        startDate: 'April 2019',
        endDate: 'Present'
    },
    {
        institution: 'Udemy.com',
        name: 'Modern Javascript',
        startDate: 'August 2019',
        endDate: 'Present'
    },
    {
        institution: 'Udemy.com',
        name: 'React Native with Firebase',
        startDate: 'October 2019',
        endDate: 'Present'
    },

];

let references = [{
        fullName: 'Ms. Anshu Saini',
        company: 'OSF Global Services',
        phone: '91 98114 65583',
        email: ''
    },
    {
        fullName: 'Mr. Rajnikant Patoliya',
        company: 'OSF Global Services',
        phone: '91 97250 30799',
        email: ''
    },
    {
        fullName: 'Mr. Lai Chhykun',
        company: 'RCI Cambodia',
        phone: '855 93 291 910',
        email: ''

    }
];

let details = {
    address: 'No. 338, Street 63 Sony, Khan Mean Chey, Phnom Penh, Cambodia',
    phone: '855 12487958',
    skype: 'socheat.y',
    email: 'socheaty68@gmail.com',
};

let hobits = ['Playing sports, Gaming, Watching TV show'];

let links = [{
        title: 'LinkedIn Profile',
        link: ['https://www.linkedin.com/in/yorn-socheat-04b50a42/']
    },
    {
        title: 'Github',
        link: ['https://github.com/yornsocheat']
    },
    {
        title: 'Personal Website',
        link: ['http://healthykh.com/']
    },
    {
        title: 'Practice with Nodejs',
        link: ['https://app-nhs.herokuapp.com/']
    }, {
        title: 'Website temptates I did',
        link: ['http://demo.healthykh.com/']
    },
    {
        title: 'CMS site I did',
        link: ['http://skyangkorair.com/system/']
    },
    {
        title: 'eCommerces site I did',
        link: ['http://www.meloxmelo.com/',
            'https://candybox.com.hk/',
            'https://www.kiehls.jp/',
            'https://www.yslbeautyus.com/',
            'https://www.armanibeauty.jp/',
        ]
    },
    {
        title: 'Wordpress site I did',
        link: ['http://www.os-fcp.com/',
            'http://www.manazasu.com/',
            'http://camupjobagency.com/',
            'http://kohandetecoresort.com/',
            'https://rciapac.online/',
        ]
    }
];

let skills = [{
        name: 'PHP',
        level: 100
    },
    {
        name: 'HTML & CSS',
        level: 75
    },
    {
        name: 'JavaScript',
        level: 75
    },
    {
        name: 'Node.js',
        level: 50
    },
    {
        name: 'MySQL',
        level: 75
    },
    {
        name: 'JIRA',
        level: 50
    },
    {
        name: 'Git',
        level: 75
    },
    {
        name: 'React Native',
        level: 50
    },
    {
        name: 'Bitbucket',
        level: 50
    },
    {
        name: 'WordPress',
        level: 75
    },
    {
        name: 'Laravel',
        level: 50
    },
    {
        name: 'Codeigniter',
        level: 75
    },
    {
        name: 'Bootstrap',
        level: 100
    },
    {
        name: 'Graphic Design',
        level: 100
    },
    {
        name: 'Salesforces',
        level: 50
    },
    {
        name: 'Linux Hosting',
        level: 50
    }
];

let languages = [{
        name: 'Khmer',
        level: 100
    },
    {
        name: 'English',
        level: 75
    }
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
_r.renderHobits(hobits, '#hobits');
