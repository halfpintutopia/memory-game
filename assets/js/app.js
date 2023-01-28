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

function createBoard() {
    let text, i = 0;
    while (i < cardArray.length) {
        const card = document.createElement('img');
        card.setAttribute('src', 'assets/media/images/blank.png')
        card.dataset.id = i;
        card.classList.add('card');
        grid.append(card);
        i++;
    }
}

createBoard();