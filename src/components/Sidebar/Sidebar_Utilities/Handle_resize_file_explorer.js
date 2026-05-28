export function resize_sidebar() {
    const sidebar = document.querySelector(".Sidebar_top_section");
    sidebar.addEventListener("pointerdown", startResize);
}

function startResize() {
    document.addEventListener("pointermove", resize);
    document.addEventListener("pointerup", stopResize);
}

function resize(e) {
    const sidebar = document.querySelector(".Sidebar_top_section");
    let newWidth = e.clientX;
    if (newWidth < 270) newWidth = 270;
    if (newWidth > 700) newWidth = 700;
    sidebar.style.width = `${newWidth}px`;
}

function stopResize() {
    document.removeEventListener("pointermove", resize);
}