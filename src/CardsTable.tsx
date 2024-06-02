import Card, {ICard} from "./Card"

const CardsTable: React.FC<{takenCards: ICard[]}> = ({takenCards}) => {
  return (
    <div style={{"display": "flex", "gap": "20px", "flexWrap": "wrap"}}>
      {takenCards.map((takenCard) => {
        return(
          <Card card={takenCard} />
        )
      })}
    </div>
  )
}

export default CardsTable