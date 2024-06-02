const Deck: React.FC<{ amountOfCards: number}> = ({ amountOfCards}) => {
  return (
    <div>
      The amount of cards left: {amountOfCards}
      <br />
    </div>
  )
}

export default Deck