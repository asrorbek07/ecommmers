let header = document.querySelector('.site-header');
if(header){
    togglerBtn = document.querySelector('.header-main__menu-toggler');
}

if(togglerBtn){
    togglerBtn.addEventListener('click', () => {
        header.classList.toggle('site-header__open')
    })
}