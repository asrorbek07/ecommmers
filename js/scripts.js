let header = document.querySelector('.site-header');
if(header){
    togglerBtn = document.querySelector('.header-main__menu-toggler');
}

if(togglerBtn){
    togglerBtn.addEventListener('click', () => {
        header.classList.toggle('site-header__open')
    })
}

document.querySelector('.grid').addEventListener('click',()=>{
    document.querySelector('.fruits__grid-view').classList.remove('active')
    document.querySelector('.list-view').classList.add('active')
    document.querySelector('.grid').classList.add('list-active')
    document.querySelector('.list').classList.remove('list-active')
})

document.querySelector('.list').addEventListener('click',()=>{
    document.querySelector('.fruits__grid-view').classList.add('active')
    document.querySelector('.list-view').classList.remove('active')
    document.querySelector('.grid').classList.remove('list-active')
    document.querySelector('.list').classList.add('list-active')
})