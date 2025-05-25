export {displayMenu};

function displayMenu() {
    let contentDiv = document.getElementById("content");
    let menuDiv = document.createElement("div");
    let menu = document.createElement("div");

    let menuHeader = document.createElement("h1");
    let menuHr = document.createElement("hr");

    let matchaH3 = document.createElement("h3");
    let matchaPara = document.createElement("p");
    let matchaPrice = document.createElement("h3");
    let matchaHr = document.createElement("hr");

    let coldbrewH3 = document.createElement("h3");
    let coldbrewPara = document.createElement("p");
    let coldbrewPrice = document.createElement("h3");
    let coldbrewHr = document.createElement("hr");

    let blacksesameH3 = document.createElement("h3");
    let blacksesamePara = document.createElement("p");
    let blacksesamePrice = document.createElement("h3");
    let blacksesameHr = document.createElement("hr");

    menuDiv.className = "menuDiv";
    menu.className = "menu";
    menuHeader.className = "menuHeader";
    menuHr.className = "menuHr";

    menuHeader.textContent = "MENU";

    matchaH3.textContent = "Matcha Latte";
    matchaPara.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum harum itaque dicta natus est maiores.";
    matchaPrice.textContent = "$6";

    coldbrewH3.textContent = "Cold Brew";
    coldbrewPara.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum harum itaque dicta natus est maiores.";
    coldbrewPrice.textContent = "$5";

    blacksesameH3.textContent = "Black Sesame Latte";
    blacksesamePara.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum harum itaque dicta natus est maiores.";
    blacksesamePrice.textContent = "$6";

    menu.appendChild(menuHeader);
    menu.appendChild(menuHr);

    menu.appendChild(matchaH3);
    menu.appendChild(matchaPara);
    menu.appendChild(matchaPrice);
    menu.appendChild(matchaHr);

    menu.appendChild(coldbrewH3);
    menu.appendChild(coldbrewPara);
    menu.appendChild(coldbrewPrice);
    menu.appendChild(coldbrewHr);

    menu.appendChild(blacksesameH3);
    menu.appendChild(blacksesamePara);
    menu.appendChild(blacksesamePrice);
    menu.appendChild(blacksesameHr);

    menuDiv.appendChild(menu);
    contentDiv.appendChild(menuDiv);
}