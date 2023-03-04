
let index = 0
changeImage(index)
function changeImage(i) {
    index += i
    const images = document.getElementsByClassName('image')
    const dots = document.getElementsByClassName('dot')

    for( i = 0; i < images.length; i++) {
        images[i].style.display = 'none'
    }
    for( i = 0; i < images.length; i++) {
        dots[i].classList.remove('active')
    }
    if(index < 0) {
        index = images.length
    }
    if(index > images.length - 1) {
        index = 0
    }
    images[index].style.display = 'block'
    dots[index].classList.add('active')
}