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

  $('.panel').addClass('hidden');
  if(!STORE.projDetail){
    $(`#${panelSelector[STORE.appState]}`).removeClass('hidden');
  }
  else {
    $(`#projdet-panel`).removeClass('hidden');
  }

  if (STORE.navItems === 'hidden') {
    $('#nav-items').addClass('hidden');
    $('#nav-items').removeClass('flex');
  }
  else {
    $('#nav-items').addClass('flex');
    $('#nav-items').removeClass('hidden');   
  }


}

