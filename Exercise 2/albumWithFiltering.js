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
        <br> <h3> Title: ${data[photo].title}</h3>`
        document.getElementById("album").appendChild(photoPost);
    }
})

.then(function(myFunction) {
    document.getElementById("myInput").addEventListener('onkeyup', myFunction )
})

function myFunction() {
  // Declare variables
  var input, filter, ul, li, a, i, txtValue;
  input = document.getElementById('myInput');
  filter = input.value.toUpperCase();
  ul = document.getElementById("album");
  li = ul.getElementsByTagName('li');

  console.log(li)

  // Loop through all list items, and hide those who don't match the search query
  for (i = 0; i < li.length; i++) {
    a = li[i].getElementsByTagName("a")[0];
    txtValue = a.textContent || a.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}
