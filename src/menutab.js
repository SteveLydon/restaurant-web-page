export function createContentDiv(){
    let content = document.getElementById('content');
    let h1 = document.createElement('h1');

    for(let child of content.children){
        child.remove();
    }

    h1.textContent = "MENU";

    content.appendChild(h1);
}