const consoleLog = document.querySelector('#consoleLog');
consoleLog.addEventListener ('click', () => {
  alert('Служит для вывода информации');
})

const alertInf = document.querySelector('#alert');
alertInf.addEventListener ('click', () => {
  alert('Помогает при отладке приложений');
})

const promptInf = document.querySelector('#prompt');
promptInf.addEventListener ('click', () => {
  alert('Отображает диалоговое окно с запросом на ввод текста');
})
