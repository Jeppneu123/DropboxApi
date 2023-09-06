const accessToken = "Bearer Hej Michael <3";

document.getElementById("fetchButton").addEventListener("click", () => {
    fetchFilesAndFolders();
});

async function fetchFilesAndFolders() {
    console.log("Hello")

    try {
        const response = await fetch("https://api.dropboxapi.com/2/files/list_folder", {
            method: "POST",
            headers: {
                "Authorization": accessToken,
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                path: "/Obligatorisk_Opgave/testMappe",
                recursive: false,
                include_media_info: false,
                include_deleted: false,
                include_has_explicit_shared_members: false,
                include_mounted_folders: true
            })
        });

        if (response.ok) {
            const data = await response.json();
            displayFilesAndFolders(data.entries);
        } else {
            console.error("An error occurred while fetching data.");
        }
    } catch (error) {
        console.error("An error occurred:", error);
    }
}

function displayFilesAndFolders(entries) {
    const fileListElement = document.getElementById("fileList");
    fileListElement.innerHTML = "";

    if (entries.length === 0) {
        fileListElement.innerHTML = "<p>Ingen filer eller mapper fundet.</p>";
        return;
    }

    const list = document.createElement("ul");
    entries.forEach(entry => {
        const listItem = document.createElement("li");
        listItem.textContent = entry.name;
        list.appendChild(listItem);
    });

    fileListElement.appendChild(list);
}