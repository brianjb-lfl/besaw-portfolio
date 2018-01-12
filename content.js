'use strict';

const content = {

  contactInfo:
    [
      {
        href: '"mailto:bjbesaw@outlook.com?Subject=Saw%20your%20profile" target="_top"',
        faCode: 'fa fa-envelope',
        text: 'bjbesaw@outlook.com'
      },
      {
        href: '"https://twitter.com/besaw_dev" target="_blank"',
        faCode: 'fa fa-twitter',
        text: '@besaw_dev'
      },
      {
        href: '"https://www.linkedin.com/in/brianbesaw/" target="_blank"',
        faCode: 'fa fa-linkedin',
        text: 'brianbesaw'
      },
      {
        href: '"https://github.com/brianjb-lfl" target="_blank"',
        faCode: 'fa fa-github',
        text: 'brianjb-lfl'
      }
    ],

  aboutContent: 
    { 
      imgSrc: './img/bb_2018_01_760.jpg',
      aboutText:
        '<p>Programming is not my vocation – <strong>it’s my passion.</strong>  I love to code cool stuff and see it come to life on the screen.  After over two decades of coding, I’ve got <strong>a lot of tools</strong> in my belt, but Javascript and Python are my favorites. I also enjoy working with databases, as a result of my <strong>finance and accounting background</strong>.</p>' +
        '<p>When not at a keyboard, I may be found cruising the back roads on my motorcycle, strolling with my dogs, or finding some other way to enjoy the beautiful central Florida climate.</p>'
    },

  projectSumms:
    [
      {
        id: 'buzz_kill',
        title: 'Buzz-Kill',
        img: './img/bk-main-450.png',
        text: '<p>Buzz-Kill helps establishments that serve alcohol provide for their patrons\' safety and guest experience by maintaining a real-time estimate of each patron\'s bac in a user-friendly format.</p>'
      },
      {
        id: 'p_code_tnr',
        title: 'Police Code Trainer',
        img: './img/pcode-450.png',
        text: '<p>This app uses spaced repetition to help police and other emergency personnel to more efficiently learn the communications that are vital to their daily operations.</p>'
      },
      {
        id: 'elect_mgr',
        title: 'Election Manager',
        img: './img/em-admin-450.png',
        text: '<p>This app provides tools for election managers to set up elections and a place for voters to vote.</p>'
      },
      {
        id: 'causeway',
        title: 'CauseWay',
        img: './img/cause-450.png',
        text: '<p>Causeway helps those who want to make difference put their talents and resources to use, and helps caring agencies find impactful contributions.</p>'
      }
    ],
  
  projectDetails:
    {
      default: 'buzz_kill',
      buzz_kill: {
        title: 'Buzz-Kill',
        img: './img/bk-main-750.png',
        summary: 'Buzz-Kill helps alcohol-serving establishments provide for their patrons\' safety and guest experience by keeping a running estimate of each guest\'s bac.',
        links: [
          {label: 'live', link: 'https://buzz-kill.herokuapp.com'},
          {label: 'client code', link: 'https://github.com/jackseabolt/buzz-kill-frontend'},
          {label: 'api', link: 'https://buzz-kill-back.herokuapp.com'},
          {label: 'api code', link: 'https://github.com/brianjb-lfl/buzz-kill-back'}
        ],
        tech: [
          'javaScript',
          'React-Redux',
          'node.js',
          'Express',
          'Mongodb',
          'HTML',
          'CSS'
        ]
      },
      
      p_code_tnr: {
        title: 'Police Code Trainer',
        img: './img/pcode-750.png',
        summary: 'This app uses spaced repetition to help police and other emergency personnel to more efficiently learn the communications that are vital to their daily operations.',
        links: [
          {label: 'live', link: 'http://lucid-davinci-0607dd.netlify.com'},
          {label: 'client code', link: 'https://github.com/brianjb-lfl/spacedRepetition-client'},
          {label: 'api', link: 'https://p-code-server.herokuapp.com'},
          {label: 'api code', link: 'https://github.com/brianjb-lfl/spacedrepetition-server'}
        ],
        tech: [
          'javaScript',
          'React-Redux',
          'node.js',
          'Express',
          'Mongodb',
          'Linked List data structure',
          'HTML',
          'CSS'
        ]
      },

      elect_mgr: {
        title: 'Election Manager',
        img: "./img/em-vote-750.png",
        summary: 'This app provides tools for election managers to set up elections and a place for voters to vote.',
        links: [
          {label: 'live', link: 'https://election-manager.herokuapp.com'},
          {label: 'code', link: 'https://github.com/brianjb-lfl/election-manager'}
        ],
        tech: [
          'javaScript',
          'jQuery',
          'node.js',
          'Express',
          'Mongodb',
          'HTML',
          'CSS'
        ]
      },

      causeway: {
        title: 'CauseWay',
        img: "./img/cause-750.png",
        summary: 'CauseWay helps those who want to make difference put their talents and resources to use, and helps caring agencies find impactful contributions.' ,
        links: [
          {label: 'live', link: 'http://causeway.netlify.com/'},
          {label: 'client code', link: 'https://github.com/brianjb-lfl/npmatch'},
          {label: 'api', link: 'https://dry-escarpment-60455.herokuapp.com'},
          {label: 'api code', link: 'https://github.com/brianjb-lfl/npm-server'}
        ],
        tech: [
          'javaScript',
          'React-Redux',
          'node.js',
          'Express',
          'Postgresql',
          'Knex',
          'HTML',
          'CSS'
        ]
      },

    }
};
