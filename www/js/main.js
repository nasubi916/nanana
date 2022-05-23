// 初期化処理としてToDoを画面に表示
renderToDoList();

//意味のないカウンター
let counter = 0;
function touchCounter() {
    console.log("a");
    counter = counter + 1;
    document.getElementById("counterView").innerHTML = counter + "回押してるね";
}


//現在時刻を確認
let date = new Date();
function timeWatch() {
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let nowTime = (hours + minutes);
    document.getElementById("show_timeWatch");
}

//設定時刻との差を確認
function timeDiff() {
    let setTime = document.getElementById("setTime").value;
    
}

//enterキーで追加する
let btn = document.getElementById("exe_button");
window.document.onkeydown = function(event){
    if (event.key === 'Enter') {
        document.form1.submit();
    }
}

// フォームの情報を元にToDoを保存
function addToDo() {
    let input = document.getElementById("name").value;
    if (input === "") {
        return;
    }
    addStorage(input);
    renderToDoList();
    document.getElementById("name").value = "";
}
// ToDoリストをHTML表示する
function renderToDoList() {
    let ul = document.getElementById("ToDoList");
    ul.innerHTML = "";
    ToDoList = getStorage();
    for (let i = 0; i < ToDoList.length; i++) {
        let ToDo = ToDoList[i];
        let li = document.createElement("li");
        li.textContent = ToDo;
        li.dataset.index = i;
        li.addEventListener("click", deleteToDo);
        ul.appendChild(li);
    }
}
// クリックされたToDoを削除する
function deleteToDo() {
    deleteStorage(this.dataset.index);
    renderToDoList();
}
// ローカルストレージ操作関数群
function getStorage() {
    let list = localStorage.getItem("ToDoList");
    if (list === null) {
        return [];
    } else {
        return JSON.parse(list);
    }
}
function addStorage(item) {
    let list = getStorage();
    list.unshift(item);
    setStorage(list);
}
function deleteStorage(index) {
    let list = getStorage();
    list.splice(index, 1);
    localStorage.setItem("ToDoList", JSON.stringify(list));
}
function setStorage(list){
    localStorage.setItem("ToDoList", JSON.stringify(list));  
}
