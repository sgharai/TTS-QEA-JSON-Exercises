let albumId = localStorage.getItem("albumId")

fetch(`http://jsonplaceholder.typicode.com/albums/${albumId}/photos`)
.then(function(response) {
    return response.json();
})

.then(function(data) {
    let albumTitle = document.createElement("h1")
    albumTitle.innerHTML = `Album #${albumId}`
    document.getElementById("header").appendChild(albumTitle)

    for (photo in data) {
        let photoPost = document.createElement("li")
        photoPost.setAttribute("id", "photoTitle")
        photoPost.innerHTML = `<img src=${data[photo].thumbnailUrl}>
        <br> <h3>${data[photo].title}</h3>`
        document.getElementById("album").appendChild(photoPost);
    }
})


const searchInput = document.getElementById("searchInput")

searchInput.onkeyup = function() {
  // Declare variables
  var input, filter, ul, li, a, i, txtValue;
  input = document.getElementById('searchInput');
  filter = input.value.toUpperCase();
  ul = document.getElementById("album");
  li = ul.getElementsByTagName('li');


  // Loop through all list items, and hide those who don't match the search query
  for (i = 0; i < li.length; i++) {
    h3 = li[i].getElementsByTagName("h3")[0];
    txtValue = h3.textContent || h3.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}
