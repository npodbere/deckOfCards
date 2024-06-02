import Deck from "./Deck"
import { useState, useEffect } from "react"
import CardsTable from  "./CardsTable"
import { ICard } from "./Card"

const takeOneCardMethod = (deck: any, takenCards: any, amountToBeTaken: number) => {
  const newDeck = [...deck]
  const newTakenCards = [...takenCards]
  for(let i = 0; i<amountToBeTaken; i++) {
    console.log(i)
    const randomIndex = Math.floor(Math.random() * newDeck.length)
    const currentlyTakenCards = newDeck.splice(randomIndex, 1)
    newTakenCards.push(...currentlyTakenCards)
  }

  return {newDeck, newTakenCards}
}

const generateDeck = () => {
  const deck:ICard[] = []
  const suits = ["Hearts", "Diamonds", "Spades", "Clubs"]
  const numbers = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "D", "K", "A"]
  numbers.forEach((number) => {
    suits.forEach((suit) => {
      let color: string;
      if (suit === "Hearts" || suit === "Diamonds") {
        color = "red"
      }
      else {
        color = "block"
      }
      const card: ICard = {
        "rank": number,
        "suit": suit,
        "color": color
      }
      deck.push(card)
    })
  })
  return deck
}


const TableWithDeck: React.FC = () => {
  const [deck, setDeck] = useState<ICard[]>([])
  const [takenCards, setTakenCards] = useState<ICard[]>([])
  const [takingMoreThanOneCard, setTakingMoreThanOneCard] = useState<boolean>(false)
  const [amountToBeTaken, setAmountToBeTaken] = useState(0)
  const [tooFewCardsLeftError, setTooFewCardsLeftError] = useState(false)

  useEffect(() => {
    const deck = generateDeck()
    setDeck(deck)
  }, [])
  return (
    <div>
      <Deck
        amountOfCards={deck.length}
      />
      <button type="button" onClick={() => {
        const {newDeck, newTakenCards} = takeOneCardMethod(deck, takenCards, 1)
        setTakenCards(newTakenCards)
        setDeck(newDeck)
      }}
      disabled={deck.length === 0}
      >
        Take One Card
      </button>
      <button type="button" onClick={() => {
        const deck = generateDeck()
        setDeck(deck)
      }}
      >
        Set New Deck
      </button>
      <button onClick={() => {setTakingMoreThanOneCard(true)}}>Take multiple cards</button>
      {takingMoreThanOneCard && <div>
        <div>How many cards would you like to take?</div>
        <input type="number" value={amountToBeTaken} onChange={(event) => setAmountToBeTaken(Number(event.target.value))} />
        <button type="button" onClick={() => {
          if (deck.length < amountToBeTaken) {
            setTooFewCardsLeftError(true)
          }
          else{
            setTakingMoreThanOneCard(false)
            const {newDeck, newTakenCards} =  takeOneCardMethod(deck, takenCards, amountToBeTaken)
            setTakenCards(newTakenCards)
            setDeck(newDeck)
            setAmountToBeTaken(0)
            setTooFewCardsLeftError(false)
          }
        }}>Submit</button>
        {tooFewCardsLeftError && <div style={{"color": "red"}}>Too few cards left in the deck</div>}
      </div>}
      <CardsTable takenCards={takenCards} />
    </div>
  )
}

export default TableWithDeck