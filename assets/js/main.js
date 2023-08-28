function toggleResetBtn() {
    const resetBtn = document.querySelector('.reset');
    resetBtn.classList.toggle('active');
}

function switchBanner(name) {
    const banner = document.getElementById('banner');

    if (!banner.classList.contains(name)) {
        banner.className = 'banner';
        banner.classList.add(name);

        toggleResetBtn();
    }

    return;
}

function resetBanner() {
    const banner = document.getElementById('banner');
    banner.className = 'banner';
    toggleResetBtn();
}
