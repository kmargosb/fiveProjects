// Variables

let $btn = document.querySelector('#new-quote');
let $quote = document.querySelector('.quote');
let $person = document.querySelector('.person');

const quotes = [{
    quote: "The will of man is his happiness.",
    person: "Friedrich Schiller"
},
{
    quote: "I do the very best, I know how - The very best I can; and i mean to keep on doing so until the end",
    person: "Abraham Lincoln"
},
{
    quote: "The person, be it gentleman or lady, who has not pleasure in a good novel, must be intolerably stupid.",
    person: "Jane Austen"
},
{
    quote: "After all, tomorrow is another day!",
    person: "Margaret Mitchell"
},
{
    quote: "No amount of fire or freshness can challenge what a man will store up in his ghostly heart.”",
    person: "F. Scott Fitzgerald"
},
{
    quote: "Procrastination is the thief of time, collar him.",
    person: "Charles Dickens"
},
{
    quote: "The same question arose in every soul: 'For what, for whom, must I kill and be killed?'",
    person: "Leo Tolstoy"
},
{
    quote: "A friend is someone who gives you total freedom to be yourself.",
    person: "Jim Morrison"
},
{
    quote: "This is the strangest life I've ever known.",
    person: "Jim Morrison"
},
{
    quote: "And, when you want something, all the universe conspires in helping you to achieve it.",
    person: "Paulo Coelho"
},
{
    quote: "People generally see what they look for, and hear what they listen for.",
    person: "Harper Lee"
},
{
    quote: "Sometimes you just need to walk, let your thoughts fly on the wind and accept their nature is to make us see beyond the obvious",
    person: "Silvia Solano"
},
{
    quote: "When you see yourself lonely on the road, remember that you are looking for a new destination.",
    person: "Silvia Solano"
},
{
    quote: "Look from another perspective, try to do something different, live and be happy that life goes by very quickly and you were created to smile.",
    person: "Silvia Solano"
}
];

$btn.addEventListener('click', function(){
    let random = Math.floor(Math.random() * quotes.length);

    $quote.innerText = quotes[random].quote;
    $person.innerText = quotes[random].person;

    console.log(random);
})