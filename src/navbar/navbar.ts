export default function navbar(element: HTMLDivElement, tags: string[]) {
    const tagsContainer = document.createElement('div');

    // Create and append tags to the container
    tags.forEach(tagName => {
        const tagElement = document.createElement('div');
        tagElement.textContent = tagName;
        tagElement.classList.add('tag'); // You can add a class for styling
        tagsContainer.appendChild(tagElement);
    });

    // Append the tags container to the provided element
    element.appendChild(tagsContainer);
}
