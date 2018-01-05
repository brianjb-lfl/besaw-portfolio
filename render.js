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
      $('.about-section').html(getAboutCode());
      break;

    case 'projects':
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
        <div class="project-item">
          <h3>${project.title}</h3>
          <img class="project-thumbnail" id="${project.id}" src="${project.img}"/>
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

// *** PROJECT DETAIL BUILDER ***
function getProjDetailCode(inProjId) {
  const projData = content.projectDetails[inProjId];
  let projLinkStr = projData.links.map( link => {
    return(
      `
        <li>
          <span class="project-link"><a href="${link.link}">${link.label}</a></span>
        </li>
      `
    );
  }).join('');

  let projTechStr = projData.tech.map( techItem => {
    return(
      `
        <li>
          <span class="tech-list-item">${techItem}</span>
        </li>
      `
    );
  }).join('');

  let projectDetStr =
    `
      <h1>${projData.title}</h1>
      <img class="project-img" src="${projData.img}"/>
      <p><strong>Summary:  </strong>${projData.summary}</p>
      <span><strong>Links:  </strong></span>
      <ul>
        ${projLinkStr}
      </ul>
      <span><strong>Tech:  </strong></span>
      <ul>
        ${projTechStr}
      </ul>
    `;
  
  return projectDetStr;
}
