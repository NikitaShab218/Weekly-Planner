// let task_info_img = document.getElementsByClassName("icon_task");

// task_info_img.addEventListener("click", function () {
//   let div = document.createElement("div");
//   div.innerHTML = `
//             <div class="info_task">
//                 <div class="info_task_wrapper">
//                     <div class="icon_and_text">
//                         <img src="assets/state_task_no-complited.png" alt="default">No complited
//                     </div>
//                 </div>
//                 <div class="info_task_wrapper">
//                     <div class="icon_and_text">
//                         <img src="assets/state_task_in-progress.png" alt="default">In progress
//                     </div>
//                 </div>
//                 <div class="info_task_wrapper">
//                     <div class="icon_and_text">
//                         <img src="assets/state_task_complited.png" alt="default">Complited
//                     </div>
//                 </div>
//             </div>
//         `;
// });
$(document).ready(function() {
    $('.slider').bxSlider({
        infiniteLoop: false,
        hideControlOnEnd: true,
        adaptiveHeight: true,
    captions: true,
    nextText: '',
    prevText: '',
    easing: 'jswing',
    });
});


const subjectClass = "line";
const taskClass = "task_input";
const iconClass = "icon_task";

window.onload = function () {
  const savedSubjects = JSON.parse(localStorage.getItem("subjects")) || [];
  const subjectInputs = document.querySelectorAll('input.' + subjectClass);
  for (let i = 0; i < subjectInputs.length; i++) {
    if (savedSubjects[i] !== undefined) {
      subjectInputs[i].value = savedSubjects[i];
    }
  }




  const savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
  const taskInputs = document.getElementsByClassName(taskClass);
  for (let i = 0; i < taskInputs.length; i++) {
    if (savedTasks[i] !== undefined) {
      taskInputs[i].value = savedTasks[i];
    }
  }





  const savedIcons = JSON.parse(localStorage.getItem("icons")) || [];
  const icons = document.getElementsByClassName(iconClass);
  for (let i = 0; i < icons.length; i++) {
    if (savedIcons[i] !== undefined) {
      icons[i].src = savedIcons[i];
    }
  }
  initIconToggle();
};



function saveData() {
  const subjectInputs = document.querySelectorAll('input.' + subjectClass);
  const subjects = [];
  for (let input of subjectInputs) {
    subjects.push(input.value);
  }
  localStorage.setItem("subjects", JSON.stringify(subjects));




  const taskInputs = document.getElementsByClassName(taskClass);
  const tasks = [];
  for (let input of taskInputs) {
    tasks.push(input.value);
  }
  localStorage.setItem("tasks", JSON.stringify(tasks));





  const icons = document.getElementsByClassName(iconClass);
  const iconStates = [];
  for (let icon of icons) {
    iconStates.push(icon.src);
  }
  localStorage.setItem("icons", JSON.stringify(iconStates));
}

function initIconToggle() {
  document.querySelectorAll('.' + iconClass).forEach(icon => {
    icon.addEventListener('click', () => {
      if (icon.src.includes("state_task_default.png")) {
        icon.src = "assets/state_task_no-complited.png";
      } else if (icon.src.includes("state_task_no-complited.png")) {
        icon.src = "assets/state_task_in-progress.png";
      } else if (icon.src.includes("state_task_in-progress.png")) {
        icon.src = "assets/state_task_complited.png";
      } else {
        icon.src = "assets/state_task_default.png";
      }
    });
  });
}

function resetData() {
  localStorage.clear();
  location.reload();
}
function toggleMenu() {
  const menu = document.getElementById("dayMenu");
  menu.classList.toggle("show");
}


let buttons = document.querySelectorAll(".scroll");

buttons.forEach(function (btn) {
  btn.addEventListener("click", function () {
    let targetID = btn.dataset.target;
    document.querySelector(targetID).scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  });
});
