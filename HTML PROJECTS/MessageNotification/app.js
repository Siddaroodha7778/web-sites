const btnMsg = document.getElementById("btnMsg");
const divWrapper = document.getElementById("wrapper");

btnMsg.addEventListener('click', () => {
    generateNotification();
});

function generateNotification() {
    const notification = document.createElement('div');
    notification.classList.add('msg');

    notification.innerText = "Hi There, I am a Message!";
    divWrapper.appendChild(notification);

    setTimeout(()=>{
        notification.remove();
    }, 5000);
}