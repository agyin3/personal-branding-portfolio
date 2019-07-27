{
    const open = document.getElementById('open');
    const close = document.getElementById('close');
    const overlay = document.getElementById('offer-overlay');
    const info = document.getElementById('info');
    const infoContainer = document.getElementById('info-container');
    const container = document.getElementById('container');

    function openMenu() {
        overlay.classList.remove('hidden');
        info.classList.add('hidden');
        container.style.alignItems = 'center';
        infoContainer.classList.add('hidden');
    }

    function closeMenu() {
        overlay.classList.add('hidden');
        info.classList.remove('hidden');
        container.style.alignItems = 'flex-start';
        infoContainer.classList.remove('hidden');
    }

    open.addEventListener('click', openMenu);
    close.addEventListener('click', closeMenu);
}