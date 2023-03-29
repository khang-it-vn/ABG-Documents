const addDocForm = document.getElementById("add-doc-form");
const editDocForm = document.getElementById("edit-doc-form");
const docList = document.getElementById("doc-list");

// Add Document - Submit Form and Append to the List
addDocForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const docTitle = document.getElementById("doc-title").value;
    const docContent = CKEDITOR.instances["doc-content"].getData();

    if (!docTitle || !docContent) return;

    const docItem = document.createElement("li");
    docItem.innerHTML = `
        <h2>${docTitle}</h2>
        <p>${docContent}</p>
        <button class="edit-btn">Edit</button> 
        <button class="delete-btn">Delete</button>
    `;

    docList.appendChild(docItem);
    addDocForm.reset();
});

// Edit Document - Show Form with Existing Values
docList.addEventListener("click", function(event) {
    const target = event.target;
    const parent = target.parentNode;

    if (target.className === "edit-btn") {
        const docTitle = parent.querySelector("h2").textContent;
        const docContent = parent.querySelector("p").innerHTML;

        document.getElementById("edit-doc-title").value = docTitle;
        CKEDITOR.instances["edit-doc-content"].setData(docContent);

        addDocForm.style.display = "none";
        editDocForm.style.display = "block";

        currentDoc = parent;
    }
});

// Edit Document - Save Changes and Close Form
editDocForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const docTitle = document.getElementById("edit-doc-title").value;
    const docContent = CKEDITOR.instances["edit-doc-content"].getData();

    if (!docTitle || !docContent) return;

    currentDoc.querySelector("h2").textContent = docTitle;
    currentDoc.querySelector("p").innerHTML = docContent;

    addDocForm.style.display = "block";
    editDocForm.style.display = "none";

    editDocForm.reset();
});

// Delete Document - Remove from the List
docList.addEventListener("click", function(event) {
    const target = event.target;
    const parent = target.parentNode;

    if (target.className === "delete-btn") {
        parent.remove();
    }
});
