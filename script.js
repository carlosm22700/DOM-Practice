// Menu data structure
const menuLinks = [
    {text: 'about', href: '/about'},
    {text: 'catalog', href: '/catalog'},
    {text: 'orders', href: '/orders'},
    {text: 'account', href: '/account'},
  ];

//task 1.0

const mainEl = document.querySelector('main');

//task 1.1

mainEl.style.backgroundColor = 'var(--main-bg)';

//task 1.2

mainEl.innerHTML = '<h1> SEI Rocks! <h1>';

//task 1.3

mainEl.classList.add('flex-ctr');

//task 2.0
const topMenuEl = document.getElementById('top-menu');
  // I can also do const topMenuEl = document.querySelector('#top-menu') to select all elements with ID top-meny

//task 2.1

topMenuEl.style.height = '100%';
    //topMenuEl.setAttribute('style', 'height: 100%'); vs setAttribue? why do we use the first??

//task 2.2

topMenuEl.style.backgroundColor = 'var(--top-menu-bg)';

//tasl 2.3
topMenuEl.classList.add ('flex-around');

menuLinks.forEach(function(link) {
    // Creates <a> element
    const newLinkEl = document.createElement('a');
    // Adds href attribute with value set to href property of the 'link' object;
    newLinkEl.setAttribute('href', link.href);
    // Set link text
    newLinkEl.textContent = link.text;
    // Append new link element to topMenuEl
    topMenuEl.append(newLinkEl);
  });

//tasl 3.0

menuLinks.forEach(function(link) {
    //creates an <a> element
    const newLinkEl = document.createElement('a');
    //adds href attribute with value set to href propety of the 'links' obj.
    newLinkEl.setAttribute('href', link.href);
    //set link text
    newLinkEl.textContent
});