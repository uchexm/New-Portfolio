// defining a dom shortcut function.
function dcl(t = 'div') {
  if (!t) {
    t = 'div';
  }
  return document.createElement(t);
}

// Navigation Menu
const mobileMenu = document.querySelector('.header_menu');
const navItems = document.querySelector('.mobile_nav_items');
const selectNavItems = document.querySelectorAll('#m_nav');
const crossIcon = document.querySelector('.toggle-cross');
let setMobileNav = false;

function toggleNav() {
  if (setMobileNav) {
    navItems.classList.remove('df');
    setMobileNav = false;
  } else {
    navItems.classList.add('df');
    setMobileNav = true;
  }
}

mobileMenu.addEventListener('click', toggleNav);
crossIcon.addEventListener('click', toggleNav);
selectNavItems.forEach((item) => {
  item.addEventListener('click', toggleNav);
});

// Project Section
// project data
const projectData = [
  {
    id: 'project1',
    title: 'My Catalogue',
    frame: ['Microverse', 'Full Stack Dev', 2023],
    primaryText: 'A console app to keep a record of different types of items that can be personalized',
    tags: ['Ruby', 'PostgreSQL'],
    imageUrl: './images/portfolio-1.PNG',
    projectDetails: "The Catalogue of My Things Console App is a versatile and user-friendly application built using the Ruby programming language. It allows users to efficiently organize and manage their personal inventory, making it an ideal tool for keeping track of various items such as books, electronics, clothing, and more Key Features include User-Friendly Interface, Item Management and Categorization.",
    liveLink: '#',
    sourceLink: 'https://github.com/uchexm/catalog_my_things_Ruby',
  },
  {
    id: 'project2',
    title: 'Lux-Car',
    frame: ['Microverse', 'FULL STACK DEV', 2023],
    primaryText: 'Lux-Car is a project built using Rails, postgresql and React as a web application that allows users to search for available cars, view car details, and make reservations.',
    tags: ['Ruby','Rails', 'PostgreSQL', 'Bootstrap', 'React'],
    imageUrl: './images/1687948956291.jpeg',
    projectDetails: "The Car Rental App is a modern and efficient web application built using the Rails framework on the backend, with a PostgreSQL database for data storage, and a React frontend for a seamless and interactive user experience. This comprehensive app allows users to easily browse, rent, and manage their car rentals, providing a convenient solution for both customers and car rental agencies. Key features include User Registration and Authentication, Car Inventory and Search and Booking Management.",
    liveLink: 'https://car-rental-frontend-pink.vercel.app/',
    sourceLink: 'https://github.com/Tobby8629/Car_Rental_Backend',
  },
  {
    id: 'project3',
    title: 'Space Travellers Hub',
    frame: ['Microverse', 'FULL STACK DEV', 2023],
    primaryText: 'Space Hub In this project, we build a web application using real live data from the SpaceX API. The website allows users to book rockets and join selected space missions.',
    tags: ['HTML', 'CSS', 'Javascript', 'React'],
    imageUrl: './images/spa.PNG',
    projectDetails: "The Space Traveler's Web App is a user-friendly and informative application designed for space enthusiasts and travelers. It provides a platform where users can explore various aspects of space travel, including destinations, missions, spacecraft, and more. The app aims to inspire, educate, and engage users with the wonders of space exploration.",
    liveLink: 'https://space-hub-bb9g.onrender.com/',
    sourceLink: 'https://github.com/uchexm/react-kanban',
  },
  {
    id: 'project4',
    title: 'CMS Book Store',
    frame: ['Microverse', 'FULL STACK DEV', 2023],
    primaryText: 'The CMS (Book Store Management System) is a comprehensive web application designed to streamline and manage all aspects of a book store. It provides a user-friendly interface for both customers and administrators, allowing for efficient book browsing, purchasing, and inventory management.',
    tags: ['HTML', 'CSS', 'Javascript', 'React'],
    imageUrl: 'https://user-images.githubusercontent.com/35267447/214837157-45734f12-5466-4238-9e15-d4b68eb66c9b.png',
    projectDetails: "The CMS (Book Store Management System) is a comprehensive web application designed to streamline and manage all aspects of a book store. It provides a user-friendly interface for both customers and administrators, allowing for efficient book browsing, purchasing, and inventory management. The CMS aims to enhance the book store experience by offering a range of features and functionalities.",
    liveLink: 'https://book-store-zejn.onrender.com/',
    sourceLink: 'https://github.com/uchexm/BookStore',
  },
]; // End of portfolio data

// Fetch single project from projectData
function fetchOnePoject(id) {
  const projects = projectData;

  let project;
  for (let i = 0; i < projectData.length; i += 1) {
    if (projects[i].id === id) {
      project = projects[i];
    }
  }

  if (project) {
    const article = dcl('article');
    article.classList.add('popup_article');
    article.setAttribute('id', project.id);

    const articleModal = dcl();
    articleModal.classList.add('article-modal');
    // Article title
    const workTitle = dcl('h2');
    workTitle.classList.add('work_title');
    workTitle.innerText = project.title;

    // cross-icon
    const crossIcon = dcl('span');
    crossIcon.setAttribute('id', 'article-close');
    crossIcon.innerHTML = '<img src="./images/cross-icon.png" alt="X"/>';

    // work_info
    const workInfo = dcl('ul');
    workInfo.classList.add('work_info');

    // work_info_item
    project.frame.forEach((f) => {
      const workInfoItem = dcl('li');
      workInfoItem.classList.add('w_info_item');
      workInfoItem.innerText = f;
      workInfo.appendChild(workInfoItem);
    });

    // image
    const articleImage = dcl();
    articleImage.classList.add('article-image');
    articleImage.innerHTML = `<img class='article-img' src='${project.imageUrl}' alt='${project.title}'/>`;

    // project block
    const projectBlock = dcl();
    projectBlock.classList.add('article-block');

    // left block
    const leftBlock = dcl();
    leftBlock.classList.add('left-block');
    // article_details_content
    const workDetailsContent = dcl('p');
    workDetailsContent.classList.add('work_details_content');
    workDetailsContent.innerText = project.projectDetails;
    leftBlock.append(workDetailsContent);

    // right block
    const rightBlock = dcl();
    rightBlock.classList.add('right-block');

    // work_cat
    const workCat = dcl('ul');
    workCat.classList.add('work_cats');
    project.tags.forEach((tag) => {
      const catLi = dcl('li');
      catLi.innerText = tag;
      workCat.appendChild(catLi);
    });

    // actions
    const actions = dcl();
    actions.classList.add('actions');

    // live link
    const liveLink = dcl('a');
    liveLink.classList.add('article-btn');
    liveLink.setAttribute('href', project.liveLink);
    liveLink.innerHTML = 'See Live <span class="btn-icon"><img src="./images/btn-live.png" alt= "Live"/></span>';

    // source link
    const sourceLink = dcl('a');
    sourceLink.classList.add('article-btn');
    sourceLink.setAttribute('href', project.sourceLink);
    sourceLink.innerHTML = 'See Live <span class="btn-icon"><img src="./images/btn-github.png" alt= "Live"/></span>';

    // appending link
    actions.append(liveLink, sourceLink);

    // appending rightBlock
    rightBlock.append(workCat, actions);

    // appending projectBlock
    projectBlock.append(leftBlock, rightBlock);

    // appending article-modal
    articleModal.append(crossIcon, workTitle, workInfo, articleImage, projectBlock);

    // appending article-modal to article
    article.append(articleModal);
    // end of if condition
    document.querySelector('main').append(article);

    // add event
    const closeModal = document.getElementById('article-close');
    closeModal.addEventListener('click', () => {
      document.querySelector('main').removeChild(article);
    });
  }
}

// this fetchAllProject function will add data in portfolio section dinamically
function fetchAllProject() {
  // select the portfolio
  const portfolio = document.getElementById('portfolio');
  projectData.forEach((project) => {
    // Dom element for card
    const card = dcl();
    card.classList.add('work_card');

    const workPreview = dcl();
    workPreview.classList.add('work_preview');
    workPreview.innerHTML = `<img class='project-img' src='${project.imageUrl}' alt='${project.title}'/>`;
    card.appendChild(workPreview);

    // work_details
    const workDetails = dcl();
    workDetails.classList.add('work_details');

    // work title
    const workTitle = dcl('h2');
    workTitle.classList.add('work_title');
    workTitle.innerText = project.title;
    workDetails.appendChild(workTitle);

    // work_info
    const workInfo = dcl('ul');
    workInfo.classList.add('work_info');

    // work_info_item
    project.frame.forEach((f) => {
      const workInfoItem = dcl('li');
      workInfoItem.classList.add('w_info_item');
      workInfoItem.innerText = f;
      workInfo.appendChild(workInfoItem);
    });
    workDetails.appendChild(workInfo);

    // work_details_content
    const workDetailsContent = dcl('p');
    workDetailsContent.classList.add('work_details_content');
    workDetailsContent.innerText = project.primaryText;
    workDetails.appendChild(workDetailsContent);

    // work_cat
    const workCat = dcl('ul');
    workCat.classList.add('work_cats');
    project.tags.forEach((tag) => {
      const catLi = dcl('li');
      catLi.innerText = tag;
      workCat.appendChild(catLi);
    });
    workDetails.appendChild(workCat);
    // action button
    const atnBrn = dcl('button');
    atnBrn.classList.add('atn_btn');
    atnBrn.innerText = 'See More';
    atnBrn.setAttribute('id', project.id);
    atnBrn.addEventListener('click', () => {
      fetchOnePoject(project.id);
    });
    workDetails.appendChild(atnBrn);

    card.appendChild(workDetails);
    portfolio.appendChild(card);
  });
}

// selecting input elements
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');

// Store formData in localStorage
function loadLocalStorage() {
  const formData = JSON.parse(window.localStorage.getItem('formData'));
  if (formData) {
    nameInput.value = formData.name;
    emailInput.value = formData.email;
    messageInput.value = formData.message;
  }
}


// OnChange function will store form data in localStorage
function onChange(e) {
  let formData = JSON.parse(localStorage.getItem('formData'));
  if (!formData) {
    formData = {};
  }
  // saving form data on localStorage
  const m = e.target.name;
  formData[m] = e.target.value;
  formData = JSON.stringify(formData);
  window.localStorage.setItem('formData', formData);
}

// Fire event on form input
nameInput.addEventListener('change', onChange);
emailInput.addEventListener('change', onChange);
messageInput.addEventListener('change', onChange);

// Load Data in dom on the fly
window.onload = () => {
  fetchAllProject();
  loadLocalStorage();
};

// Form Validation
function onSubmit(e) {
  const inputEmail = document.getElementById('email');
  const formInfo = document.getElementById('form-info');
  const email = inputEmail.value;

  // Check if email value is lowercase or not
  if (email !== email.toLowerCase()) {
    e.preventDefault();
    inputEmail.classList.add('invalid');
    formInfo.classList.add('error');
    formInfo.innerText = 'Error form is not sent! The Email should be in lower case!!';
  } else {
    inputEmail.classList.remove('invalid');
    formInfo.classList.remove('error');
  }
}
const contactForm = document.getElementById('contact-form');
contactForm.addEventListener('submit', onSubmit);

// Remove Error onchange from the form.
const inputEmail = document.getElementById('email');
const formInfo = document.getElementById('form-info');
inputEmail.addEventListener('change', () => {
  inputEmail.classList.remove('invalid');
  formInfo.classList.remove('error');
  formInfo.innerText = '';
}
);
