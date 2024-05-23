document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('nav ul li a');

    navLinks.forEach(link => {
        link.addEventListener('click', event => {
            event.preventDefault(); // Sayfa yenilenmesini önler

            const page = event.target.getAttribute('href'); // Tıklanan bağlantının hedefini alır
            window.location.href = page; // Yeni sayfaya yönlendirir
        });
    });
});
