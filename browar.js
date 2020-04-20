let activeElement = 0;

const WawImg = document.querySelector('img.Warszawa');
const PozImg = document.querySelector('img.Poznan');
const WrocImg = document.querySelector('img.Wroclaw');
const LodzImg = document.querySelector('img.Lodz');
const GdanskImg = document.querySelector('img.Gdansk');
const KrakowImg = document.querySelector('img.Krakow');

const Wawh2 = document.querySelector('.Warszawa h2');
const Pozh2 = document.querySelector('.Poznan h2');
const Wroh2 = document.querySelector('.Wroclaw h2');
const Lodzh2 = document.querySelector('.Lodz h2');
const Gdah2 = document.querySelector('.Gdansk h2');
const Krkh2 = document.querySelector('.Krakow h2');

const WarszawaImages = ['/Na browara/images/bary/wales bar warszawa.jpg', '/Na browara/images/bary/Kita_Koguta_warszawa.jpg', '/Na browara/images/bary/Coctail Bar Max & Dom Whisky.jpg', ];

//const data = {
//    Warszawa: [{
//           img: '/Na browara/images/bary/wales bar warszawa.jpg',
//           name: 'Wales Bar',
//       },
//      {
//          img: '/Na browara/images/bary/Kita_Koguta_warszawa.jpg',
//          name: 'Kita Koguta'
//    },
//    {
//         img: '/Na browara/images/bary/Coctail Bar Max & Dom Whisky.jpg',
//        name: 'Coctail Bar Max & Dom Whisky'
//    }
//  ],
//};
const PoznanImages = ['/Na browara/images/bary/NaPiwek PUB poznan.jpg', '/Na browara/images/bary/Piwna Stopa poznan.jpg', '/Na browara/images/bary/Chmielnik poznan.jpg'];
const WroclawImages = ['/Na browara/images/bary/Haggis Pub wrocław.jpg', '/Na browara/images/bary/papa bar wrocław.jpg', '/Na browara/images/bary/ZaZoo Beach Bar wrcoław.jpg'];
const ŁódźImages = ['/Na browara/images/bary/Łódź Pub Biblioteka.jpg', '/Na browara/images/bary/Iron Horse Pub Łódź.jpg', '/Na browara/images/bary/Chmielowa Dolina Łódź.jpg'];
const GdańskImages = ['/Na browara/images/bary/GAŃSK Pub Spółdzielnia.jpg', '/Na browara/images/bary/U Szkota GDAŃSK.jpg', '/Na browara/images/bary/Cybermachina Gdańsk.jpg'];
const KrakówImages = ['/Na browara/images/bary/Free Pub kraków.jpg', '/Na browara/images/bary/Dobry Kumpel Pub kraków.jpg', '/Na browara/images/bary/krakow cybermachina Game Pub.jpg'];

const WawNames = ['Wales Bar', 'Kita Koguta', 'Coctail Bar Max & Dom Whisky'];
const PozNames = ['NaPiwek Pub', 'Piwna Stopa', 'Chmielnik'];
const WrocNames = ['Haggis Pub', 'Papa Bar', 'ZaZoo Beach Bar'];
const LodzNames = ['Pub Biblioteka', 'Iron Horse Pub', 'Chmielowa Dolina'];
const GdaNames = ['Pub Spółdzielnia', 'U Szkota', 'Cybermachina'];
const KrkNames = ['Free Pub', 'Dobry Kumpel Pub', 'Cybermachina Game Pub']

const WarszawaPub = ['Wales Bar', 'Kita Koguta', 'Coctail Bar Max & Dom Whisky'];
const PoznańPub = ['NaPiwek Pub', 'Piwna Stopa', 'Chmielnik'];
const WrocławPub = ['Haggis Pub', 'Papa Bar', 'ZaZoo Beach Bar'];
const ŁódźPub = ['Pub Biblioteka', 'Iron Horse Pub', 'Chmielowa Dolina'];
const GdańskPub = ['Pub Spółdzielnia', 'U Szkota', 'Cybermachina'];
const KrakówPub = ['Free Pub', 'Dobry Kumpel Pub', 'Cybermachina Game Pub'];

function changeElement() {
    activeElement++;
    if (activeElement == 3) {
        activeElement = 0;
    }

    WawImg.src = WarszawaImages[activeElement]
    Wawh2.textContent = WawNames[activeElement]

    PozImg.src = PoznanImages[activeElement]
    Pozh2.textContent = PozNames[activeElement]

    WrocImg.src = WroclawImages[activeElement]
    Wroh2.textContent = WrocNames[activeElement]

    LodzImg.src = ŁódźImages[activeElement]
    Lodzh2.textContent = LodzNames[activeElement]

    GdanskImg.src = GdańskImages[activeElement]
    Gdah2.textContent = GdaNames[activeElement]

    KrakowImg.src = KrakówImages[activeElement]
    Krkh2.textContent = KrkNames[activeElement]
}
setInterval(changeElement, 6000);


const img = document.getElementById('carousel');
const rightBtn = document.getElementById('right-btn');
const leftBtn = document.getElementById('left-btn');

// Images are from unsplash
let pictures = ['/Na browara/images/Application/001.png', '/Na browara/images/Application/1.png', '/Na browara/images/Application/2.png', '/Na browara/images/Application/3.png', '/Na browara/images/Application/4.png', '/Na browara/images/Application/5.png', '/Na browara/images/Application/6.png'];

img.src = pictures[0];
let position = 0;

moveRight = () => {
    if (position >= pictures.length - 1) {
        position = 0
        img.src = pictures[position];
        return;
    }
    img.src = pictures[position + 1];
    position++;
}

moveLeft = () => {
    if (position < 1) {
        position = pictures.length - 1;
        img.src = pictures[position];
        return;
    }
    img.src = pictures[position - 1];
    position--;
}

rightBtn.addEventListener("click", moveRight);
leftBtn.addEventListener("click", moveLeft);