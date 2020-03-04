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


function onSubmit(){
    event.preventDefault();

    let inputtedUsername = document.getElementById("username").value
    let loginMessage = document.createElement ("p")
    if (usernames.includes(inputtedUsername)) {
        loginMessage.innerHTML = "Login successful. Click below to go to User Homepage!" 
    } else {
        loginMessage.innerHTML = "Hmm...no user with that username was found. Try again!" 
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





