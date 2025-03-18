document.addEventListener("DOMContentLoaded", () => {
    loadNotes();
});

function saveText() {
    let noteText = document.getElementById("note").value.trim();
    if (noteText === "") {
        alert("Cannot save an empty note!");
        return;
    }

    let notes = JSON.parse(localStorage.getItem("notes")) || [];
    notes.push(noteText);
    localStorage.setItem("notes", JSON.stringify(notes));

    displayNotes();
    document.getElementById("note").value = "";
}

function clearText() {
    document.getElementById("note").value = "";
}

function displayNotes() {
    let notes = JSON.parse(localStorage.getItem("notes")) || [];
    let notesContainer = document.getElementById("notes-container");
    notesContainer.innerHTML = "";

    notes.forEach((note, index) => {
        let div = document.createElement("div");
        div.className = "note-item";
        div.innerHTML = `
            <p>${note}</p>
            <button class="delete-btn" onclick="deleteNote(${index})">Delete</button>
        `;
        notesContainer.appendChild(div);
    });
}

function deleteNote(index) {
    let notes = JSON.parse(localStorage.getItem("notes")) || [];
    notes.splice(index, 1);
    localStorage.setItem("notes", JSON.stringify(notes));

    displayNotes();
}

function loadNotes() {
    displayNotes();
}
