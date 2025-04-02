export function reset() {
    const content = document.querySelector("#content");
    content.style ="";
    console.log("before: " + content.innerHTML);
    while(content.children.length >= 1){
        content.children[0].remove();
    }
    console.log("after: " + content.innerHTML);
}