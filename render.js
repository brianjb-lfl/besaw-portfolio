'use strict';
/*global STORE content $ */


function render() {

  let targetPage = 'home';

  // hide all content divs
  $('.content-div').removeClass('flex');
  $('.content-div').addClass('hidden');
  // call sub to check for url params and get location target
  let locationObj = parseUrlParams();
  targetPage = locationObj.page;
  // uncover target content div
  $(`.${targetPage}-section`).removeClass('hidden');
  $(`.${targetPage}-section`).addClass('flex');

  // render target div
  // default is 'home' - no programatic render required
  switch(targetPage) {
    case 'about':
      $('.about-link').addClass('selected');
      $('.about-section').html(getAboutCode());
      break;

    case 'projects':
      $('.projects-link').addClass('selected');
      $('.projects-section').html(getProjectsCode());
      break;

    case 'pdetail':
      $('.pdetail-section').html(getProjDetailCode(locationObj.proj_id));
      break;
  }

}

// *** PARSE URL PARAMETERS
function parseUrlParams() {
  // create obj with default page
  let urlParamObj = {
    page: 'home',
    proj_id: content.projectDetails.default
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
            <span class="${contactItem.faCode}"></span>
            <span class="about-contact-list-text">${contactItem.text}</span>
          </a>
        </li>
      `
    );
  }).join('');

  // build body code for about section
  let aboutStr = 
    `
      <h2>About me</h2>
      <div class="about-content">
        <div class="about-body about-sub-section">
            <img class="about-img" src="${content.aboutContent.imgSrc}"/>
            ${content.aboutContent.aboutText}
        </div>
        <div class="about-contact about-sub-section">
          <ul>
            ${contactStr}
          </ul>
        </div>
      </div>
    `;

  return aboutStr;
}

// *** PROJECTS CODE BUILDER ***
function getProjectsCode() {
  let projectsListStr = content.projectSumms.map( project => {
    return(
      `
        <div class="project-item">
          <h3>${project.title}</h3>
          <a href="">
            <img class="project-thumbnail" id="${project.id}" src="${project.img}"/>
          </a>
          ${project.text}
        </div>
      `
    );
  }).join('');

  let projectsStr = 
    `
      <h2>Some of my work</h2>
      ${projectsListStr}
    `;

  return projectsStr;
}

// *** PROJECT DETAIL BUILDER ***
function getProjDetailCode(inProjId) {
  const projData = content.projectDetails[inProjId];
  let projLinkStr = projData.links.map( link => {
    return(
      `
        <li>
          <span class="project-link">
            <a href="${link.link}" target="_blank">${link.label}</a>
          </span>
        </li>
      `
    );
  }).join('');

  let projTechStr = projData.tech.map( techItem => {
    return(
      `
          <span class="tech-list-item">${techItem}</span>
      `
    );
  }).join('');

  let projectDetStr =
    `
      <h2>${projData.title}</h2>
      <div class="pd-image-box pd-box">
        <img class="project-img" src="${projData.img}"/>
      </div>
      <div class="pd-summary-box pd-box"
        <p>${projData.summary}</p>
        <ul>
          ${projLinkStr}
        </ul>
      </div>
      <div class="pd-tech-box pd-box">
        <span><strong>Tech:  </strong></span>
        <ul>
          ${projTechStr}
        </ul>
      </div>
    `;
  
  return projectDetStr;
}
