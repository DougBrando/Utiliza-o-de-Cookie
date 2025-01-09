function setCookie() {
    const name = document.getElementById("name").value;
    const days = 7;
    const date = new Date();
    date.setTime(date.getTime() + (days*24*60*60*1000)); 
    const expires = 'expires=' + date.toUTCString();
    document.cookie = `username=${name}; ${expires}; path=/`; 
    displayWelcomeMessage();
}

function getCookie(name){
    const nameEQ = name + "=";
    const decodedCookiie = decodeURIComponent(document.cookie);
    const cookieArray = decodedCookiie.split(';');
    for (let i = 0; i < cookieArray.length; i++) {
        const cookie = cookieArray[i].trim();
        while (cookie.charAt(0) == ' ') {
            cookie = cookie.substring(1);
        }
            if (cookie.indexOf(nameEQ) == 0) {
                return cookie.substring(nameEQ.length, cookie.length);
                }
        }
            return null;
}


function displayWelcomeMessage(){
    const user = getCookie('username');
    const welcomeMessage = document.getElementById('welcomeMessege');
    if (user != null) {
        welcomeMessage.innerHTML = `Bem vindo de volta, ${user}!`;
    } else{
        welcomeMessage.innerHTML = `Bem vindo!`;
    }
}

function deleteCookie(){
    document.cookie = "username=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    displayWelcomeMessage();
}
window.onload = displayWelcomeMessage
