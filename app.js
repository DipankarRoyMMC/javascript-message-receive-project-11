const messageIn = document.querySelector('#messageIn');
const sendBtn = document.querySelector('#sendMsg');
const messageOut = document.querySelector('#messageOut');

sendBtn.addEventListener('click', sendText);

function sendText(){
    let content = messageIn.value;
    // console.log(content);

    if(content === ''){
        alert('Please Enter something Here');
    } else{
        messageOut.innerHTML = content;
        messageIn.value = '';
    }

}