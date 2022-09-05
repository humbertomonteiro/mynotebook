//ajax para navegar html

const hfNav = document.querySelectorAll('[hf-nav]')
hfNav.forEach(link => {
    const conteudoHtml = document.getElementById('home')
    const navHtml = document.querySelector('#navHtml').classList

    link.onclick = function(a) {
        a.preventDefault()

        navHtml.remove('displayNone')
        navHtml.add('displayBlock')
        
        fetch(link.getAttribute('hf-nav'))
            .then(resp => resp.text())
            .then(html => conteudoHtml.innerHTML = html)
    }
})

const hfCss = document.querySelectorAll('[hf-css]')
hfCss.forEach(link => {
    const conteudoHtml = document.querySelector('#home')
    
    link.onclick = function(a) {
        a.preventDefault()

        fetch(link.getAttribute('hf-css'))
            .then(resp => resp.text())
            .then(html => conteudoHtml.innerHTML = html)
    }
})

//ajax para navegar git

const hfGit = document.querySelectorAll('[hf-git]')
hfGit.forEach(link => {
    const conteudoGit = document.getElementById('git')
    const git = document.querySelector('#containerGit').classList

    link.onclick = function(a) {
        a.preventDefault()

        git.remove('scroll')

        fetch(link.getAttribute('hf-git'))
            .then(resp => resp.text())
            .then(html => conteudoGit.innerHTML = html)
    }
})



//animação scroll

window.sr = ScrollReveal({ reset: true })

sr.reveal('.scroll', { 
    delay: 300,
    rotate: {x: 0, y: 50, z:0},
    duration: 2000
})

sr.reveal('.scroll1', { 
    rotate: {x: 0, y: 50, z:0},
    duration: 1500
})