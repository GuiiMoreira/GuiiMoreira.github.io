const button = document.querySelector('button')
const um = document.querySelector('.um')
const divdois = document.querySelector('.divdois')
const dois = document.querySelector('.dois')
const tres = document.querySelector('.tres')
const divtres = document.querySelector('.divtres');
const quatro = document.querySelector('.divquatro')



button.addEventListener('click', function teste() {

    if (button.textContent === 'Save the castle') {
        divdois.classList.add("movedois")
        divtres.classList.add("movetres")
        quatro.classList.add("movequatro")
        um.classList.add("moveum")

        setTimeout(() => {
            dois.setAttribute('src', './Assets/quadro5.png')
            tres.setAttribute('src', './Assets/quadro6.png')

            divdois.classList.remove("movedois")
            divtres.classList.remove("movetres")
            quatro.classList.remove("movequatro")
            um.classList.remove("moveum")

            button.textContent = 'See the King'
        }, 3500)
    }


    if (button.textContent === 'See the King') {
        divdois.classList.add("movedois")
        divtres.classList.add("movetres")
        quatro.classList.add("movequatro")
        um.classList.add("moveum")

        setTimeout(() => {
            dois.setAttribute('src', './Assets/quadro7.png')
            tres.setAttribute('src', './Assets/quadro8.png')

            divdois.classList.remove("movedois")
            divtres.classList.remove("movetres")
            quatro.classList.remove("movequatro")
            um.classList.remove("moveum")

            button.textContent = 'Talk to Princess'
        }, 3500)
    }


    if (button.textContent === 'Talk to Princess') {
        divdois.classList.add("movedois")
        divtres.classList.add("movetres")
        quatro.classList.add("movequatro")
        um.classList.add("moveum")

        setTimeout(() => {
            dois.setAttribute('src', './Assets/quadro9.png')
            tres.setAttribute('src', './Assets/quadro10.png')

            divdois.classList.remove("movedois")
            divtres.classList.remove("movetres")
            quatro.classList.remove("movequatro")
            um.classList.remove("moveum")

            button.textContent = 'Send me the challenge'
        }, 3500)
    }
    if (button.textContent === 'Send me the challenge') {
        window.location = './contato/contato.html'
    }
})