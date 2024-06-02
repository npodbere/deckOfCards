import './App.css';
import TableWithDeck from "./TableWithDeck";

/**
 * 1. Generate deck of cards
 * 2. Add ability to take one card and place it on the table
 * 3. Remove taken card from the deck
 * 4. Add ability to take multiple cards at once
 */

/**
 * Function to generate a deck of cards.
 *  deck = [Card {
 *    color,
 *    rank,
 *    suit
 * }]
 * Generate deck on app load
 *
 *  Button to take a card out and remove taken card from the deck
 *  <div class="table"></div>
 *
 * If the deck is empty than show some message. Disable buttons if the deck is empty.
 * Show error message if user tries to take more cards then what is remaining in the deck
 *
 * input field to enter amount of cards at the same time
 * (It shouldn't be more than the total amount of cards that are remaining in the deck)
 */

/**
 * Card component. Cards table component. Card deck component. Table with a deck component.
 */

function App() {
  return (
    <div className="App">
      <TableWithDeck />
    </div>
  );
}

export default App;
