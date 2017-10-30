'use strict';
/*global STORE $ */


function render() {

  const panelSelector = {
    front: 'front-panel',
    bio: 'bio-panel',
    projects: 'projects-panel',
    tech: 'tech-panel',
    contact: 'contact-panel',
  };

  $('.nav-link').removeClass('nav-selected');
  if(STORE.appState !== 'front') {
    $(`li:contains("${STORE.appState}")`).addClass('nav-selected');
  }

  console.log('running panel switch');
  $('.panel').addClass('hidden');
  $(`#${panelSelector[STORE.appState]}`).removeClass('hidden');

}

