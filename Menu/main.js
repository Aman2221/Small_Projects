const showNavbar = (toggleId , navId, bodyId , headerId) => {
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId),
    bodypd = document.getElementById(bodyId),
    headerpd = document.getElementById(headerId)


    if(toggle && nav && bodypd && headerpd){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
            
            toggle.classList.toggle('bx-menu')

            bodypd.classList.toggle('body-pd')

            headerpd.classList.toggle('-pd')
        })
    }
}
showNavbar('header-toggle','nav-bar','body-pd','header')

const linkColor = document.querySelectorAll('.nav_link')
function colorLink()
{
    if(linkColor){
        linkColor.forEach(l=> l.classList.remove('active'))
        this.classList.add('active')
    }
}
linkColor.forEach(l=> l.addEventListener('click',colorLink))