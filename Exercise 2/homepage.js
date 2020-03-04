
let user = JSON.parse(localStorage.getItem("currentUser"))
let homepageTitle = document.createElement("h1")
homepageTitle.innerHTML = `${user.name}'s Homepage`
document.getElementById("homepageTitle").appendChild(homepageTitle)
fetchPostTitles(user.id)
fetchAlbums(user.id)

function fetchPostTitles(id){
    fetch(`https://jsonplaceholder.typicode.com/user/${id}/posts`)
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            for (post in data) {
                let postLink = document.createElement("a");
                postLink.setAttribute("id", data[post].id)
                postLink.setAttribute("href", "post.html")
                postLink.innerHTML = `${data[post].title} <br>`
                document.getElementById("postTitles").appendChild(postLink);
                postLink.addEventListener("click", storePostId.bind(this, data[post].id), false);
            }
            
        })
}

function storePostId (postId) {
    localStorage.setItem("postId", postId)
}

function fetchAlbums(id) {
    fetch(`https://jsonplaceholder.typicode.com/user/${id}/albums`)
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            for (album in data) {
                let albumLink = document.createElement("a");
                albumLink.setAttribute("id", data[album].id)
                albumLink.setAttribute("href", "album.html")
                albumLink.innerHTML = `${data[album].title} <br>`
                document.getElementById("albums").appendChild(albumLink);
                albumLink.addEventListener("click", storeAlbumId.bind(this, data[album].id), false);
            }
        })
}

function storeAlbumId(albumId) {
    localStorage.setItem("albumId", albumId)
}