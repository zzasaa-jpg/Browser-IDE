export function Sidebar_Icons({ openFolder, activeTab, setActiveTab }) {
    const handleClick = (tab) => {
        setActiveTab(tab);

        if (tab === "explorer") {
            openFolder();
        }
    };

    return (
        <div className="Sidebar_icons">
            <ul className="Sidebar_list">
                <li className={activeTab === "explorer" ? "active" : ""} onClick={() => { handleClick("explorer") }}><img src="src\assets\Icons_sidebar\document-text-outline.svg" alt="icon" height="20" width="20" /></li>
                <li className={activeTab === "search" ? "active" : ""}
                    onClick={() => handleClick("search")}><img src="src\assets\Icons_sidebar\search-outline.svg" alt="icon" height="20" width="20" /></li>
                <li className={activeTab === "git" ? "active" : ""}
                    onClick={() => handleClick("git")}><img src="src\assets\Icons_sidebar\git-branch-outline.svg" alt="icon" height="20" width="20" /></li>
                <li className={activeTab === "play" ? "active" : ""}
                    onClick={() => handleClick("play")}><img src="src\assets\Icons_sidebar\play-outline.svg" alt="icon" height="20" width="20" /></li>
                <li className={activeTab === "menu" ? "active" : ""}
                    onClick={() => handleClick("menu")}><img src="src\assets\Icons_sidebar\grid-outline.svg" alt="icon" height="20" width="20" /></li>
            </ul>
            <div className="setting_icon"><img src="src\assets\Icons_sidebar\settings-outline.svg" alt="icon" height="20" width="20" /></div>
        </div>
    );
};