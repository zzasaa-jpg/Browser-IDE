export async function handle_New_Folder_or_File(currentDir, createFolder, createFile, buildTree, setFiles, file_or_folder) {
    if (!currentDir) return;

    const no_folder_mes_div = document.querySelector(".no_folder_mes");
    const create_folder_div = document.querySelector(".create_folder");
    const create_file_div = document.querySelector(".create_file");
    create_folder_div.style.pointerEvents = "none";
    create_file_div.style.pointerEvents = "none";

    const new_input = document.createElement("input");
    new_input.classList.add("folder_or_file_name_input");
    new_input.name = "folder_or_file_name_input";
    new_input.placeholder = "Folder or File name...";

    new_input.focus();

    const finalizeCreation = async () => {
        const name = new_input.value.trim();

        // Name must not be empty
        if (!name) {
            create_folder_div.style.pointerEvents = "auto";
            create_file_div.style.pointerEvents = "auto";
            new_input.remove();
            return;
        }

        // Check for invalid characters
        const invalidChars = /[\\/:*?"<>|]/;
        if (invalidChars.test(name)) {
            alert("Folder name contains invalid characters.");
            create_folder_div.style.pointerEvents = "auto";
            create_file_div.style.pointerEvents = "auto";
            return;
        }

        try {
            if (file_or_folder == 0) {
                await createFolder(currentDir, name);
            } else {
                await createFile(currentDir, name);
            }
            const fileList = await buildTree(currentDir);
            setFiles(fileList);
        } catch (err) {
            create_folder_div.style.pointerEvents = "auto";
            create_file_div.style.pointerEvents = "auto";
            console.error("Failed to create folder:", err);
        } finally {
            create_folder_div.style.pointerEvents = "auto";
            create_file_div.style.pointerEvents = "auto";
            new_input.remove();
        }
    }

    new_input.addEventListener("keydown", (e) => {
        if (e.key === "Enter") {
            finalizeCreation();
        }
    });

    new_input.addEventListener("blur", () => {
        if (new_input.value.trim() !== "") {
            finalizeCreation();
        } else {
            create_folder_div.style.pointerEvents = "auto";
            create_file_div.style.pointerEvents = "auto";
            new_input.remove();
        }
    })

    no_folder_mes_div.prepend(new_input);
}