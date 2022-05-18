var deckRoot="cards/";//where card files are
Full_Deck=new Array(
'CARD10.jpg','CARD11.jpg','CARD12.jpg','CARD13.jpg','CARD14.jpg','CARD15.jpg','CARD16.jpg','CARD17.jpg','CARD18.jpg','CARD19.jpg','CARD1A.jpg','CARD1B.jpg','CARD1C.jpg',
'CARD20.jpg','CARD21.jpg','CARD22.jpg','CARD23.jpg','CARD24.jpg','CARD25.jpg','CARD26.jpg','CARD27.jpg','CARD28.jpg','CARD29.jpg','CARD2A.jpg','CARD2B.jpg','CARD2C.jpg',
'CARD30.jpg','CARD31.jpg','CARD32.jpg','CARD33.jpg','CARD34.jpg','CARD35.jpg','CARD36.jpg','CARD37.jpg','CARD38.jpg','CARD39.jpg','CARD3A.jpg','CARD3B.jpg','CARD3C.jpg',
'CARD40.jpg','CARD41.jpg','CARD42.jpg','CARD43.jpg','CARD44.jpg','CARD45.jpg','CARD46.jpg','CARD47.jpg','CARD48.jpg','CARD49.jpg','CARD4A.jpg','CARD4B.jpg','CARD4C.jpg');
Full_DeckJOKERS=new Array(
'CARD10.jpg','CARD11.jpg','CARD12.jpg','CARD13.jpg','CARD14.jpg','CARD15.jpg','CARD16.jpg','CARD17.jpg','CARD18.jpg','CARD19.jpg','CARD1A.jpg','CARD1B.jpg','CARD1C.jpg',
'CARD20.jpg','CARD21.jpg','CARD22.jpg','CARD23.jpg','CARD24.jpg','CARD25.jpg','CARD26.jpg','CARD27.jpg','CARD28.jpg','CARD29.jpg','CARD2A.jpg','CARD2B.jpg','CARD2C.jpg',
'CARD30.jpg','CARD31.jpg','CARD32.jpg','CARD33.jpg','CARD34.jpg','CARD35.jpg','CARD36.jpg','CARD37.jpg','CARD38.jpg','CARD39.jpg','CARD3A.jpg','CARD3B.jpg','CARD3C.jpg',
'CARD40.jpg','CARD41.jpg','CARD42.jpg','CARD43.jpg','CARD44.jpg','CARD45.jpg','CARD46.jpg','CARD47.jpg','CARD48.jpg','CARD49.jpg','CARD4A.jpg','CARD4B.jpg','CARD4C.jpg',
'CARD1D.jpg','CARD2D.jpg');
faceArray=new Array("Ace","Two","Three","Four","Five","Six","Seven","Eight","Nine","Ten","Jack","Queen","King","Joker");
suitArray=new Array("Error","Clubs","Diamonds","Hearts","Spades");
function ShuffleCards(deckref,count){
//this function returns a shuffle deck based on deck reference array(deckref) and deck count(count)
var deck=new Array();
for(i=0;i<count;i++)deck=deck.concat(deckref);
  for (let i = deck.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = deck[i];
    deck[i] = deck[j];
    deck[j] = temp;
  }
return deck;
}
function getCardObject(pic){
/* this fuction returns a card object from a card picture URL
 * return value parameters:
 * face:	Face value of card 0 being ace 12 being king 13 being joker
 * suit:	Card suit: 1 through 4
 * black:	Is true if the card is black false is red.
 * id:		ID in url used to identify card
 *
 * you can use the cardback image url just use back.jpg?[cardid]
 * example queen of spades: back.jpg?4B
 */
var carda=pic.replace(location.protocol+deckRoot,"");
carda=carda.replace(".jpg","");
carda=carda.replace("?","");
carda=carda.replace("CARD","");
carda=carda.replace("back","");
return {suit:parseInt(carda.substr(0,1)),face:parseInt("0x"+carda.substr(1,1)),black:(parseInt(carda.substr(0,1))-1)%2==0,id:carda};
}
