// Add your code here
function submitData(userName, userEmail){
    const userDetails = {
        name: userName,
        email: userEmail
    }
    const configurationObject = {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify(userDetails)
    }
    return fetch('http://localhost:3000/users', configurationObject)
    .then(resp => resp.json())
    .then(json => appendToDom(json))
    .catch(error => {
        document.body.innerHTML += `<p>Error: ${error.message}<p>`
    })

    function appendToDom(object){
        const id = object.id
        document.body.innerHTML += `<p>${id}<p>`
    }
}