const livecam = document.getElementById('livecam')

navigator.mediaDevices.getUserMedia({ video: true})
.then(stream => {
    livecam.srcObject = stream;
})
.catch(error => {
    console.error('Error accesing camera:', error);
});
