var printedQuoteIndex =[];

function generateQuote(){
    var quoteText = document.getElementById('quoteText');
    var autherText = document.getElementById('autherText');
    var quotes=[
        {
            quote:`"Be yourself; everyone else is already taken."`,
            auther:'--Oscar Wilde' 
        },
        {
            quote:`"Two things are infinite: the universe and human stupidity; and I'm not sure about the universe."`,
            auther:'--Albert Einstein' 
        },
        {
            quote:`"So many books, so little time."`,
            auther:'--Frank Zappa' 
        },
        {
            quote:`"You know you are in love when you can't fall asleep because reality is finally better than your dreams"`,
            auther:'--Dr. Seuss' 
        },
        {
            quote:`"You only live once, but if you do it right, once is enough."`,
            auther:'--Mae West' 
        },
        {
            quote:`"Be the change that you wish to see in the world."`,
            auther:'--Mahatma Gandhi' 
        },
        {
            quote:`"In three words I can sum up everything I have learned about life: it goes on."`,
            auther:'--Robert Frost' 
        },
        {
            quote:`"If you tell the truth, you don't have to remember anything."`,
            auther:'--Mark Twain' 
        },
        {
            quote:`"A friend is someone who knows all about you and still loves you."`,
            auther:'--Elbert Hubbard' 
        },
        {
            quote:`"Always forgive your enemies; nothing annoys them so much."`,
            auther:'--Oscar Wilde' 
        }
    ]
    var randomIndex = Math.floor(Math.random()*10);
    while(printedQuoteIndex.length !=10){
        if(!printedQuoteIndex.includes(randomIndex)){
            break;
        }else{
            randomIndex = Math.floor(Math.random()*10);
        }
    }
    
    if(!printedQuoteIndex.includes(randomIndex))
    {
        printedQuoteIndex.push(randomIndex);
        quoteText.innerHTML = quotes[randomIndex].quote;
        autherText.innerHTML = quotes[randomIndex].auther;
    }

    // to clear the array after shows all the stored quotes
    if(printedQuoteIndex.length ==10){
        printedQuoteIndex=[];
    }
}