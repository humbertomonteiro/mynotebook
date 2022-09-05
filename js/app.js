function toggleClass(elemento, tag) {
    const toggle = document.querySelector(`${elemento}`).classList
    toggle.toggle(`${tag}`)
}

function removerClass(elemento, tag) {
    const remover = document.querySelector(`${elemento}`).classList
    remover.remove(`${tag}`)
}

function addClass(elemento, tag) {
    const add = document.querySelector(`${elemento}`).classList
    add.add(`${tag}`)
}

//ajax para navegar html

const hfNav = document.querySelectorAll('[hf-nav]')
hfNav.forEach(link => {
    const conteudoHtml = document.getElementById('home')

    link.onclick = function(a) {
        a.preventDefault()

        removerClass('#navHtml', 'displayNone')
        addClass('#css', 'displayNone')

        fetch(link.getAttribute('hf-nav'))
            .then(resp => resp.text())
            .then(html => conteudoHtml.innerHTML = html)
    }
})

//conteudo css

const hfCss = document.querySelectorAll('[hf-css]')
hfCss.forEach(link => {
    const conteudoHtml = document.getElementById('home')

    link.onclick = function(a) {
        a.preventDefault()

        toggleClass('#css', 'displayNone')
        addClass('#navHtml', 'displayNone')
    
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

//efeito vanilllia tilt

VanillaTilt.init(document.querySelectorAll(".card"), {
    max: 25,
    speed: 400,
    glare: true,
    "max-glare": 1
})

VanillaTilt.init(document.querySelectorAll(".card2"), {
    max: 25,
    speed: 400,
    glare: true,
    "max-glare": 1
})
