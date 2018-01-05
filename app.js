'use strict';
/*global render $  */

function handleLogoClick() {
  $('.bb').on('click', e => {
    e.preventDefault();
    location.assign('file:///C:/Users/bjbes/Documents/PROJECTS/besaw-portfolio/index.html');
    render();
  });
}

function handleNavItemsClick() {
  $('.nav-items').on('click', 'a', e => {
    e.preventDefault();
    const locationStr = 
      'file:///C:/Users/bjbes/Documents/PROJECTS/besaw-portfolio/index.html?page=' + e.target.text;
    location.assign(locationStr);
  });
}

function handleProjClick() {
  $('.projects-section').on('click', 'img', e => {
    e.preventDefault();
    const locationStr = 
      'file:///C:/Users/bjbes/Documents/PROJECTS/besaw-portfolio/index.html?page=pdetail&proj_id=' + $(e.target).attr('id');
    location.assign(locationStr);
  });
}

function handlePortf() {
  handleLogoClick();
  handleNavItemsClick();
  handleProjClick();
  render();
}

$(handlePortf);