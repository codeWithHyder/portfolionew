// Open mobile popup menu
function displayPopUp(){
 const pop_up_menu=document.querySelector("#popup-menu-id");
 const bodyTag=document.querySelector('body');
 pop_up_menu.style.display="block";
 pop_up_menu.style.right=0;
 
}

// close mobile popup menu
function closePopUp(){
  const pop_up_menu=document.querySelector("#popup-menu-id");
  pop_up_menu.style.right='-23em';
  pop_up_menu.style.display="none";
 }

//popup window will go here for project details
//call to all sections of portfolio
let headerSection=document.querySelector("#header-section");
let heroSection=document.querySelector("#hero-section");
let workSection=document.querySelector("#my-works");
let aboutMeSection=document.querySelector("#about-me");
let contactFormSection=document.querySelector("#contact-me");
let footerSection=document.querySelector("#footer-id");

//call to seeproject buttons on each card in work section
const cardButtonsArray=[
  document.querySelector("#seeProject-1"),
  document.querySelector("#seeProject-2"),
  document.querySelector("#seeProject-3"),
  document.querySelector("#seeProject-4"),
  document.querySelector("#seeProject-5"),
  document.querySelector("#seeProject-6"),
  document.querySelector("#seeProject-7"),

];

//project iformation goes here as an array of objects
const projectInfo=[
  {
    prName: 'Multi Post Stories',
    prDesc: 'Keeping track of hundreds of components website',
    techList: ['HTML', 'Bootstrap', 'Ruby on Rails'],
    backgroundImg: './images/Snapshoot Portfolio.png',
    pg: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.',
    buttonLive: 'See Live',
    liveLink: 'https://codewithhyder.github.io/portfolionew/',
    buttonSource: 'See Source',
    sourceLink: 'https://github.com/codeWithHyder/portfolionew'

  },

  {
    prName: 'Profesional Art Printing Data',
    prDesc: 'Profesional Art Printing Data More',
    techList: ['HTML', 'Javascript', 'Ruby on Rails'],
    backgroundImg: './images/sm-pr-professional-art1.jfif',
    pg:'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.',
    buttonLive: 'See Live',
    liveLink: 'https://codewithhyder.github.io/portfolionew/',
    buttonSource: 'See Source',
    sourceLink: 'https://github.com/codeWithHyder/portfolionew'

  },

  {
    prName: 'Profesional Art Printing Data',
    prDesc: 'Data Dashboard Health care',
    techList: ['HTML', 'Bootstrap', 'React'],
    backgroundImg: './images/sm-pr-professional-art2.webp',
    pg:'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.',
    buttonLive: 'See Live',
    liveLink: 'https://codewithhyder.github.io/portfolionew/',
    buttonSource: 'See Source',
    sourceLink: 'https://github.com/codeWithHyder/portfolionew'

  },

  {
    prName: 'Profesional Art Printing Data',
    prDesc: 'portfolio Website',
    techList: ['HTML', 'CSS', 'Ruby on Rails'],
    backgroundImg: './images/sm-pr-portfolio.png',
    pg:'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.',
    buttonLive: 'See Live',
    liveLink: 'https://codewithhyder.github.io/portfolionew/',
    buttonSource: 'See Source',
    sourceLink: 'https://github.com/codeWithHyder/portfolionew'

  },

  {
    prName: 'YouTube Clone',
    prDesc: 'To screen online videos on it like youtube',
    techList: ['HTML', 'CSS', 'Javascript'],
    backgroundImg: './images/sm-pr-youtubeclone.png',
    pg:'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.',
    buttonLive: 'See Live',
    liveLink: 'https://codewithhyder.github.io/cloneyoutube/',
    buttonSource: 'See Source',
    sourceLink: 'https://github.com/codeWithHyder/cloneyoutube'

  },

  {
    prName: 'SignIn and signUp Demo',
    prDesc: 'The site gives you knowhow ,how to put sign and sign section as a popup in a website',
    techList: ['HTML', 'CSS', 'Javascript'],
    backgroundImg: './images/sm-pr-login1.jfif',
    pg:'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.',
    buttonLive: 'See Live',
    liveLink: 'https://codewithhyder.github.io/logindemo/',
    buttonSource: 'See Source',
    sourceLink: 'https://github.com/codeWithHyder/logindemo'

  },

  {
    prName: 'Birth Day Reminder',
    prDesc: 'Keeping track of hundreds of components website',
    techList: ['HTML', 'CSS', 'React'],
    backgroundImg: './images/sm-pr-birthday-reminder.png',
    pg:'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.',
    buttonLive: 'See Live',
    liveLink: 'https://codewithhyder.github.io/bdayreminder1/',
    buttonSource: 'See Source',
    sourceLink: 'https://github.com/codeWithHyder/bdayreminder1'

  },

];

//link see project buttons to project info array respectively

cardButtonsArray.forEach((buttonItem, index)=>{
  const items=projectInfo[index];
  //start popup window
  buttonItem.addEventListener('click',()=>{
    
  //blur the website background
  headerSection.classList.toggle('blur');
  heroSection.classList.toggle('blur');
  workSection.classList.toggle('blur');
  aboutMeSection.classList.toggle('blur');
  contactFormSection.classList.toggle('blur');
  footerSection.classList.toggle('blur');

  //add markup for modal
  const bodyEle=document.querySelector('body');
  const section=document.createElement('section');
  bodyEle.appendChild(section);
  section.innerHTML=`<div class="modal" id="modal">
  
  <div class="modal-header" id="modal-header">
    <h2>${items.prName}</h2>
    
    <button type=""button" class="cross-button" id="cross-button">&times;</button>
  </div>
  <div class="tech-list" id="tech-list">
    <span class="tech-list1">${items.techList[0]}</span>
    <span class="tech-list1">${items.techList[1]}</span>
    <span class="tech-list1">${items.techList[2]}</span>
  </div>
  <div class="modal-body" id="modal-body">
  
      <div class="modalbody-left"><img src="${items.backgroundImg}" alt='featureimg'></div>
      <div class="modalbody-right">
        <h3>${items.pg}</h3> 
         
          <div class="modal-source-live">
            <a href="${items.liveLink}"><button type="button" class="livebtn">See Live <img src="./images/live-icon.png"></button></a>
            <a href="${items.sourceLink}"><button type="button" class="sourcebtn">See Source <img src="./images/git-icon.png"></button></a>
          </div>
      </div>
  </div>
</div>`;

//close popup window
  const crossButton = document.querySelector('.cross-button');
  crossButton.addEventListener('click', () => {
    const modalContainer = document.querySelector('.modal');
    modalContainer.classList.toggle('modal-close');
    headerSection.classList.remove('blur');
    heroSection.classList.remove('blur');
    workSection.classList.remove('blur');
    aboutMeSection.classList.remove('blur');
    contactFormSection.classList.remove('blur');
    footerSection.classList.remove('blur');
    const modalWindow = document.querySelector('body');
    modalWindow.removeChild(modalWindow.lastElementChild);
  });
});
});


