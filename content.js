'use strict';

const content = {

  bioText: 
    '<img id="bio-img" src="./img/besawb1708s.jpg">' +
    '<p>Programming is not my vocation – <strong>it’s my passion.</strong>  I love to code cool stuff and see it come to life on the screen.  After over two decades of coding, I’ve got <strong>a lot of tools</strong> in my belt, but Javascript and Python are my favorites. I also enjoy working with databases, as a result of my <strong>finance and accounting background</strong>.</p>' +
    '<p>When not at a keyboard, I may be found cruising the back roads on my motorcycle, strolling with my dogs, or finding some other way to enjoy the beautiful central Florida climate.</p>',

  projectSumms:
    [
      {
        id: 1,
        title: 'Buzz-Kill',
        img: './img/buzz-kill-main.png',
        text: 'Buzz-Kill helps establishments that serve alcohol provide for their patrons\' safety and guest experience by maintaining a real-time estimate of each patron\'s bac in a user-friendly format.'
      },
      {
        id: 2,
        title: 'Police Code Trainer',
        img: './img/pcode_question.png',
        text: 'This app uses spaced repetition to help police and other emergency personnel to more efficiently learn the communications that are vital to their daily operations.'
      },
      {
        id: 3,
        title: 'Election Manager',
        img: './img/EM_1.png',
        text: 'This app provides tools for election managers to set up elections and a place for voters to vote.'
      }
    ],
  
  projectDetails:
    {
      1: {
        title: 'Buzz-Kill',
        img: './img/buzz-kill-main.png',
        summary: 'Buzz-Kill helps alcohol-serving establishments provide for their patrons\' safety and guest experience by keeping a running estimate of each guest\'s bac.',
        links: [
          {label: 'demo', link: 'https://www.yahoo.com'},
          {label: 'live', link: 'https://www.yahoo.com'}
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
      
      2: {
        title: 'Police Code Trainer',
        img: './img/pcode_question.png',
        summary: 'This app uses spaced repetition to help police and other emergency personnel to more efficiently learn the communications that are vital to their daily operations.',
        links: [
          {label: 'demo', link: 'https://www.yahoo.com'},
          {label: 'live', link: 'https://www.yahoo.com'}
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

      3: {
        title: 'Election Manager',
        img: "./img/EM_1.png",
        summary: 'This app provides tools for election managers to set up elections and a place for voters to vote.',
        links: [
          {label: 'demo', link: 'https://www.yahoo.com'},
          {label: 'live', link: 'https://www.yahoo.com'}
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

    }


};