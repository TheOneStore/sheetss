let preveiwContainer = document.querySelector('.products-preview');
let previewBox = preveiwContainer.querySelectorAll('.preview');

document.querySelectorAll('.products-container .product').forEach(product =>{
  product.onclick = () =>{
    preveiwContainer.style.display = 'flex';
    let name = product.getAttribute('data-name');
    previewBox.forEach(preview =>{
      let target = preview.getAttribute('data-target');
      if(name == target){
        preview.classList.add('active');
      }
    });
  };
});

previewBox.forEach(close =>{
  close.querySelector('.fa-times').onclick = () =>{
    close.classList.remove('active');
    preveiwContainer.style.display = 'none';
  };
});

const body = document.querySelector('body');
sidebar = body.querySelector('nav');
toggle = body.querySelector(".toggle");

toggle.addEventListener("click", () => {
  sidebar.classList.toggle("close");
});
document.addEventListener("click", (event) => {
  // Close the sidebar when clicking outside of it and toggle button
  if (!sidebar.contains(event.target) && event.target !== toggle) {
    sidebar.classList.add("close");
  }
});



// document.getElementById("search-button").addEventListener("click", function() {
//   // Get the search query from the input field
//   var searchQuery = document.getElementById("search-input").value.toLowerCase();
  
//   // Get all the products
//   var products = document.getElementsByClassName("product");

//   // Loop through each product and check if its name matches the search query
//   for (var i = 0; i < products.length; i++) {
//      var productName = products[i].getElementsByTagNameNS("h3").toLowerCase();
//      if (productName.includes(searchQuery)) {
//         products[i].style.display = "block"; // Show the product if it matches the search query
//      } else {
//         products[i].style.display = "none"; // Hide the product if it doesn't match the search query
//      }
//   }
// });