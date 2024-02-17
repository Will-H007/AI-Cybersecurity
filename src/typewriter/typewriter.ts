export default function typeWriter(element: HTMLDivElement, txt: string, speed: number): Promise<void> {
    return new Promise((resolve, reject) => {
        var i = 0;
       

        // Check if the element exists before proceeding
        if (element) {
            // Use a closure to encapsulate the variable i
            function type() {
                if (i < txt.length) {
                    element.innerHTML += txt.charAt(i);
                    i++;
                    setTimeout(type, speed);
                } else {
                    // Resolve the Promise when typing is complete
                    resolve();
                }
            }
            // Call the typing function to initiate the effect
            type();
            
        } else {
            // Reject the Promise if the element is not found
            reject(new Error("Element not found"));
        }
    });
}
