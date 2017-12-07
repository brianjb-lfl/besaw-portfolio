'use strict';

const content = {

  bioText: 
    '<img id="bio-img" src="./img/besawb1708s.jpg">' +
    '<p>This is my bio text.  Some words are <strong>highlighted</strong> for emphasis.  Here I talk about things I like; my dogs, motorcycle, living in a warm climate, etc.</p>' +
    '<p>In this paragraph I talk about tech stuff like <strong>node</strong> and <strong>react</strong>.  Maybe I mention how I\'ve always loved programming and learning new languages like <strong>python</strong>.</p>',

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