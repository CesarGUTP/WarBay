  import { new_games } from '/lib/collections/new_games.js';
  import { usd_games } from '/lib/collections/usd_games.js';

Cart.configure({
  usd_games: {
    collection: usd_games
  }
});
