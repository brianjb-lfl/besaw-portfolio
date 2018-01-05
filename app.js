'use strict';
/*global render $  */

let STORE = {
  appState: 'front',      // front, bio, projects, tech, contact, pdetail
  projDetail: null,       // null or projectid
  navItems: 'hidden',     // hidden, visible
  narrowCutoff: 576,      // pixel width cutoff for narrow screen
};

function handleLogoClick() {
  $('.bb').on('click', e => {
    e.preventDefault();
    console.log('logo click ran');
    console.log(location.search);
    location.assign("file:///C:/Users/bjbes/Documents/PROJECTS/besaw-portfolio/index.html?bbclicked");
    render();
  });
}

function handleNavItemsClick() {
  $('.nav-items').on('click', 'a', e => {
    e.preventDefault();
    console.log(e.target.text);
    const locationStr = "file:///C:/Users/bjbes/Documents/PROJECTS/besaw-portfolio/index.html?page=" + e.target.text;
    location.assign(locationStr);
  });
}

function handlePortf() {
  handleLogoClick();
  handleNavItemsClick();
  render();
}

$(handlePortf);