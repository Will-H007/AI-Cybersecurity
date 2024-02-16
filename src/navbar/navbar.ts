
export default function navbar(element: HTMLDivElement, tags: string[]) {

    //  Logo
    const logo = document.createElement('div');
    logo.setAttribute("id", "logo")
    logo.textContent = "Ubiquitous"

    //  Tags
    const tagsContainer = document.createElement('div');
    tagsContainer.classList.add('tags');

    tags.forEach(tagName => {
        const tagElement = document.createElement('div');
        tagElement.textContent = tagName;
        tagElement.classList.add('tag'); // You can add a class for styling
        tagsContainer.appendChild(tagElement);
    });

    // Append the tags container to the provided element
    element.appendChild(logo);
    element.appendChild(tagsContainer);
}
