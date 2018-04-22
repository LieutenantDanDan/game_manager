import React from 'react'
import Game from "./Game";

class GameList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            games: this.props.games
        };

    }

    renderGame(game) {
        console.log(game);
        return (
            <Game key={game.id} name={game.name} playtime={game.playtime} />
        );

    }


    render() {
        const  games  = this.state.games;
        console.log(games)
        const listItems = games.map((game) => this.renderGame(game));
        return (
            <div>
                {listItems}
            </div>
        );
    };


}

export default GameList;