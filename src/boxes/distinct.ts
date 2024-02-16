export default function box(element: HTMLDivElement, innerHeading: string, innerDescription: string) {
    // Create the box image element
    const figure = document.createElement('div');
    figure.classList.add("box_image");
    element.appendChild(figure);

    // Create the box text element
    const text = document.createElement('div');
    text.classList.add("box_text");
    text.innerHTML = `<div class='inner_heading'>${innerHeading}</div><div class='inner_description'>${innerDescription}</div>`;
    element.appendChild(text);
}
