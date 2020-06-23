var myMap;

// Дождёмся загрузки API и готовности DOM.
ymaps.ready(init);

function init () {
    myMap = new ymaps.Map('map', {
        center:[52.093333, 23.698168],
        zoom:15
    });
    myMap.controls
    // Кнопка изменения масштаба.
    .add('zoomControl', { left: 5, top: 5 })
    // Список типов карты
    .add('typeSelector')
    // Стандартный набор кнопок
    .add('mapTools', { left: 35, top: 5 });
    myPlacemark = new ymaps.Placemark([52.093333, 23.698168], {
        hintContent: 'Студия "Пинцет"'
    });

myMap.geoObjects.add(myPlacemark);
}
function parallax(event) {
    
    this.querySelectorAll('.layer').forEach(layer => {
        const speed = layer.getAttribute('data-speed');
        layer.style.transform = `translate(${event.clientX*speed/1000}px, ${event.clientY*speed/1000+pageYOffset*speed/200}px)`;
    });
}
document.addEventListener('mousemove', parallax);
var elements = document.getElementsByClassName('input-phone');
for (var i = 0; i < elements.length; i++) {
  new IMask(elements[i], {
    mask: '+{7}(000)000-00-00',
  });
}
const popup = document.getElementsByClassName('popup')[0];
const popupOverlay = document.getElementsByClassName('popup-overlay')[0];
const popupSuccess = document.getElementsByClassName('popup-success')[0];
const navBar = document.getElementsByClassName('nav-bar')[0];
function showMenu(){
    navBar.style.display = (navBar.style.display == 'block') ? 'none' : 'block';
}
function scrollToSection() {
    event.preventDefault();
    document.querySelector('section').scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
}
function popupOpen(){
    
    event.preventDefault();
    popup.style.display = 'block';
    popup.style.top = `${pageYOffset + 100}px`;
    popupOverlay.style.display = 'block';
}
function popupClose(){
    popup.style.display = 'none';
    popupSuccess.style.display = 'none';
    popupOverlay.style.display = 'none';
}
function submitForm(){
    event.preventDefault();
    popup.style.display = 'none';
    popupSuccess.style.display = 'block';
    popupSuccess.style.top = `${pageYOffset+ 100}px`;
}
