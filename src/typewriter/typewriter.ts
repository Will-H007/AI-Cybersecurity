export default function typeWriter(element: HTMLDivElement) {
    var i = 0;
    var txt = 'Welcome to the New Era'; /* The text */
    var speed = 50; /* The speed/duration of the effect in milliseconds */


    // Check if the element exists before proceeding
    if (element) {
        // Use a closure to encapsulate the variable i
        function type() {
            if (i < txt.length) {
                element!.innerHTML += txt.charAt(i);
                i++;
                setTimeout(type, speed);
            }
        }

        // Call the typing function to initiate the effect
        type();
    } else {
        console.error("Element with id 'typewriter' not found.");
    }
}
