// Displaying speakers boxes on mobile when click on more button

const btnMore = document.querySelector('#btn-more');
const speakerBoxes = document.querySelectorAll('.speaker-box');

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
