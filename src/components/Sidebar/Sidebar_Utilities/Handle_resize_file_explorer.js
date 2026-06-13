export function resize_sidebar() {
    const sidebar = document.querySelector(".Sidebar_top_btns_and_ResizeHandle_parent_div");
    sidebar.addEventListener("pointerdown", startResize);
}

function startResize() {
    document.addEventListener("pointermove", resize);
    document.addEventListener("pointerup", stopResize);
}

function resize(e) {
    const sidebar = document.querySelector(".Sidebar_top_btns_and_ResizeHandle_parent_div");
    let newWidth = e.clientX;
    if (newWidth < 226) newWidth = 226;
    if (newWidth > 700) newWidth = 700;
    sidebar.style.width = `${newWidth}px`;
}

function stopResize() {
    document.removeEventListener("pointermove", resize);
}