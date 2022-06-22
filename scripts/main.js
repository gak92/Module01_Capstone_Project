// Generate Speaker Section Dynamically

const speakerData = [
    {
        image: './assets/images/speaker_01.png',
        name: 'yohai benkler',
        designation: 'Professor at Harvard Law School',
        description: 'Focusing on a collaborative approach in a networked environment, he created the concept of co-production based on sharing, such as open source software and Wikipedia.'
    },
    {
        image: './assets/images/speaker_02.png',
        name: 'Jeon Gil-nam',
        designation: 'Emeritus Professor, Korea Advanced Institute of Science and Technology (KAIST)',
        description: 'By developing Asia\'s first Internet protocol network SDN and leading Korea\'s first private line Internet connection in 1990, it ushered in the era of the Internet in earnest.'
    },
    {
        image: './assets/images/speaker_03.png',
        name: 'Noh So-young',
        designation: 'Art Center Nabi Director, CC Korea Director',
        description: 'As the author of <Digital Art Art of Our Time>, he opened \'Art Center Nabi\', Korea\'s first digital art institution in 2000, and is currently serving.'
    },
    {
        image: './assets/images/speaker_04.png',
        name: 'Julia Leda',
        designation: 'Head of the Young Pirates of Europe',
        description: 'European integration and online youth participation in politics and democracy are major concerns, and a report has been published that will potentially affect the revision of the EU\'s copyright law in July.'
    },
    {
        image: './assets/images/speaker_05.png',
        name: 'Layla Tretikov',
        designation: 'Secretary General of the Wikimedia Foundation',
        description: 'Layla Tretikov is the general secretary of the Wikimedia Foundation, a non-profit organization that runs Wikipedia. Wikipedia is provided free of charge in 290 languages ​​every month to over 100 million people, nearly half of the world\'s population.'
    },
    {
        image: './assets/images/speaker_06.png',
        name: 'Ryan Merkley',
        designation: 'Creative Commons CEO, Former Mozilla Foundation COO',
        description: 'He led open source projects at the Mozilla Foundation, and joined CC as CEO in 2014. He has been active in open movements such as open government and open source.'
    }
];

const speakerBoxContainer = document.querySelector('.speaker-boxes');
console.log(speakerBoxContainer);

speakerData.forEach((speaker, index) => {
//    console.log("index: ", index); 
   const id = index + 1;
   const speakerBox = document.createElement('div');
   speakerBox.className = 'speaker-box';
   speakerBox.id = 'speaker'+id;

   speakerBox.innerHTML = `<div class="img-box">
   <img src="${speaker.image}" alt="${speaker.name}">
</div>
<div class="text-box">
   <h3>${speaker.name}</h3>
   <p>${speaker.designation}</p>
   <hr class="gray-line">
   <p>${speaker.description}</p>
</div>`;

//    console.log(speakerBox);
    speakerBoxContainer.appendChild(speakerBox);

});


const btnMore = document.querySelector('#btn-more');
const speakerBoxes = document.querySelectorAll('.speaker-box');

// Displaying speakers boxes on mobile when click on more button
btnMore.addEventListener('click', () => {

    for(i=2; i<speakerBoxes.length; i+=1) {
        const box = document.getElementById(speakerBoxes[i].id);

        if (box.style.display === '' || box.style.display === 'none') {
            box.style.display = 'flex';
            btnMore.textContent = 'Less';
        }
        else if (box.style.display === 'flex') {
            box.style.display = 'none';
            btnMore.textContent = 'More';
        }
    }
});

// Displaying right amount of speaker boxes when resizing the window
const mediaQuery = window.matchMedia('(min-width: 768px)');

function isMediaChangedToDesktop(e) {
  if (e.matches) {
    console.log('Media Query Matched! min-width: 768px');
    speakerBoxes.forEach((speakerBox) => {
        const box = document.getElementById(speakerBox.id);
        box.style.display = 'flex';
    });
  }
}

mediaQuery.addListener(isMediaChangedToDesktop);
isMediaChangedToDesktop(mediaQuery);

const mediaQuery2 = window.matchMedia('(max-width: 767px)');

function isMediaChangedToMobile(e) {
    if (e.matches) {
        btnMore.textContent = 'More';
        for (i=2; i<speakerBoxes.length; i+=1) {
            const box = document.getElementById(speakerBoxes[i].id);
            box.style.display = 'none';
        }
    }
}

mediaQuery2.addListener(isMediaChangedToMobile);
isMediaChangedToMobile(mediaQuery2);
