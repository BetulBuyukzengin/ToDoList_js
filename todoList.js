
const ekleBtn = document.getElementById('liveToastBtn')
const liste = document.getElementById('list');
const liveToast = document.getElementById('liveToast');
const task = document.getElementById('task');
const li = document.getElementsByTagName('li');
ekleBtn.addEventListener('click', newElement);
// span.addEventListener('click', newElement);


let items;

function newElement() {

    if (task.value == "" || !task.value.trim()) {
        $('.error').toast("show")
    }
    else {
        addRemFunc();
    }
/*     saveLocalStorage(task.value);
 */
/*     task.value = ""
 */}

/* paragraphy.classList.add('css te class adını yaz'); */


function addRemFunc() {
    //added
    let paragraphy = document.createElement('li');
    console.group(paragraphy);
    paragraphy.innerHTML = task.value;
    $('.success').toast("show");
    liste.appendChild(paragraphy);
    paragraphy.classList.add('taske');
/*     li.classList.add('taske'); // css özelliği ekleme
 */    task.value = "";



    var span = document.createElement("SPAN");
    span.className = "close";
    var txt = document.createTextNode("\u00D7");
    span.appendChild(txt);
    paragraphy.appendChild(span);
    span.addEventListener("click", removeFunc);




    //remove 
    function removeFunc() {
        paragraphy.remove();
    }

    /*     paragraphy.addEventListener("click", selectItem);   */
    li.addEventListener("click", selectItem);
    function selectItem() {
        li.classList.toggle("checked");

    }

}
task.addEventListener("keypress", function (event) {
    console.log(event.key)
    if (event.key === "Enter") {
        event.preventDefault();
        $("#liveToastBtn").click();

    }
})



// Listedeki bir iteme tıklandığında "Tik" işareti ekle
var listeQuery = document.querySelector('ul');
listeQuery.addEventListener('click', function (queryList) {
    if (queryList.target.tagName === 'LI') {
        queryList.target.classList.toggle('checked');
    }
}, false);

/* 

function saveLocalStorage(taske) {
    let todos;
    if (localStorage.getItem("todos") === null) {
        todos = [];
    }
    else {
        todos = JSON.parse(localStorage.getItem("todos"));
    }

    todos.push(taske);
    localStorage.setItem("todos", JSON.stringify(todos))
}

function getLocalStorage() {
    let todos;
    if (localStorage.getItem("todos") === null) {
        todos = [];
    }
    else {
        todos = JSON.parse(localStorage.getItem("todos"));
    }
}


 
 */