window.onload = function () {
  displayNotes();
};

function addNote() {
  let title = document.getElementById("title").value.trim();
  let description = document.getElementById("description").value.trim();

  if (title === "" || description === "") {
    alert("error")
    return;
  }

  let notes = JSON.parse(localStorage.getItem("notes")) || [];
  notes.push({ title, description });
  localStorage.setItem("notes", JSON.stringify(notes));

  document.getElementById("title").value = "";
  document.getElementById("description").value = "";

  displayNotes();
}

function displayNotes() {
  let notes = JSON.parse(localStorage.getItem("notes")) || [];
  let notesList = document.getElementById("notesList");
  notesList.innerHTML = "";

  if (notes.length === 0) {
    notesList.innerHTML = "<p>no tasks </p>";
    return;
  }

  notes.forEach((note, index) => {
    let noteDiv = document.createElement("div");
    noteDiv.className = "note";
    noteDiv.innerHTML = `
        <h3>${note.title}</h3>
        <p>${note.description}</p>
      `;
    notesList.appendChild(noteDiv);
  });
}
