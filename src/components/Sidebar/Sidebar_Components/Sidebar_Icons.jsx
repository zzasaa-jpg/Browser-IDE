export function Sidebar_Icons({openFolder}) {
    return (
        <div className="Sidebar_icons">
            <ul className="Sidebar_list">
                <li onClick={openFolder}><img src="src\assets\Icons_sidebar\document-text-outline.svg" alt="icon" height="20" width="20" /></li>
                <li><img src="src\assets\Icons_sidebar\search-outline.svg" alt="icon" height="20" width="20" /></li>
                <li><img src="src\assets\Icons_sidebar\git-branch-outline.svg" alt="icon" height="20" width="20" /></li>
                <li><img src="src\assets\Icons_sidebar\play-outline.svg" alt="icon" height="20" width="20" /></li>
                <li><img src="src\assets\Icons_sidebar\grid-outline.svg" alt="icon" height="20" width="20" /></li>
            </ul>
            <div className="setting_icon"><img src="src\assets\Icons_sidebar\settings-outline.svg" alt="icon" height="20" width="20" /></div>
        </div>
    );
};