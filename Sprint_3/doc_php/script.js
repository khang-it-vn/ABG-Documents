// const searchBtn = document.querySelector("button");
// const searchText = document.querySelector("input[type='text']");
// const list = document.querySelectorAll("li");

// searchBtn.addEventListener("click", () => {
//   const searchTerm = searchText.value.toLowerCase();

//   list.forEach((item) => {
//     if (item.textContent.toLowerCase().includes(searchTerm)) {
//       item.style.display = "block";
//     } else {
//       item.style.display = "none";
//     }
//   });
// });

// const addButton = document.getElementById('add-btn');
// addButton.addEventListener('click', () => {
//   const newItem = prompt('Nhập tên tài liệu mới:');
//   const newLink = document.createElement('a');
//   newLink.textContent = newItem;
//   const newList = document.createElement('li');
//   newList.appendChild(newLink);
//   document.querySelector('.content ul').appendChild(newList);
// });

// // Loop through all existing list items and add a "Delete" button to each one
// document.querySelectorAll('.content li').forEach(item => {
//     const deleteButton = document.createElement('button');
//     deleteButton.textContent = 'Xóa';
//     deleteButton.addEventListener('click', () => {
//       item.remove();
//     });
//     item.appendChild(deleteButton);
//   });

  
//   // Loop through all list items and add an "Edit" button to each one
// document.querySelectorAll('.content li').forEach(item => {
//     const editButton = document.createElement('button');
//     editButton.textContent = 'Sửa';
//     editButton.addEventListener('click', () => {
//       const newText = prompt('Nhập nội dung mới:');
//       item.querySelector('a').textContent = newText;
//     });
//     item.appendChild(editButton);
//   });
  
// const searchInput = document.getElementById('search-input');
// searchInput.addEventListener('keyup', search);

// function search() {
//     const searchTerm = searchInput.value.toLowerCase();
//     const sections = document.querySelectorAll('section');
    
//     sections.forEach(section => {
//       const documents = section.querySelectorAll('li');
      
//       documents.forEach(document => {
//         const title = document.innerText.toLowerCase();
        
//         if (title.includes(searchTerm)) {
//           document.style.display = 'block';
//         } else {
//           document.style.display = 'none';
//         }
//       });
//     });
// }

// const searchInput = document.getElementById('search-input');
// searchInput.addEventListener('keyup', search);

// function search() {
//   const searchTerm = searchInput.value.toLowerCase();
//   const documents = document.querySelectorAll('li');

//   documents.forEach(document => {
//     const title = document.innerText.toLowerCase();

//     if (title.includes(searchTerm)) {
//       document.style.display = 'block';
//     } else {
//       document.style.display = 'none';
//     }
//   });
// }
