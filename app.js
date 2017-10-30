'use strict';
/*global render $ */

let STORE = {
  appState: 'front',      // front, bio, projects, tech, contact
};

function handleLogoClick() {
  $('.bb-logo').on('click', () => {
    console.log('logo click ran');
    STORE.appState = 'front';
    render();
  });
}

function handleNavClick() {
  $('#nav-list').on('click', 'a', e => {
    if(STORE.appState === e.target.text) {
      STORE.appState = 'front';
    }
    else {
      STORE.appState = e.target.text;
    }
    render();
  });
}

function handlePortf() {
  handleLogoClick();
  handleNavClick();
  render();
}

$(handlePortf);