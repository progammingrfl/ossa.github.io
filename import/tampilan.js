const toggleElement = document.querySelector('.toggle')
const bodyElement = document.querySelector('body')

toggleElement.addEventListener('click', function(){
if (bodyElement.classList.contains('siang')){
    bodyElement.classList.remove('siang');
    bodyElement.classList.add('malam');
}else {
    bodyElement.classList.remove('malam');
    bodyElement.classList.add('siang');
}
});