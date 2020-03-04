// 1) Get all posts
const getAllPosts = function() {
	return $.get('http://jsonplaceholder.typicode.com/posts?_limit=5', function(data){
		for (item in data) {
			let para = document.createElement("p");
			para.innerHTML = `Post #${data[item].id}: ${data[item].title.toUpperCase()} : ${data[item].body}`
			document.getElementById("listOne").appendChild(para);
		}
	});
}

// 2) Get post with id of 10
const getWithIdOf10 = function() {
	return $.get('http://jsonplaceholder.typicode.com/posts/10', function(data){
		let para = document.createElement("p");
		para.innerHTML = `${data.title.toUpperCase()} : ${data.body}`
		document.getElementById("listOne").appendChild(para);
	});
}

// 3) Get the comments from post with id of 12
const getCommentsFromPost12 = function() {
	return $.get('http://jsonplaceholder.typicode.com/post/12/comments', function(data){
		for (item in data) {
			let para = document.createElement("p");
			para.innerHTML = `Comment # ${data[item].id}: ${data[item].name.toUpperCase()} ( ${data[item].email} ) : ${data[item].body}`
			document.getElementById("listOne").appendChild(para);
		}
	});
}

// 4) Get all the posts from user with id of 2
const getPostsFromUser2 = function() {
	return $.get('http://jsonplaceholder.typicode.com/user/2/posts', function(data){
		for (item in data) {
			let para = document.createElement("p");
			para.innerHTML = `Post #${data[item].id}: ${data[item].title.toUpperCase()} : ${data[item].body}`
			document.getElementById("listOne").appendChild(para);
		}
	});
}


// 5) Create a new post and log the id generated for it by the server
const createNewPost = function() {
	return $.post('http://jsonplaceholder.typicode.com/posts',{
		userId: 1,
		title: "My New Post",
		body: "This is the body"
	}, function(data){
		let para = document.createElement("p");
		para.innerHTML = `New post was created with ID #${data.id}!`
		document.getElementById("listOne").appendChild(para);
	})
}


// 6) Replace the post with id of 12
const replacePost12 = function() {
	return $.ajax({
		method: 'PUT',
		url: 'http://jsonplaceholder.typicode.com/posts/12',
		data: {
			userId: 1,
			title: "New Post",
			body: "This post replaced the post with ID #12."
		},
		complete: function(response){
			let para = document.createElement("p");
			para.innerHTML = `${response.responseJSON.title.toUpperCase()} : ${response.responseJSON.body}`
			document.getElementById("listOne").appendChild(para);
		}
	})
}


// 7) Update the title field of the post with id of 12
const updatePost12Title = function () {
	return $.ajax({
		method: 'PATCH',
		url: 'http://jsonplaceholder.typicode.com/posts/12',
		data: {
		title: "patched it"
		},
			complete: function(response){
				let para = document.createElement("p");
				para.innerHTML = `${response.responseJSON.title.toUpperCase()} : ${response.responseJSON.body}`
				document.getElementById("listOne").appendChild(para);
			}
		})
}


// 8) Delete the post with id of 12
const deletePost12 = function(){
	return $.ajax({
		method: 'DELETE',
		url: 'http://jsonplaceholder.typicode.com/posts/12',
		complete: function(response){
			let para = document.createElement("p");
			para.innerHTML = `Post #12 was successfully deleted! Status: ${response.statusText}`
			document.getElementById("listOne").appendChild(para);

		}
	})
}

// 1) Get all posts
const listOfAllPosts = function() {
	return $.get('http://jsonplaceholder.typicode.com/posts?_limit=5', function(data){
		console.log(data);
		for (item in data) {
			let para = document.createElement("p");
			para.setAttribute("id", data[item].id)
			para.innerHTML = `Post #${data[item].id}: ${data[item].title.toUpperCase()} : ${data[item].body}`
			document.getElementById("listOne").appendChild(para);
			para.addEventListener("click", getCommentsFromPost.bind(this, data[item].id), false);
			
		}

	});
}

const getCommentsFromPost = function(postId) {
	const url = 'http://jsonplaceholder.typicode.com/post/'
	return $.get(url + postId + '/comments', function(data){
		for (item in data) {
			let para2 = document.createElement("p");
			para2.setAttribute("class", "comment")
			para2.innerHTML = `Comment # ${data[item].id}: ${data[item].name.toUpperCase()} ( ${data[item].email} ) : ${data[item].body}`
			document.getElementById(postId).appendChild(para2);
		}
	});
}

