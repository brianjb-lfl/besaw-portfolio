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
  $(`li:contains("${STORE.appState}")`).addClass('nav-selected');

  $('.panel').addClass('hidden');
  $(`#${panelSelector[STORE.appState]}`).removeClass('hidden');

}

