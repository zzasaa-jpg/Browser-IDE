# Browser IDE v0.0.1

## IDE v1
- Create, Read, Update, Delete file operations(Edit the file).
- Dynamic folder and file rendering(Pick the file).
- Support to general file formats.

## File formats
File format name  | Status  | Behavior                    |
------------------|---------|-----------------------------|
.img              | pending | Open and edit as plain text |
.txt              | pending | Open and edit as plain text |
.mp4              | pending | Open and edit as plain text |
.mp3              | pending | Open and edit as plain text |
.pdf              | pending | Open and edit as plain text |
.csv              | pending | Open and edit as plain text |
.html             | pending | Open and edit as plain text |
.md               | pending | Open and edit as plain text |
**More file formats in future...**

## IDE file system or file explorer
The IDE run by Browser file system api, but some browser did not support the file system api. Because IDE run by **provider** first one is **Browser provider(File system api support)** second one is **Server provider(File system api does not support)**.

## File system HLD
<img src="Docs\File_sys_architecture_HLD(dark_mode).png">

---

## Key summary
- IDE file system execute by provider. The file system data where did come from does not care file system. Because Browser & Server provider return same data structure and response of Java script object notation.
- The Browser & Server provider have same api i.e.: readDirectory(path) -> (Browser provider), readDirectory(path) -> (Server provider).
- Work flow pipe line of File system or file explorer(Server provider) of IDE(v1).

- > User select **Root folder** --> List the all content of root folder --> User can independently choose the woking directory --> Render the woking directory data.
- > As always same in Browser provider work flow pipe line by **File system api**.
- Server provider popup have breadcrumb file navigation, undo redo for avoid repeated server fetches, render options to display only directories, only files or both.

## Editor of IDE
The **heart of IDE** editor is not done at all. Editor is pending.