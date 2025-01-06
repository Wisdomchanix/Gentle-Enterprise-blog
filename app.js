const sentence = ["Phenom💜.", "Register.", "Earn📈.", "Flex"]
let index = 0
function typeEffect() {
    const textElement = document.getElementById("text")
    textElement.textContent = sentence[index]
    index = (index + 1) % sentence.length
}
setInterval(typeEffect, 4000)

function scrollUp() {
    const scrollUp = document.getElementById('scroll-up');
    // When the scroll is higher than 200 viewport height, add the show-scroll class to the a tag with the scroll-top class
    if (this.scrollY >= 200) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

document.querySelectorAll('.accordion_header').forEach(button => {
    button.addEventListener('click', () => {
        const accordionItem =  button.parentElement

        document.querySelectorAll('.accordion_item').forEach(item => {
            if (item !== accordionItem) {
                item.classList.remove('active')
            }
        })
        accordionItem.classList.toggle('active')
    })
})

const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 1500,
    delay: 200,
    // reset: true
})

sr.reveal(`.home_contaier`)