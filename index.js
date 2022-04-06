const button = document.querySelector('button')
const um = document.querySelector('.um')
const dois = document.querySelector('.divdois')
const tres = document.querySelector('.tres')
const quatro = document.querySelector('.divquatro')



button.addEventListener('click', function teste() {
    dois.classList.add("movedois")
    tres.classList.add("movetres")
    quatro.classList.add("movequatro")
    um.classList.add("moveum")

})