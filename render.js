'use strict';
/*global STORE content $ */


function render() {

  const panelSelector = {
    front: 'front-panel',
    bio: 'bio-panel',
    projects: 'projects-panel',
    tech: 'tech-panel',
    contact: 'contact-panel',
    pdetail: 'pdetail-panel'
  };

  // NAV
  
  $('.nav-link').removeClass('nav-selected');
  
  if(STORE.appState !== 'front') {
    $(`li:contains("${STORE.appState}")`).addClass('nav-selected');
  }

  if (STORE.navItems === 'hidden') {
    $('#nav-items').addClass('hidden');
    $('#nav-items').removeClass('flex');
  }
  else {
    $('#nav-items').addClass('flex');
    $('#nav-items').removeClass('hidden');   
  }

  // PANELS

  $('.panel').addClass('hidden');
  $(`#${panelSelector[STORE.appState]}`).removeClass('hidden');
  
  if(STORE.appState === 'bio'){
    $('#bio-body').html(content.bioText);
  }
  else if(STORE.appState === 'projects') {
    let pCode = content.projectSumms.map(getPCode);
    const pStr = pCode.join('');
    $('#projects-list').html(pStr);
  }
  else if(STORE.appState === 'pdetail') {
    //$('#projectD-body').html(getPBody());
    renderPBody(content.projectDetails[STORE.projDetail]);
  }

}

// helpers

function getPCode(pSumm) {
  return (
    `
      <div class="project-container">
        <div class="project-title proj-sel">
          ${pSumm.title}
        </div>
        <table>
          <tr>
            <td>
              <img class="project-ss proj-sel" id="${pSumm.id}" src="${pSumm.img}">
            </td>
            <td class="proj-text-cell">
              <div class="project-text">
                ${pSumm.text}
                <span class="p-more">more</span>
              </div>
            </td>
          </tr>
        </table>
      </div>
    `
  );
}

function renderPBody(pObj) {
  // project title
  $('#project-title').html(pObj.title);
  
  // project image(s)
  const pImgStr = `<img src="${pObj.img}"/>`
  $('#project-imgs').html(pImgStr);
  
  // project links
  let pLinkStr = pObj.links.map( item => 
    `<li>${item.label}: ${item.link}</li>`);
  pLinkStr = pLinkStr.join('');
  pLinkStr = '<ul>' + pLinkStr + '</ul>';
  $('#project-links').html(pLinkStr);

  // project desc
  $('#project-desc').html(pObj.summary);

  // project tech
  let pTechStr = pObj.tech.map( item => `<li>${item}</li>`);
  pTechStr = pTechStr.join('');
  pTechStr = '<ul>' + pTechStr + '</ul>';
  $('#project-tech').html(pTechStr);
};

