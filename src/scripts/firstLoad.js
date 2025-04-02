export function firstLoad() {
    //Home page code
    const content = document.querySelector("#content");
    content.innerText = "";

    const mainHero = document.createElement("div");
    mainHero.classList.add("main-hero");
    const restaurantName_1 = document.createElement("h1");
    restaurantName_1.innerText = "Sarap";
    const restaurantName_2 = document.createElement("h1");
    restaurantName_2.innerText = "Restaurant";

    mainHero.appendChild(restaurantName_1);
    mainHero.appendChild(restaurantName_2);
    content.appendChild(mainHero);


    const home_2 = document.createElement("div");
    home_2.classList.add("home-2");
    const summary = document.createElement("div");
    summary.classList.add("summary");
    const summaryHeader = document.createElement("h3");
    summaryHeader.innerText = "IN THE MONTREAL CULINARY SCENE SINCE 2000";
    const summaryPara = document.createElement("p");
    summaryPara.innerText = "Sarap is a high-end Filipino restaurant where tradition meets elegance. We bring the rich, bold flavors of the Philippines to life with premium ingredients and masterful craftsmanship. Indulge in a luxurious dining experience that celebrates the heart of Filipino cuisine. 🇵🇭✨";
    summary.appendChild(summaryHeader);
    summary.appendChild(summaryPara);
    home_2.appendChild(summary);
    content.appendChild(home_2);


    const home_3 = document.createElement("div");
    home_3.classList.add("home-3");
    const experienceCTA = document.createElement("div");
    const experiencePara = document.createElement("p");
    experiencePara.innerText = "Experience the rich and vibrant flavors of the Philippines at Sarap, where tradition meets elegance. Indulge in expertly crafted dishes made with the finest ingredients, all served in a luxurious ambiance.";
    const experienceButton = document.createElement("button");
    experienceButton.innerText = "MENU";
    experienceButton.classList.add("menu-btn");
    experienceCTA.appendChild(experiencePara);
    experienceCTA.appendChild(experienceButton);
    home_3.appendChild(experienceCTA);
    content.appendChild(home_3);
}
