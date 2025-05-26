function toggleInfo(id) {
    const panels = document.querySelectorAll('.info');
    panels.forEach(p => p.style.display = 'none');
    const info = document.getElementById(id);
    info.style.display = 'block';
}