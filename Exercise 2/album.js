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
        let photoPost = document.createElement("h3")
        photoPost.setAttribute("id", "photoTitle")
        photoPost.innerHTML = `<img src=${data[photo].thumbnailUrl}><br> Title: ${data[photo].title}`
        document.getElementById("album").appendChild(photoPost);
    }
})
