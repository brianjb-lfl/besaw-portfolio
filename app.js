'use strict';
/*global render $  */

//const baseLocationStr = 'file:///C:/Users/bjbes/Documents/PROJECTS/besaw-portfolio/index.html';
const baseLocationStr = 'http://brianjb.com';


function handleLogoClick() {
  $('.bb').on('click', e => {
    e.preventDefault();
    location.assign(baseLocationStr);
    render();
  });
}

function handleNavItemsClick() {
  $('.nav-items').on('click', 'a', e => {
    e.preventDefault();
    if($(`.${e.target.text}-section`).hasClass('hidden')) {
      location.assign(baseLocationStr + '?page=' + e.target.text);
    }
    else {
      location.assign(baseLocationStr);
    }
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