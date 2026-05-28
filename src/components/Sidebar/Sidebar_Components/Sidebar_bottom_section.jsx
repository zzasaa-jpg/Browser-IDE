export function Sidebar_bottom_section(){
    return (
        <div className="bottom_section_sidebar">
            <div className="bottom_section_sidevar_left_div">
                <div><img src="src\assets\Icons_sidebar\git-branch-outline.svg" alt="icon" height="20" width="20" /></div>
                <select name="branch" className="select_tag">
                    <option value="main">main</option>
                    <option value="branch">branch</option>
                </select>
            </div>
            <div className="bottom_section_sidevar_right_div">
                <div>
                    <img src="src\assets\Bottom_icons_sidebar\close-circle-outline.svg" alt="icon" height="20" width="20" />
                    <p>0</p>
                </div>
                <div>
                    <img src="src\assets\Bottom_icons_sidebar\warning-outline.svg" alt="icon" height="20" width="20" />
                    <p>0</p>
                </div>
                <div>
                    <img src="src\assets\Bottom_icons_sidebar\radio-outline.svg" alt="icon" height="20" width="20" />
                    <p>0</p>
                </div>
            </div>
        </div>
    );
};