let menu = document.querySelector('.menu'),
    menuItem = document.querySelectorAll('.menu-item'),
    fifthPoint = document.createElement('li');

fifthPoint.textContent = 'Пятый пункт';
fifthPoint.classList.add('menu-item');
menu.appendChild(fifthPoint);

menu.insertBefore(menuItem[2], menuItem[1]);
// Восстановил порядок в меню, добавил пятый пункт

document.body.style.background = 'url(img/apple_true.jpg)';
//Изменил картинку заднего фона

let title = document.querySelector('.title');
title.textContent = 'Мы продаем только подлинную технику Apple';
//Изменил текст в заголовке

let divsColumn = document.getElementsByClassName('column'),
    divAdv = document.querySelector('.adv');
    divsColumn[1].removeChild(divAdv);
//Удалил рекламу со страницы

for (let i = 0; i < 1; i++){
  let recordAnswer = document.querySelector('.prompt'),
      answerUser = prompt('Какое у вас отношение к технике от компании Apple?', '');
  if (answerUser == '' || answerUser == null || typeof(answerUser) != 'string' 
  || answerUser.length > 30) {
    i--;
    console.log('wasted');
  } else {
    recordAnswer.textContent = answerUser;
    console.log('great');
  }
}
//Вопрос к пользователю об отношении к технике Apple и запись его ответа в блок на страницу с id 'prompt'





