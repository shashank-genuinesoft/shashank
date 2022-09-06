// Website related settings
const settings = {
    isSplash: true, // Change this to true if you want to use the splash screen.
    useCustomCursor: true, // Change this to false if you want the good'ol cursor
    googleTrackingID: "UA-174238252-2",
  };
  
  //Home Page
  const greeting = {
    title: "Hello .",
    hand:"👋",
    title2: "Shashank",
    logo_name: "Shashank .",
    nickname: "Bhanu",
    full_name: "Shashank Pathe",
    subTitle:
      "Full Stack Developer",
    resumeLink:
      "https://docs.google.com/document/d/1A_jWRG74Rst427tg1izLa6vRXclS9_9F856jWJPJlDY/edit?usp=sharing",
    mail: "mailto:hkanani191@gmail.com",
  };

  const certifications = {
    certifications: [
      {
        title: "M0001: MongoDB Basics",
        subtitle: "MongoDB University",
        logo_path: "mongo.png",
        certificate_link:
          "https://drive.google.com/file/d/12se6bMep48WXA1PlizTBAgCnW0GXM6wq/view?usp=sharing",
        alt_name: "MongoDB University",
        // color_code: "#2AAFED",
        color_code: "#47A048",
      },
      {
        title: "Hackathon",
        subtitle: "Hack The Mountains",
        logo_path: "hackathon1.svg",
        certificate_link:
          "https://drive.google.com/file/d/1Y-HT1flWDfeyfnfqVr3ubNgGIcnuUEYt/view?usp=sharing",
        alt_name: "hackathon",
        color_code: "#E2405F",
      },
      {
        title: "A300: Atlas Security",
        subtitle: "MongoDB University",
        logo_path: "mongo.png",
        certificate_link:
          "https://drive.google.com/file/d/12u_tkvhgB-K2TIm-RDdJOwYbQ9ccqiqA/view?usp=sharing",
        alt_name: "MongoDB University",
        // color_code: "#F6B808",
        color_code: "#47A048",
      },
      {
        title: "Cyber Security & Cyber Forensics",
        subtitle: "Workshop at IIT Bombay",
        logo_path: "iit.png",
        certificate_link:
          "https://drive.google.com/file/d/12uAdjQC5LfrB1ODdxqIY181ugyyQhl-I/view?usp=sharing",
        alt_name: "Workshop",
        color_code: "#2AAFED",
      },
      {
        title: "MLH Local Hack Day: Build",
        subtitle: "Major League Hacking",
        logo_path: "mlh-logo.svg",
        certificate_link:
          "https://drive.google.com/file/d/1ws7g2Oepu76vDFir6SvR_emFAMSkB2ZQ/view?usp=sharing",
        alt_name: "Google",
        color_code: "#fe0037",
      },
      {
        title: "Hack20",
        subtitle: "Flutter International Hackathon",
        logo_path: "flutter.png",
        certificate_link:
          "https://drive.google.com/file/d/1JTd8pVlHbP0RVQYtfa4OZgJYGfdiCwM6/view?usp=sharing",
        alt_name: "Flutter International Hackathon",
        color_code: "#2AAFED",
      },
      {
        title: "Postman Student Expert",
        subtitle: "Postman",
        logo_path: "postman.png",
        certificate_link:
          "https://badgr.com/public/assertions/h2qevHs4SlyoHErJQ0mn2g",
        alt_name: "Postman",
        // color_code: "#f36c3d",
        color_code: "#fffbf3",
      },
      // color_code: "#8C151599",
      // color_code: "#7A7A7A",
      // color_code: "#0C9D5899",
      // color_code: "#C5E2EE",
      // color_code: "#ffc475",
      // color_code: "#g",
      // color_code: "#ffbfae",
      // color_code: "#fffbf3",
      // color_code: "#b190b0",
    ],
  };
  const projects = {
    data: [
      {
        id: "0",
        name: "AutomateInstaPyBot",
        url: "https://github.com/harikanani/AutomateInstaPyBot",
        description: "This is Instagram Bot. This will login to your Instagram account. Follow Users, Unfollow Users, Remove Profile Photo",
        languages: [
          {
            name: "Python",
            iconifyClass: "logos-python",
          },
        ],
      },
      {
        id: "1",
        name: "react-twitter-clone",
        url: "https://github.com/harikanani/react-twitter-clone",
        description:
          "A React Twitter Clone UI with basic functionality such as make a Tweet.Embedded Profile Tweets and Share on Twitter.",
        languages: [
          {
            name: "HTML5",
            iconifyClass: "vscode-icons:file-type-html",
          },
          {
            name: "CSS3",
            iconifyClass: "vscode-icons:file-type-css",
          },
          {
            name: "React",
            iconifyClass: "logos-react",
          },
          {
            name: "Firebase",
            iconifyClass: "logos-firebase",
          },
        ],
      },
      {
        id: "2",
        name: "node-blockchain",
        url: "https://github.com/harikanani/node-blockchain",
        description:
          "A simple blockchain and cryptocurrency wallet implemented in Node.js and TypeScript (for learning purposes).",
        languages: [
          {
            name: "NodeJS",
            iconifyClass: "logos-nodejs",
          },
          {
            name: "TypeScript",
            iconifyClass: "logos-typescript",
          },
        ],
      },
      {
        id: "3",
        name: "top-crypto-gainers",
        url: "https://github.com/harikanani/top-crypto-gainers",
        description:
          "A top high price changed crypto coins wring 24 hoursA sound-classifier webapp made with ReactJS + TensorflowJS.",
        languages: [
          {
            name: "HTML5",
            iconifyClass: "vscode-icons:file-type-html",
          },
          {
            name: "CSS3",
            iconifyClass: "vscode-icons:file-type-css",
          },
          {
            name: "JavaScript",
            iconifyClass: "logos-javascript",
          },
          {
            name: "ReactJS",
            iconifyClass: "logos-react",
          },
        ],
      },
      {
        id: "4",
        name: "personal-portfolio",
        url: "https://github.com/harikanani/personal-portfolio",
        description:
          "A simple command line interface based quiz app to know more about me :).",
        languages: [
          {
            name: "JavaScript",
            iconifyClass: "logos-javascript",
          },
          {
            name: "NodeJS",
            iconifyClass: "logos-nodejs",
          },
        ],
      },
      {
        id: "3",
        name: "node_express_crud_api_starter",
        url: "https://github.com/harikanani/node_express_crud_api_starter",
        description:
          "Simple NodeJS Express CRUD Operations API starter.",
        languages: [
          {
            name: "NodeJS",
            iconifyClass: "logos-nodejs",
          },
        ],
      },
      {
        id: "4",
        name: "node-web-scrapper",
        url: "https://github.com/harikanani/node-web-scrapper",
        description:
          "A Simple web scrapper that scrap the information of amazon products such as price.It also scrap Wikipedia Data such as birthdate.",
        languages: [
          {
            name: "HTML5",
            iconifyClass: "vscode-icons:file-type-html",
          },
          {
            name: "CSS3",
            iconifyClass: "vscode-icons:file-type-css",
          },
          {
            name: "NodeJs",
            iconifyClass: "logos-nodejs",
          },
        ],
      },
      {
        id: "5",
        name: "harikanani.github.io",
        url: "https://github.com/harikanani/harikanani.github.io",
        description:
          "A Personal Portfolio Website that showcases my work and experience. which is hosted on Github Pages.",
        languages: [
          {
            name: "HTML5",
            iconifyClass: "vscode-icons:file-type-html",
          },
          {
            name: "CSS3",
            iconifyClass: "vscode-icons:file-type-css",
          },
          {
            name: "JavaScript",
            iconifyClass: "logos-javascript",
          },
          {
            name: "SCSS",
            iconifyClass: "vscode-icons:file-type-scss2",
          },
        ],
      },
      {
        id: "6",
        name: "Automate Attendace",
        url: "https://github.com/harikanani/Node_Python",
        description:
          "Automation of Online Attendance using node js and python",
        languages: [
          {
            name: "JavaScript",
            iconifyClass: "logos-javascript",
          },
          {
            name: "Python",
            iconifyClass: "logos-python",
          },
        ],
      },
      {
        id: "7",
        name: "Automate Discord Bot",
        url: "https://github.com/harikanani/AutomateDiscordBot",
        description:
          "A Discord Bot to send Automatic messages to serer channel in regular time difference.",
        languages: [
          {
            name: "Python",
            iconifyClass: "logos-python",
          },
          {
            name: "Python Selenium",
            iconifyClass: "logos-selenium",
          },
          {
            name: "Chromium Browser",
            iconifyClass: "openmoji-chromium",
          },
        ],
      },
      {
        id: "8",
        name: "Flask Blog",
        url: "https://github.com/harikanani/flask_blog",
        description:
          "A Simple Blog Web Application made using Flask Framework",
        languages: [
          {
            name: "Python",
            iconifyClass: "logos-python",
          },
          {
            name: "Flask",
            iconifyClass: "cib-flask",
          },
          {
            name: "HTML5",
            iconifyClass: "vscode-icons:file-type-html",
          },
          {
            name: "CSS3",
            iconifyClass: "vscode-icons:file-type-css",
          },
        ],
      },
      {
        id: "9",
        name: "Netflix top series",
        url: "https://github.com/harikanani/netflix-top-series",
        description:
          "List of Top Netflix Series which is deployed to vercel.",
        languages: [
          {
            name: "JavaScript",
            iconifyClass: "logos-javascript",
          },
          {
            name: "ReactJS",
            iconifyClass: "logos-react",
          },
          {
            name: "HTML5",
            iconifyClass: "logos-html-5",
          },
          {
            name: "CSS3",
            iconifyClass: "logos-css-3",
          },
        ],
      },
      {
        id: "10",
        name: "COVID-19 Tracker",
        url: "https://github.com/harikanani/Covid19TrackerReact",
        description: "Simple Covid-19 Tracker made using React and deployed to Vercel.",
        languages: [
          {
            name: "JavaScript",
            iconifyClass: "logos-javascript",
          },
          {
            name: "ReactJS",
            iconifyClass: "logos-react",
          },
          {
            name: "HTML5",
            iconifyClass: "logos-html-5",
          },
          {
            name: "CSS3",
            iconifyClass: "logos-css-3",
          },
        ],
      },
      {
        id: "11",
        name: "Food Order Static Website",
        url: "https://github.com/harikanani/food-order-website",
        description: "A simple static website related to food restaurants service. this is reasponsive as well.",
        languages: [
          {
            name: "HTML5",
            iconifyClass: "logos-html-5",
          },
          {
            name: "CSS3",
            iconifyClass: "logos-css-3",
          },
          {
            name: "JavaScript",
            iconifyClass: "logos-javascript",
          },
          {
            name: "PHP",
            iconifyClass: "logos-php",
          },
        ],
      },
      {
        id: "12",
        name: "NFT Launchpad",
        url: "https://deliquescent-cents.000webhostapp.com/",
        description: "NFT Launchpad crypto site portfolio",
        languages: [
          {
            name: "HTML5",
            iconifyClass: "logos-html-5",
          },
          {
            name: "CSS3",
            iconifyClass: "logos-css-3",
          },
          {
            name: "JavaScript",
            iconifyClass: "logos-javascript",
          },
          {
            name: "ReactJS",
            iconifyClass: "logos-react",
          },
        ],
      },
    ],
  };

  export {
    settings,
    greeting,
    certifications,
    projects
  
  };