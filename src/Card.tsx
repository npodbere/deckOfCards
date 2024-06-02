export interface ICard {
    color: string,
    rank: string,
    suit: string
}

const Card: React.FC<{card: ICard}> = ({card}) => {
  return (
    <div style={{"color": card.color}}>
      <div>
        <div>{card.rank}</div>
        <div>{card.suit}</div>
      </div>
    </div>
  )
}

export default Card