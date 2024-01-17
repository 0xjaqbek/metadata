document.addEventListener("DOMContentLoaded", function () {
    const generateMetadataButton = document.getElementById("generate-metadata");
    const downloadLink = document.getElementById("download-link");
    const metadataDownload = document.getElementById("metadata-download");

    generateMetadataButton.addEventListener("click", () => {
        // Get the values from the input fields
        const imageLink = document.getElementById("image-link").value;
        const name = document.getElementById("name").value;
        const description = document.getElementById("description").value;

        // Define and initialize the attributes array
        const attributes = [];

        // Retrieve the values of the trait name and value fields
        const trait1Name = document.getElementById("trait1-name").value;
        const trait1Value = document.getElementById("trait1-value").value;
        const trait2Name = document.getElementById("trait2-name").value;
        const trait2Value = document.getElementById("trait2-value").value;

        // Check if the trait name and value are not empty, and add them to the attributes array
        if (trait1Name && trait1Value) {
            attributes.push({
                name: trait1Name,
                value: trait1Value
            });
        }

        if (trait2Name && trait2Value) {
            attributes.push({
                name: trait2Name,
                value: trait2Value
            });
        }

        const metadata = {
            name: name,
            description: description,
            image: imageLink,
            attributes: attributes,
        };

        const jsonString = JSON.stringify(metadata, null, 2);
        const blob = new Blob([jsonString], { type: "application/json" });
        const dataURL = URL.createObjectURL(blob);

        metadataDownload.href = dataURL;
        downloadLink.style.display = "block";
    generateMetadataButton.style.display = "none";

    });
});
