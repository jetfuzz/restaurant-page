export {displayMenu};

function displayMenu() {
    let contentDiv = document.getElementById("content");
    let menuDiv = document.createElement("div");
    let menu = document.createElement("div");
    let menuHeader = document.createElement("h1");
    let menuHr = document.createElement("hr");

    menuDiv.className = "menuDiv";
    menu.className = "menu";
    menuHeader.className = "menuHeader";
    menuHr.className = "menuHr";

    menuHeader.textContent = "MENU";

    menu.appendChild(menuHeader);
    menu.appendChild(menuHr);

    const menuItems = [
        {
            name: "Matcha Latte",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum harum itaque dicta natus est maiores.",
            price: "$6"
        },
        {
            name: "Cold Brew",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum harum itaque dicta natus est maiores.",
            price: "$5"
        }, 
        {
            name: "Black Sesame Latte",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum harum itaque dicta natus est maiores.",
            price: "$6"
        }
    ]

    menuItems.forEach(item => {
        const nameElement = document.createElement("h3");
        nameElement.textContent = item.name;

        const descElement = document.createElement("p");
        descElement.textContent = item.desc;

        const priceElement = document.createElement("h3");
        priceElement.textContent = item.price;

        const hrElement = document.createElement("hr");
        hrElement.className = "menuHr";

        menu.appendChild(nameElement);
        menu.appendChild(descElement);
        menu.appendChild(priceElement);
        menu.appendChild(hrElement);
    });

    menuDiv.appendChild(menu);
    contentDiv.appendChild(menuDiv);
}