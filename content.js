let iframe=document.getElementById("mppFrame");
console.log(iframe.contentWindow.document)
const button = document.createElement('button');
button.textContent = "Click Me!";
button.style.position = 'fixed';
button.style.top = '10px';
button.style.right = '10px';
button.style.zIndex = 1000;

// Append the button to the body
iframe.contentWindow.document.appendChild(button);
// document.body.appendChild(button);

// Add a click event listener
button.addEventListener('click', () => {
    alert('Button Clicked!');
});