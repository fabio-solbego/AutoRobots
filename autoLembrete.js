// autoLembrete.js
const tasks = document.querySelectorAll('#tasks li');
const alertBox = document.getElementById('alertBox');
let currentTask = 0;

function showAlert(message){
  alertBox.textContent = message;
  alertBox.style.display = 'block';
  setTimeout(() => alertBox.style.display = 'none', 3000);
}

const taskInterval = setInterval(() => {
  if(currentTask < tasks.length){
    tasks[currentTask].classList.add('done');
    showAlert(`✅ "${tasks[currentTask].textContent}" concluída!`);
    console.log(`Tarefa "${tasks[currentTask].textContent}" concluída automaticamente.`);
    currentTask++;
  } else {
    clearInterval(taskInterval);
    console.log("Todas as tarefas foram concluídas automaticamente!");
  }
}, 4000);

const whatsappBtn = document.getElementById('whatsappBtn');
whatsappBtn.addEventListener('click', () => {
  const message = encodeURIComponent("Olá! Aqui estão as tarefas concluídas automaticamente.");
  const phone = "5599999999999";
  window.open(`https://wa.me/${phone}?text=${message}`, "_blank");
});

setInterval(() => {
  showAlert("💡 Lembrete: revise suas tarefas!");
}, 15000);
