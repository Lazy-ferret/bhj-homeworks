'use strict';

const chatWidgetSide = document.querySelector('.chat-widget__side');
const chatWidget = document.querySelector('.chat-widget');
const input = document.getElementById('chat-widget__input');
const messages = document.querySelector('.chat-widget__messages');

const robotMessages = [
  'Здрасьте',
  'Минуточку',
  'Пять минут, Турецкий',
  'Тыры-пыры пассатижи',
  'Это не наша война',
  'Вы были услышаны',
  'Ну, за мной общая координация',
  'Не мямли!'
]

function getRandom(min, max) {
  min = 0;
  max = Math.floor(robotMessages.length - 1);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

chatWidgetSide.addEventListener('click', () => {
  chatWidget.classList.add('chat-widget_active');
})

input.addEventListener('keyup', e => {
  if (e.key === 'Enter' && input.value) {
    messages.innerHTML += `
  <div class="message message_client">
    <div class="message__time">${new Date().getHours() + ':' + new Date().getMinutes()}</div>
    <div class="message__text">${input.value}</div>
  </div>
`;
    input.value = "";
    setTimeout(() => {
      messages.innerHTML += `
  <div class="message">
    <div class="message__time">${new Date().getHours() + ':' + new Date().getMinutes()}</div>
    <div class="message__text">${robotMessages[getRandom()]}</div>
  </div>
`;
    }, 1500);
  }
});




