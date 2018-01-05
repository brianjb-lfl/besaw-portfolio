'use strict';
/*global STORE content $ */


function render() {

  let targetPage = 'home';

  // hide all content divs
  $('.content-div').removeClass('flex');
  $('.content-div').addClass('hidden');
  // call f to check for url params and get location target
  let locationObj = parseUrlParams();
  targetPage = locationObj.page;
  // uncover target content div
  $(`.${targetPage}-section`).removeClass('hidden');
  $(`.${targetPage}-section`).addClass('flex');

  // render target div
  // default is 'home' - no programatic render required
  switch(targetPage) {
    case 'about':
      $('.about-section').html(getAboutCode());
      break;

    case 'projects':
      $('.projects-section').html(getProjectsCode());
      break;

    case 'pdetail':
      $('.pdetail-section').html(getProjDetailCode());
      break;
  }


}

// *** PARSE URL PARAMETERS
function parseUrlParams() {
  // create obj with default page
  let urlParamObj = {
    page: 'home',
    projId: content.projectDetails.default
  };

  if(location.search) {
    // split into array of params
    location.search.slice(1).split('&').forEach( param => {
      // use '=' to split param into key and value - add to obj
      urlParamObj[param.split('=')[0]] = param.split('=')[1];
    });
  }

  return urlParamObj;
}

// *** ABOUT CODE BUILDER ***
function getAboutCode() {

  // build contact li's
  let contactStr = content.contactInfo.map( contactItem => {
    return(
      `
        <li>
          <a href=${contactItem.href}>
            <span class=${contactItem.faCode}></span>
            <span class="about-contact-list-text">${contactItem.text}</span>
          </a>
        </li>
      `
    );
  }).join('');

  // build body code for about section
  let aboutStr = 
    `
      <h1>About me</h1>
      <div class="about-body about-sub-section">
          <img class="about-img" src="${content.aboutContent.imgSrc}"/>
          ${content.aboutContent.aboutText}
      </div>
      <div class="about-contact about-sub-section">
        <ul>
          ${contactStr}
        </ul>
      </div>
    `;

  return aboutStr;
}

// *** PROJECTS CODE BUILDER ***
function getProjectsCode() {
  let projectsListStr = content.projectSumms.map( project => {
    return(
      `
        <div class="project-item" id="${project.id}">
          <h3>${project.title}</h3>
          <img class="project-thumbnail" src="${project.img}"/>
          ${project.text}
        </div>
      `
    );
  }).join('');

  let projectsStr = 
    `
      <h1>Some of my work</h1>
      ${projectsListStr}
    `;

  return projectsStr;
}
