const hfNav = document.querySelectorAll('[hf-nav]')
hfNav.forEach(link => {
    const conteudoHtml = document.getElementById('home')

    link.onclick = function(a) {
        a.preventDefault()
        fetch(link.getAttribute('hf-nav'))
            .then(resp => resp.text())
            .then(html => conteudoHtml.innerHTML = html)
    }
})

const hfGit = document.querySelectorAll('[hf-git]')
hfGit.forEach(link => {
    const conteudoGit = document.getElementById('git')

    link.onclick = function(a) {
        a.preventDefault()
        fetch(link.getAttribute('hf-git'))
            .then(resp => resp.text())
            .then(html => conteudoGit.innerHTML = html)
    }
})

function aparecerNavHtml() {
    
}

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