//quote section
let quotes = {
    quoteOne: [
        "Be yourself; everyone else is already taken. - Oscar Wilde",
        "Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind - Bernard M. Baruch",
        "You only live once, but if you do it right, once is enough. - Mae West",
        "If you want to know what a man's like, take a good look at how he treats his inferiors, not his equals. - J.K. Rowling",
        "All you need is love. But a little chocolate now and then doesn't hurt. - Charles M. Schulz",
        "Beauty is in the eye of the beholder and it may be necessary from time to time to give a stupid or misinformed beholder a black eye. - Jim Henson"
    ],


    quoteTwo: [
        "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe. - Albert Einstein",
        "What would humans be without love - Terry Pratchett",
        "You know you're in love when you can't fall asleep because reality is finally better than your dreams. - Dr. Seuss",
        "Insanity is doing the same thing, over and over again, but expecting different results. - Narcotics Annonymous",
        "It is better to be hated for what you are than to be loved for what you are not. - Andre Gide",
        "I'm not afraid of death; I just don't want to be there when it happens. - Woody Allen"
    ],


    quoteThree: [
        "So many books, so little time - Frank Zappa",
        "If you tell the truth, you don't have to remember anything. - Mark Twain",
        "To live is the rarest thing in the world. Most people exist, that is all. - Oscar Wilde",
        "Darkness cannot drive out darkness: only light can do that. Hate cannot drive out hate: only love can do that. - Martin Luther King",
        "Live as if you were to die tomorrow. Learn as if you were to live forever. - Mahatma Ghandi",
        "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment. - Ralph Waldo Emmerson"
    ],
    //randomizer
    randomQuote(quoteOne, quoteTwo, quoteThree) {
        let randQ1 = Math.floor(Math.random() * this.quoteOne.length);
        let randQ2 = Math.floor(Math.random() * this.quoteTwo.length);
        let randQ3 = Math.floor(Math.random() * this.quoteThree.length);
        return `Your three random quotes are:\n 
        ${quoteOne[randQ1]}\n
        ${quoteTwo[randQ2]}\n
        ${quoteThree[randQ3]}`
    },
    
}

console.log(quotes.randomQuote(quotes.quoteOne, quotes.quoteTwo, quotes.quoteThree))