// let inputValue = document.querySelector(".task-add input");
// let btnAdd = document.querySelector(".task-add .add");
// let areaText = document.querySelector(".task-containt");
// let cout = document.querySelector(".stats .count span");
// let comp = document.querySelector(".stats .complet span");
// let btnDelete = document.querySelector(".task-containt .delete");
// let clearBtn = document.querySelector(".btns .clearBtn");
// let finishBtn = document.querySelector(".btns .finshBtn");

// window.onload = function () {
//   inputValue.focus();
// };

// btnAdd.onclick = function () {
//   if (!inputValue.value == "") {
//     let messNoTask = document.querySelector(".task-containt .no-task");
//     if (document.body.contains(messNoTask)) {
//       messNoTask.remove();
//     }
//     let span = document.createElement("span");
//     span.textContent = inputValue.value;
//     span.className = "box";
//     let btnDelet = document.createElement("span");
//     btnDelet.textContent = "Delete";
//     btnDelet.className = "delete";
//     span.appendChild(btnDelet);
//     areaText.appendChild(span);
//   }
//   inputValue.value = "";
//   inputValue.focus();
//   calc();
// };

// document.addEventListener("click", function (e) {
//   if (e.target.className == "delete") {
//     e.target.parentElement.remove();
//     if (areaText.childElementCount == 0) {
//       createNoMess();
//     }
//   }

//   if (e.target.classList.contains("box")) {
//     e.target.classList.toggle("finsh");
//   }
//   calc();
// });

// clearBtn.addEventListener("click", function () {
//   Array.from(document.querySelectorAll(".box")).forEach((el) => {
//     el.remove();
//   });
//   if (areaText.childElementCount == 0) {
//     createNoMess();
//   }
// });

// finishBtn.addEventListener("click", function () {
//   Array.from(document.querySelectorAll(".box")).forEach((el) => {
//     el.classList.add("finsh");
//   });
// });

// function createNoMess() {
//   let mess = document.createElement("span");
//   mess.className = "no-task";
//   mess.textContent = "No Task To Show";
//   areaText.appendChild(mess);
// }

// function calc() {
//   cout.innerHTML = document.querySelectorAll(".task-containt .box").length;
//   comp.innerHTML = document.querySelectorAll(".task-containt .finsh").length;
// }

//
///
////
////
//
//
////
////
////
////
////
////
////
////
////
let inputValue = document.querySelector(".task-add input");
let btnAdd = document.querySelector(".task-add .add");
let areaText = document.querySelector(".task-containt");
let btnDelete = document.querySelector(".task-containt .delete");
let cout = document.querySelector(".stats .count span");
let comp = document.querySelector(".stats .complet span");
let clearBtn = document.querySelector(".btns .clearBtn");
let finishBtn = document.querySelector(".btns .finshBtn");
let mess = document.querySelector(".no-task");

window.onload = function () {
  inputValue.focus();
};

btnAdd.onclick = function () {
  if (inputValue.value != "") {
    let messNoTask = document.querySelector(".task-containt .no-task");
    if (document.body.contains(messNoTask)) {
      messNoTask.remove();
    }
    let box = document.createElement("span");
    box.className = "box";
    box.innerText = inputValue.value;
    let deleteBtn = document.createElement("span");
    deleteBtn.className = "delete";
    deleteBtn.innerHTML = "Delete";
    box.appendChild(deleteBtn);
    areaText.appendChild(box);
  }
  inputValue.value = "";
  inputValue.focus();
};

document.addEventListener("click", function (e) {
  if (e.target.className == "delete") {
    e.target.parentElement.remove();
    if (areaText.childElementCount == 0) {
      createNoMess();
    }
  }

  if (e.target.classList.contains("box")) {
    e.target.classList.toggle("finsh");
  }
  calc();
});

clearBtn.addEventListener("click", function () {
  let allBox = Array.from(document.querySelectorAll(".box"));
  allBox.forEach((e) => e.remove());
  if (areaText.childElementCount == 0) {
    createNoMess();
  }
});

finishBtn.addEventListener("click", function () {
  let allBox = Array.from(document.querySelectorAll(".box"));
  allBox.forEach((e) => e.classList.toggle("finsh"));
});

function calc() {
  let numTasks = Array.from(document.getElementsByClassName("box")).length;
  cout.innerHTML = numTasks;
  let numCom = Array.from(document.querySelectorAll(".finsh")).length;
  comp.innerHTML = numCom;
}

function createNoMess() {
  let mess = document.createElement("span");
  mess.className = "no-task";
  mess.textContent = "No Task To Show";
  areaText.appendChild(mess);
}

// تعريف دالة لإضافة المهام
function addTask() {
  if (inputValue.value != "") {
    let messNoTask = document.querySelector(".task-containt .no-task");
    if (document.body.contains(messNoTask)) {
      messNoTask.remove();
    }
    let box = document.createElement("span");
    box.className = "box";
    box.innerText = inputValue.value;
    let deleteBtn = document.createElement("span");
    deleteBtn.className = "delete";
    deleteBtn.innerHTML = "Delete";
    box.appendChild(deleteBtn);
    areaText.appendChild(box);
    // إعادة تعيين قيمة حقل الإدخال
    inputValue.value = "";
    // إعادة التركيز على حقل الإدخال
    inputValue.focus();
    // إعادة حساب الإحصائيات
    calc();
  }
}

// استماع لحدث الضغط على مفتاح "Enter" داخل حقل الإدخال
inputValue.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    // منع السلوك الافتراضي لمفتاح "Enter"
    event.preventDefault();
    // إضافة المهمة
    addTask();
  }
});
