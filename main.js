let title = document.getElementById("title");
let notes = document.getElementById("notes");
let form = document.getElementById("form");
let list = document.getElementById("list");
let btnForm = document.querySelector(".btn-form");

btnForm.addEventListener("click", () => {
    form.classList.toggle("open");
    btnForm.classList.toggle("btn-form-close");
})

form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (!notes.value.trim()) return ;
    if (!title.value.trim()) {
        title.value = "Untitled";
    }
    const now = new Date().toDateString();

    const li = document.createElement("Li");
    li.classList.add("li");

    const del = document.createElement("BUTTON");
    del.classList.add("del-note");

    del.innerHTML = "Delete";
    li.innerHTML = `<h3 class="note-title">${title.value.trim()}</h3> <p class="note-desc">${notes.value.trim()}</p><br><p class="date">${now}</p>`

    list.appendChild(li);
    li.appendChild(del);

    title.value = "";
    notes.value = "";

    form.classList.remove("open");
    btnForm.classList.remove("btn-form-close");

    del.addEventListener("click", (e) => {
        e.preventDefault();
        list.removeChild(li);
    })
})