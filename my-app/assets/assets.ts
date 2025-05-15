import background_img from './background.jpg'
import nu_icon from './nu.png'
import moon_black_icon from './moon_icon.png'
import menu_white_icon from './menu-white.png'
import menu_black_icon from './menu-black.png'
import close_black_icon from './close-black.png'
import right_arrow_white_icon from './right-arrow-white.png'
import right_arrow_black_icon from './right-arrow-bold.png'
import download_black_icon from './download-icon.png'
import download_white_icon from './download_white.png'
import code_icon from './code-icon.png'
import code_icon_black from './code-icon-dark.png'
import edu_icon from './edu-icon.png'
import edu_icon_black from './edu-icon-dark.png'
import proj_icon from './project-icon.png'
import proj_icon_black from './project-icon-dark.png'
import vscode_icon from './vscode.png'
import firebase_icon from './firebase.png'
import git_icon from './git.png'
import photo_jpg from './wildcard.jpg'
import github_white_icon from './github-white-icon.png'
import github_black_icon from './github-logo.png'
import sun_icon from './sun_icon.png'
// import aws_proj_image from './aws-dark-icon.png'
// import kv_proj_image from './kv_cpp.png'

export const assets = {
    background_img,
    nu_icon,
    moon_black_icon,
    sun_icon,
    menu_black_icon,
    menu_white_icon,
    close_black_icon,
    right_arrow_white_icon,
    right_arrow_black_icon,
    download_black_icon,
    download_white_icon,
    code_icon,
    code_icon_black,
    edu_icon,
    edu_icon_black,
    proj_icon,
    proj_icon_black,
    vscode_icon,
    firebase_icon,
    git_icon,
    photo_jpg,
    github_black_icon,
    github_white_icon,
};

// export const workData = [
//     {
//         title: '',
//         description: '',
//         bgImage: '',
//     },
// ]


export const infoList = [
    {
      icon: assets.code_icon,
      iconDark: assets.code_icon_black,
      title: 'Skills',
      description: 'Java, Python, Javascript, C++, SQL, HTML, CSS'
    },
    {
      icon: assets.edu_icon,
      iconDark: assets.edu_icon_black,
      title: 'Education',
      description: [
        'M.S. in Computer Science, Northwestern University',
        // 'M.S. in CS, Agri & Bio Eng., University of Illinois, Urbana-Champaign (GPA: 3.97/4.00)',
        // 'B.Eng in Agriculture Engineering, Zhejiang University (GPA: 3.73/4.00)'
      ]
    },
    {
      icon: assets.proj_icon,
      iconDark: assets.proj_icon_black,
      title: 'Internships',
      description: [
        'Software Developer, Yuansuan Technology Company, June 2024 - Aug. 2024'
      ]
    },
    {
      icon: assets.proj_icon,
      iconDark: assets.proj_icon_black,
      title: 'Projects',
      description: 'High-Scale Software System on AWS Cloud, DevOps Course Project, Sept. 2024 - Dec.2024'
    },
    {
      icon: assets.proj_icon,
      iconDark: assets.proj_icon_black,
      title: 'Achievements ',
      description: [
        '3rd Place Winner, 2022 ASABE Student Robotics Challenge Advanced Division',
        // '2nd Place Winner, 2021 ASABE Student Robotics Challenge'
      ]
    }
  ];

export const toolsData = [
    assets.vscode_icon,
    assets.firebase_icon,
    assets.git_icon,
    
];

export const experienceData = [
  
  {
    bg_image: '/images/kv_cpp.png',
    title: 'KV storage based on skiplist',
    description: 'Developed the query logic...',
    // link: ''
  },
  {
    bg_image: '/images/aws-dark-icon.png',
    title: 'DevOps Course Project',
    description: 'High-Scale Software System on AWS Cloud...',
    // link: ''
  },
  {
    bg_image: '/images/kv_cpp.png',
    title: 'KV storage based on skiplist',
    description: 'Developed the query logic...',
    // link: ''
  }
];
  