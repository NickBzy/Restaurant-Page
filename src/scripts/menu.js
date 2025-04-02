import Lumpiang from '../assets/img/lumpia.jpg'
import BBQ from '../assets/img/bbq.jpg'
import Kinilaw from '../assets/img/ceviche.jpg'
import Lechon from '../assets/img/lechon.jpg'
import Adobo from '../assets/img/adobo.jpg'
import Kare from '../assets/img/kare-kare.jpeg'
import Leche from '../assets/img/leche-flan.jpg'
import Halo from '../assets/img/halo-halo.jpg'
import Bibingka from '../assets/img/bibingka.jpg'

export function loadMenuPage() {
    const content = document.querySelector("#content");

    const menuPage = document.createElement("div");
    menuPage.classList.add("menu");

    const menuHeader = document.createElement("h1");
    menuHeader.innerText = "MENU";
    menuPage.appendChild(menuHeader);

    const appetizersList = document.createElement("ul");
    appetizersList.classList.add("appetizers");
    const appetizersHeader = document.createElement("h3");
    appetizersHeader.innerText = "APPETIZERS";

    const appetizers_1 = document.createElement("div");
    const appetizers_1_img = document.createElement("img");
    appetizers_1_img.classList.add("img-odd");
    appetizers_1_img.src = Lumpiang;
    appetizers_1_img.alt = "lumpiang"
    const appetizers_1_item = document.createElement("li");
    appetizers_1_item.innerText = "Lumpiang Shanghai";
    appetizers_1.appendChild(appetizers_1_img);
    appetizers_1.appendChild(appetizers_1_item);

    appetizersList.appendChild(appetizersHeader);
    appetizersList.appendChild(appetizers_1);

    const appetizers_2 = document.createElement("div");
    const appetizers_2_img = document.createElement("img");
    appetizers_2_img.classList.add("img-even");
    appetizers_2_img.src = BBQ;
    appetizers_2_img.alt = "bbq-skewers"
    const appetizers_2_item = document.createElement("li");
    appetizers_2_item.innerText = "BBQ Skewers";
    appetizers_2.appendChild(appetizers_2_img);
    appetizers_2.appendChild(appetizers_2_item);

    appetizersList.appendChild(appetizers_2);

    const appetizers_3 = document.createElement("div");
    const appetizers_3_img = document.createElement("img");
    appetizers_3_img.classList.add("img-odd");
    appetizers_3_img.src = Kinilaw;
    appetizers_3_img.alt = "ceviche"
    const appetizers_3_item = document.createElement("li");
    appetizers_3_item.innerText = "Kinilaw na Isda";
    appetizers_3.appendChild(appetizers_3_img);
    appetizers_3.appendChild(appetizers_3_item);

    appetizersList.appendChild(appetizers_3);

    menuPage.appendChild(appetizersList);

    const mainList = document.createElement("ul");
    mainList.classList.add("main");
    const mainHeader = document.createElement("h3");
    mainHeader.innerText = "MAIN";

    const main_1 = document.createElement("div");
    const main_1_img = document.createElement("img");
    main_1_img.classList.add("img-odd");
    main_1_img.src = Lechon;
    main_1_img.alt = "lechon"
    const main_1_item = document.createElement("li");
    main_1_item.innerText = "Lechon Kawali";
    main_1.appendChild(main_1_img);
    main_1.appendChild(main_1_item);

    mainList.appendChild(mainHeader);
    mainList.appendChild(main_1);

    const main_2 = document.createElement("div");
    const main_2_img = document.createElement("img");
    main_2_img.classList.add("img-even");
    main_2_img.src = Adobo;
    main_2_img.alt = "adobo"
    const main_2_item = document.createElement("li");
    main_2_item.innerText = "Adobo";
    main_2.appendChild(main_2_img);
    main_2.appendChild(main_2_item);

    mainList.appendChild(main_2);

    const main_3 = document.createElement("div");
    const main_3_img = document.createElement("img");
    main_3_img.classList.add("img-odd");
    main_3_img.src = Kare;
    main_3_img.alt = "kare-kare"
    const main_3_item = document.createElement("li");
    main_3_item.innerText = "Kare-Kare";
    main_3.appendChild(main_3_img);
    main_3.appendChild(main_3_item);

    mainList.appendChild(main_3);

    menuPage.appendChild(mainList);

    const dessertsList = document.createElement("ul");
    dessertsList.classList.add("desserts");
    const dessertsHeader = document.createElement("h3");
    dessertsHeader.innerText = "DESSERTS";

    const desserts_1 = document.createElement("div");
    const desserts_1_img = document.createElement("img");
    desserts_1_img.classList.add("img-odd");
    desserts_1_img.src = Leche;
    desserts_1_img.alt = "leche-flan"
    const desserts_1_item = document.createElement("li");
    desserts_1_item.innerText = "Leche Flan";
    desserts_1.appendChild(desserts_1_img);
    desserts_1.appendChild(desserts_1_item);

    dessertsList.appendChild(dessertsHeader);
    dessertsList.appendChild(desserts_1);

    const desserts_2 = document.createElement("div");
    const desserts_2_img = document.createElement("img");
    desserts_2_img.classList.add("img-even");
    desserts_2_img.src = Halo;
    desserts_2_img.alt = "halo-halo"
    const desserts_2_item = document.createElement("li");
    desserts_2_item.innerText = "Halo-Halo";
    desserts_2.appendChild(desserts_2_img);
    desserts_2.appendChild(desserts_2_item);

    dessertsList.appendChild(desserts_2);

    const desserts_3 = document.createElement("div");
    const desserts_3_img = document.createElement("img");
    desserts_3_img.classList.add("img-odd");
    desserts_3_img.src = Bibingka;
    desserts_3_img.alt = "bibingka"
    const desserts_3_item = document.createElement("li");
    desserts_3_item.innerText = "Bibingka";
    desserts_3.appendChild(desserts_3_img);
    desserts_3.appendChild(desserts_3_item);

    dessertsList.appendChild(desserts_3);

    menuPage.appendChild(dessertsList);

    content.appendChild(menuPage);
}