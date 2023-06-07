// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD1drgT9OVqfiC4xD4BeUFEpWuEaxuWt_A",
  authDomain: "tiktok-f1eed.firebaseapp.com",
  projectId: "tiktok-f1eed",
  storageBucket: "tiktok-f1eed.appspot.com",
  messagingSenderId: "594235665146",
  appId: "1:594235665146:web:e69764d01bddad66927743",
  measurementId: "G-DLE0BE6F3E"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);



let outfits = [
    {
        title: "Les pépites de l'été sur Amazon",
        image: "image1.jpg",
        items: [
            {
                name: "Pull",
                link: "https://martinarnaud.fr/",
                emoji: "👕"
            },
            {
                name: "Short",
                link: "https://martinarnaud.fr/",
                emoji: "🩳"
            }
        ]
    },
    {
        title: "De quelle couleur est ta bugatti ?",
        image: "image1.jpg",
        items: [
            {
                name: "Pull",
                link: "https://martinarnaud.fr/",
                emoji: "👕"
            },
            {
                name: "Short",
                link: "https://martinarnaud.fr/",
                emoji: "🩳"
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