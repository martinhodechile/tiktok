let outfits = [
    {
        title: "Les accessoires essentiels pour améliorer ton style",
        image: "Les accessoires essentiels pour up ton style.jpg",
        items: [
            {
                name: "Casquette Polo Ralph Lauren",
                link: "https://www.zalando.fr/polo-ralph-lauren-unisex-casquette-black-mask-po252p003-q13.html",
                emoji: "🧢"
            },
            {
                name: "Lunettes Zign White",
                link: "https://www.zalando.fr/zign-unisex-lunettes-de-soleil-silver-coloured-zi154k02u-d11.html",
                emoji: "🥽"
            },
            {
                name: "Nike sling bag",
                link: "https://www.zalando.fr/nike-sportswear-essentials-unisex-sac-bandouliere-blackironstone-ni154h05b-q11.html",
                emoji: "🎒"
            }
        ]
    },
    {
        title: "Où trouver les meilleures chemises pour l'été",
        image: "Où trouver ses chemises pour l'été.jpg",
        items: [
            {
                name: "Chemise en lin Zegna Olive",
                link: "https://www.mrporter.com/en-ru/mens/product/zegna/clothing/plain-shirts/camp-collar-cotton-linen-and-silk-shirt/1647597293319440?cm_sp=homepage-_-feed-_-newness-WN-new-arrivals-all-global-web-product5-undefined-_-20-02-23",
                emoji: "👔"
            },
            {
                name: "Chemise en lin Zegna red striped",
                link: "https://www.zalando.fr/zign-unisex-lunettes-de-soleil-silver-coloured-zi154k02u-d11.html",
                emoji: "👔"
            },
            {
                name: "Chemise en lin Frescobol carioca Sand striped",
                link: "https://www.mrporter.com/en-kr/mens/product/frescobol-carioca/clothing/striped-shirts/roberto-camp-collar-striped-linen-shirt/38063312419412570",
                emoji: "👔"
            },
            {
                name: "Chemise en lin Frescobol carioca Rose pastel",
                link: "https://www.mrporter.com/en-fr/mens/product/frescobol-carioca/clothing/plain-shirts/angelo-camp-collar-linen-shirt/1647597294143092",
                emoji: "👔"
            }
        ]
    },
    {
        title: "Les asics EX89 en Promo",
        image: "Asics EX89.jpg",
        items: [
            {
                name: "Asics EX89",
                link: "https://allikestore.com/en-eu/products/asics-ex89-white-cream-1201a476-110?siteid=214131&source=webgains&wgexpiry=1717777910&wgu=10659_214131_16862419101585_3f750c6aac",
                emoji: "🥾"
            }
        ]
    },
    {
        title: "Les meilleurs sites pour des Jeans Loose Fit",
        image: "Les meilleures sites de Pants.jpg",
        items: [
            {
                name: "Boohooman Grey Jean",
                link: "https://www.boohooman.com/fr/jean-baggy-rigide-delave/BMM44954.html",
                emoji: "👖"
            },
            {
                name: "Boohooman Olive Jean",
                link: "https://www.boohooman.com/fr/jean-baggy-surteint/BMM25397.html",
                emoji: "👖"
            },
            {
                name: "Weekday Stained blue Jean",
                link: "https://www.weekday.com/en_eur/men/jeans/product.galaxy-loose-straight-jeans-blue.0970127027.html",
                emoji: "👖"
            },
            {
                name: "Weekday Chalk White Jean",
                link: "https://www.weekday.com/en_eur/men/jeans/product.galaxy-loose-straight-jeans-white.0970127025.html",
                emoji: "👖"
            },
            {
                name: "Weekday Black Jean",
                link: "https://www.weekday.com/en_eur/men/jeans/product.galaxy-loose-straight-jeans-black.0970127020.html",
                emoji: "👖"
            }
        ]
    },
       {
        title: "Outfit Old Money Olive part 1",
        image: "Outfit Old Money Chemise beige.jpg",
        items: [
            {
                name: "Chemise Zegna Olive",
                link: "https://www.mrporter.com/en-ru/mens/product/zegna/clothing/plain-shirts/camp-collar-cotton-linen-and-silk-shirt/1647597293319440?cm_sp=homepage-_-feed-_-newness-WN-new-arrivals-all-global-web-product5-undefined-_-20-02-23",
                emoji: "👔"
            },
            {
                name: "Chemise Olive H&M version",
                link: "https://www2.hm.com/fr_fr/productpage.0965257005.html",
                emoji: "👔"
            },
            {
                name: "Pantalon Gary en lin",
                link: "https://www.capelstore.fr/154231-pantalon-en-lin-cordon-gary-capel-grande-taille.html",
                emoji: "👖"
            },
            {
                name: "Chaussure Modanisa Marron à -60%",
                link: "https://m.modanisa.com/fr/transparent-chaussures-pour-hommes-2369-fast-step-8635771.html",
                emoji: "👞"
            }
        ]
    },
    // ...
];

let emojisList = ["👚", "👕", "👖", "👔", "👗", "👙", "🩱", "🩲", "🩳", "👘", "👠", "👡", "👢", "👞", "🥿", "🧦", "🧤", "🧣", "🎩", "🧢", "👒", "🎓", "⛑️", "🪖", "👑", "👝", "👛", "👜", "🎒", "🩴", "🧥", "🥼", "🥽", "🥾", "🥿", "🦺", "🩰", "🩲", "🩳", "🩹"];


function generateOutfits(outfitsToDisplay) {
    let outfitContainer = document.getElementById("outfit-container");

    // Supprime les outfits actuels
    outfitContainer.innerHTML = "";

    outfitsToDisplay.forEach(outfit => {
        let outfitElement = document.createElement("div");
        outfitElement.className = "outfit";

        let imageElement = document.createElement("img");
        imageElement.src = outfit.image;
        outfitElement.appendChild(imageElement);

        let detailsElement = document.createElement("div");
        detailsElement.className = "details";

        let titleElement = document.createElement("h2");
        titleElement.textContent = outfit.title;
        detailsElement.appendChild(titleElement);

        outfit.items.forEach(item => {
            let emojiElement = document.createElement("span");
            emojiElement.textContent = item.emoji;
            detailsElement.appendChild(emojiElement);
        
            let linkElement = document.createElement("a");
            linkElement.href = item.link;
            linkElement.target = "_blank"; // Ajout de cette ligne
            linkElement.textContent = ` Acheter le ${item.name}`;
            detailsElement.appendChild(linkElement);
        
            let brElement = document.createElement("br");
            detailsElement.appendChild(brElement);
        });
        
        

        outfitElement.appendChild(detailsElement);

        outfitContainer.appendChild(outfitElement);
    });
}

// Appellez la fonction après que la page ait été chargée
window.onload = function() {
    generateOutfits(outfits);

    let searchBar = document.getElementById("search-bar");
    searchBar.addEventListener("input", function() {
        let searchString = searchBar.value.toLowerCase();
        let filteredOutfits = outfits.filter(outfit => outfit.title.toLowerCase().includes(searchString));
        generateOutfits(filteredOutfits);
    });
};
