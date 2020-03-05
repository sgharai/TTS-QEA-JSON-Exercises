fetch('http://jsonplaceholder.typicode.com/users')
    .then(function(response) {
        return response.json();
    })
    
    .then(function(data) {
        usernames = [];
        for (user in data) {
            usernames.push(data[user].username)
        }


    })
    

const submitButton = document.getElementById("submitButton")

submitButton.onclick = function onSubmit(){
    event.preventDefault();

    let inputtedUsername = document.getElementById("username").value
    let loginMessage = document.createElement ("p")
    if (usernames.includes(inputtedUsername)) {
        loginMessage.innerHTML = "Login successful. Redirecting you to user's homepage..." 
        setTimeout(function(){
            window.location.href = 'homepage.html'
        }, 1000)
    } else {
        loginMessage.innerHTML = "Hmm...no user with that username was found. Try again!"
        setTimeout(function(){
            loginMessage.innerHTML = ""
            location.reload()
        }, 2000) 
    }

    document.getElementById("response").appendChild(loginMessage)

    fetch('https://jsonplaceholder.typicode.com/users/')
        .then(response => response.json())
        .then(users => {
            let inputtedUser = document.getElementById("username").value

            users.forEach (function(user){
                if (user.username == inputtedUser) {
                    localStorage.setItem("currentUser", JSON.stringify(user))
                }
            })
            console.log(localStorage.getItem("currentUser"))
        });


}





