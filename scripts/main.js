// Create Main Program Section
const programData = [
  {
    image: './assets/images/program_icon_01.png',
    title: 'Lecture',
    description:
      'Listen to the speaker from various countries about the message of sharing and opening.',
  },
  {
    image: './assets/images/program_icon_02.png',
    title: 'CE Exhibition',
    description:
      'Appreciate various creations applying CE license artist, organized from Expo Center.',
  },
  {
    image: './assets/images/program_icon_03.png',
    title: 'Forum',
    description:
      'Have the time to share your thoughts and opinions with experts for each topic.',
  },
  {
    image: './assets/images/program_icon_04.png',
    title: 'Workshop',
    description:
      'Try Creating your own work using coding expo license rather than just watching.',
  },
  {
    image: './assets/images/program_icon_05.png',
    title: 'CE Ignite',
    description:
      'Get opportunities to network with CE affiliates around the world, also after the summit.',
  },
];

const programBoxContainer = document.querySelector('.program-boxes');

programData.forEach((program) => {
  const programBox = document.createElement('div');
  programBox.className = 'program-box';
  programBox.innerHTML = `<img src="${program.image}" alt="${program.title}">
    <h3>${program.title}</h3>
    <p>${program.description}</p>`;

  programBoxContainer.appendChild(programBox);
});

// Generate Speaker Section Dynamically
const speakerData = [
  {
    image: './assets/images/bill_gates.png',
    name: 'Bill Gates',
    designation: 'Former CEO and Co-founder of Microsoft',
    description:
      'Bill Gates is an American business magnate, software developer, investor, author, and philanthropist. He is a co-founder of Microsoft, along with his late childhood friend Paul Allen.',
  },
  {
    image: './assets/images/steve_jobs.png',
    name: 'Steve Jobs',
    designation: 'Former CEO Apple Inc.',
    description:
      'Steve Jobs is an American entrepreneur, inventor, business magnate, media proprietor, and investor. He was the co-founder, the chairman, and CEO of Apple.',
  },
  {
    image: './assets/images/elon_musk.png',
    name: 'Elon Musk',
    designation: 'Founder, CEO, and Chief Engineer of SpaceX',
    description:
      'Elon Musk is a business magnate and investor. He is the founder, CEO, and Chief Engineer at SpaceX; angel investor, CEO, and Product Architect of Tesla, Inc.',
  },
  {
    image: './assets/images/mark_zuckerberg.png',
    name: 'Mark Zuckerberg',
    designation: 'Co-founder and CEO of Meta Platforms',
    description:
      'Zuckerberg attended Harvard University, where he launched Facebook in February 2004 with his roommates Eduardo Saverin, Andrew McCollum, Dustin Moskovitz, and Chris Hughes.',
  },
  {
    image: './assets/images/krishna_arvind.png',
    name: 'Krishna Arvind',
    designation: 'Chairman & CEO of IBM',
    description:
      'Arvind Krishna is an Indian-American business executive serving as the Chairman and CEO of IBM. He has been the CEO of IBM since April 2020 and took on the role of Chairman in January 2021.',
  },
  {
    image: './assets/images/satya_nadella.png',
    name: 'Satya Nadella',
    designation: 'Chairman and CEO, Microsoft',
    description:
      'is an Indian American business executive. He is the executive chairman and CEO of Microsoft, succeeding Steve Ballmer in 2014 as CEO.',
  },
];

const speakerBoxContainer = document.querySelector('.speaker-boxes');

speakerData.forEach((speaker, index) => {
  const id = index + 1;
  const speakerBox = document.createElement('div');
  speakerBox.className = 'speaker-box';
  speakerBox.id = `speaker${id}`;

  speakerBox.innerHTML = `<div class="img-box">
   <img src="${speaker.image}" alt="${speaker.name}">
</div>
<div class="text-box">
   <h3>${speaker.name}</h3>
   <p class="designation"><em>${speaker.designation}<em></p>
   <hr class="gray-line">
   <p>${speaker.description}</p>
</div>`;

  speakerBoxContainer.appendChild(speakerBox);
});

const btnMore = document.querySelector('#btn-more');
const speakerBoxes = document.querySelectorAll('.speaker-box');

// Displaying speakers boxes on mobile when click on more button
btnMore.addEventListener('click', () => {
  for (let i = 2; i < speakerBoxes.length; i += 1) {
    const box = document.getElementById(speakerBoxes[i].id);

    if (box.style.display === '' || box.style.display === 'none') {
      box.style.display = 'flex';
      btnMore.textContent = 'Less';
    } else if (box.style.display === 'flex') {
      box.style.display = 'none';
      btnMore.textContent = 'More';
    }
  }
});

// Displaying right amount of speaker boxes when resizing the window
const mediaQuery = window.matchMedia('(min-width: 768px)');

function isMediaChangedToDesktop(e) {
  if (e.matches) {
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
    for (let i = 2; i < speakerBoxes.length; i += 1) {
      const box = document.getElementById(speakerBoxes[i].id);
      box.style.display = 'none';
    }
  }
}

mediaQuery2.addListener(isMediaChangedToMobile);
isMediaChangedToMobile(mediaQuery2);
