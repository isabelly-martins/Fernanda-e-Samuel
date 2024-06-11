document.addEventListener("DOMContentLoaded", function() {
    const images = ['fe1.jpg', 'fe2.jpg', 'fe3.jpg', 'fe4.jpg', 'fe5.jpg', 'fe6.jpg', 'fe7.jpg'];
    let currentIndex = 0;

    function changeImage() {
        const imgElement = document.getElementById('photo');
        currentIndex = (currentIndex + 1) % images.length;
        imgElement.src = images[currentIndex];
    }

    document.getElementById('photo').addEventListener('click', changeImage);
});
