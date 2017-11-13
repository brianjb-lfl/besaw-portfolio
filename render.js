'use strict';
/*global STORE content $ */


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

  if(STORE.appState === 'bio'){
    $('#bio-body').html(content.bioText);
  }

  if (STORE.navItems === 'hidden') {
    $('#nav-items').addClass('hidden');
    $('#nav-items').removeClass('flex');
  }
  else {
    $('#nav-items').addClass('flex');
    $('#nav-items').removeClass('hidden');   
  }

  // <img id="bio-img" src="./img/besawb1708s.jpg">
  // <p>This is my bio text.  Some words are <strong>highlighted</strong> for emphasis.  Here I talk about things I like; my dogs, motorcycle, living in a warm climate, etc.</p>
  // <p>In this paragraph I talk about tech stuff like <strong>node</strong> and <strong>react</strong>.  Maybe I mention how I've always loved programming and learning new languages like <strong>python</strong>.</p>

}

