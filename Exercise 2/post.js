let postId = localStorage.getItem("postId")

fetch(`http://jsonplaceholder.typicode.com/posts/${postId}`)
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
            let postTitle = document.createElement("h1")
            postTitle.setAttribute("id", "postTitle")
            postTitle.innerHTML = `Title: ${data.title}`
            let postText = document.createElement("p");
            postText.setAttribute("id", "postText")
            postText.innerHTML = `Body: ${data.body}`
            document.getElementById("post").appendChild(postTitle);
            document.getElementById("post").appendChild(postText);
    })

fetch(`http://jsonplaceholder.typicode.com/post/${postId}/comments`)
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        for (item in data) {
            let para2 = document.createElement("p");
            para2.setAttribute("class", "comment")
            para2.innerHTML = `Comment # ${data[item].id}: ${data[item].name.toUpperCase()} ( ${data[item].email} ) : ${data[item].body}`
            document.getElementById("postText").appendChild(para2);
        }
    })