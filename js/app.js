/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
 */

/**
 * Define Global Variables
 *
 */
const nav = document.getElementById('navbar__list');
const body = document.querySelector('body');
const section1 = document.getElementById('section1');
const section2 = document.getElementById('section2');
const section3 = document.getElementById('section3');

/**
 * End Global Variables
 * Start Helper Functions
 *
 */
function addActiveClass(item) {
  nav.querySelectorAll('li').forEach((i) => {
    i.setAttribute('class', '');
  });

  item.setAttribute('class', 'active');
}

function createHomeItem() {
  const listItem = document.createElement('li');
  const itemLink = document.createElement('a');
  const itemLinkText = document.createTextNode('Home');

  listItem.setAttribute('id', 'home');
  listItem.setAttribute('class', 'active');
  itemLink.appendChild(itemLinkText);
  listItem.appendChild(itemLink);

  listItem.addEventListener('click', () => {
    addActiveClass(listItem);

    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  });

  return listItem;
}

function createListItem(num) {
  const listItem = document.createElement('li');
  const itemLink = document.createElement('a');
  const itemLinkText = document.createTextNode('Section ' + num);
  const sectionOffset = document.getElementById('section' + num).offsetTop;

  itemLink.appendChild(itemLinkText);
  listItem.appendChild(itemLink);

  listItem.addEventListener('click', () => {
    addActiveClass(listItem);
    window.scrollTo({
      top: sectionOffset,
      behavior: 'smooth',
    });
  });

  return listItem;
}
/**
 * End Helper Functions
 * Begin Main Functions
 *
 */

// build the nav
const homeItem = createHomeItem();
nav.appendChild(homeItem);

// Scroll to the top when reload
window.scrollTo({
  top: 0,
  behavior: 'smooth',
});

for (let i = 1; i < 5; i++) {
  const listItem = createListItem(i);
  nav.appendChild(listItem);
}

// Add class 'active' to section when near top of viewport
document.addEventListener('scroll', () => {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  if (scrollTop < section1.offsetTop + 20) {
    section1.setAttribute('class', 'your-active-class');
    section2.removeAttribute('class');
    section3.removeAttribute('class');
  } else if (section1.offsetTop + 20 < scrollTop && scrollTop < section2.offsetTop + 20) {
    section2.setAttribute('class', 'your-active-class');
    section1.removeAttribute('class');
    section3.removeAttribute('class');
  } else if (section2.offsetTop + 20 < scrollTop && scrollTop < section3.offsetTop) {
    section3.setAttribute('class', 'your-active-class');
    section1.removeAttribute('class');
    section2.removeAttribute('class');
  }
});
// Scroll to anchor ID using scrollTO event

/**
 * End Main Functions
 * Begin Events
 *
 */

// Build menu

// Scroll to section on link click

// Set sections as active
