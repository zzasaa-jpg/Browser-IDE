export function handle_active_content(element) {
    const element_tag = document.querySelector(`.${element}`);
    element_tag.style.border = "1px solid black";
    if (element_tag.classList.contains("Sidebar_top_btns_and_ResizeHandle_parent_div")) {
        element_tag.style.borderTopRightRadius = "15px";
    }
}