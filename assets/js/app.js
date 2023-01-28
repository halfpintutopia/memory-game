const cardArray = [
    {
        name: 'fries',
        img: 'assets/media/images/fries.png'
    },
    {
        name: 'cheeseburger',
        img: 'assets/media/images/cheeseburger.png'
    },
    {
        name: 'hotdog',
        img: 'assets/media/images/hotdog.png'
    },
    {
        name: 'ice-cream',
        img: 'assets/media/images/ice-cream.png'
    },
    {
        name: 'milkshake',
        img: 'assets/media/images/milkshake.png'
    },
    {
        name: 'pizza',
        img: 'assets/media/images/pizza.png'
    },
    {
        name: 'fries',
        img: 'assets/media/images/fries.png'
    },
    {
        name: 'cheeseburger',
        img: 'assets/media/images/cheeseburger.png'
    },
    {
        name: 'hotdog',
        img: 'assets/media/images/hotdog.png'
    },
    {
        name: 'ice-cream',
        img: 'assets/media/images/ice-cream.png'
    },
    {
        name: 'milkshake',
        img: 'assets/media/images/milkshake.png'
    },
    {
        name: 'pizza',
        img: 'assets/media/images/pizza.png'
    }
];

// shuffle array - compares two values and sorts.
cardArray.sort(() => 0.5 - Math.random());

const grid = document.getElementById('grid');
let chosenCards = [];

function createBoard() {
    let text, i = 0;
    while (i < cardArray.length) {
        const card = document.createElement('img');
        card.setAttribute('src', 'assets/media/images/blank.png')
        card.dataset.id = i;
        card.classList.add('card');
        card.addEventListener('click', flipCard);
        grid.append(card);
        i++;
    }
}

createBoard();

function checkMatch() {
    if (chosenCards[0].name === chosenCards[1].name) {
        document.querySelector(`[data-id='${chosenCards[0].id}']`).setAttribute('src', 'assets/media/images/white.png');
        document.querySelector(`[data-id='${chosenCards[0].id}']`).removeEventListener('click', flipCard);
        document.querySelector(`[data-id='${chosenCards[1].id}']`).setAttribute('src', 'assets/media/images/white.png');
        document.querySelector(`[data-id='${chosenCards[1].id}']`).removeEventListener('click', flipCard);
    } else {
        document.querySelector(`[data-id='${chosenCards[0].id}']`).setAttribute('src', 'assets/media/images/blank.png');
        document.querySelector(`[data-id='${chosenCards[1].id}']`).setAttribute('src', 'assets/media/images/blank.png');
    }

    chosenCards = []
}

function flipCard() {
    const cardID = this.dataset.id;
    chosenCards.push(
        {
            name: cardArray[cardID].name,
            id: this.dataset.id
        }
    );
    this.setAttribute('src', cardArray[cardID].img)
    if (chosenCards.length === 2) {
        setTimeout(checkMatch, 500);
    }
}

