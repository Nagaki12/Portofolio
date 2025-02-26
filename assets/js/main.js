// Change Background Header
function scrollHeader() {
    const header = document.getElementById('header');
    // when the scroll is greater than 80 viewport height, add the scroll-header class to header tag
    if (this.scrollY >= 80) header.classList.add('scroll-header');
    else header.classList.remove('scroll-header');
}

window.addEventListener('scroll', scrollHeader)

// ===== Show Scroll Up =====
function scrollUp() {
    const scrollUp = document.getElementById('scroll-up');
    // when the scroll is greater than 350 viewport height, add the show-scroll class to scroll-top class
    if (this.scrollY >= 350) scrollUp.classList.add('show-scroll');
    else scrollUp.classList.remove('show-scroll');
}

window.addEventListener('scroll', scrollUp)

// ===== About Tabs =====
const tabs = document.querySelectorAll('[data-target]');
 tabContents = document.querySelectorAll('[data-content]');

 tabs.forEach(tab=> {
    tab.addEventListener('click', () => {
        const target = document.querySelector(tab.dataset.target);
        
        tabContents.forEach((tabContent) => {
            tabContent.classList.remove('tab__active');
        });

        target.classList.add('tab__active');
        
        tabs.forEach((tab) => {
            tab.classList.remove('tab__active');
        });
        
        tab.classList.add('tab__active');
    });
 });