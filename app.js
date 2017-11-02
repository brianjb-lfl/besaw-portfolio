'use strict';
/*global render $  */

let STORE = {
  appState: 'front',      // front, bio, projects, tech, contact
  navItems: 'hidden',     // hidden, visible
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
    if ($(window).width() < 576) {
      STORE.navItems = 'hidden';
    }
    render();
  });
}

function handleBurgerClick() {
  $('#hamburger').on('click', () => {
    console.log(STORE.navItems);
    STORE.navItems === 'hidden' ? STORE.navItems = 'visible' : STORE.navItems = 'hidden';
    render();
  });
}

function handlePortf() {
  handleLogoClick();
  handleNavClick();
  handleBurgerClick();
  render();
}

$(handlePortf);