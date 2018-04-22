import React from 'react'

class Game extends React.Component {

    render() {
        return (
        <div>
            <h6>
            Name: { this.props.name }
            </h6>
            <h6>
                Play Time:  { this.props.playtime }
            </h6>
        </div>

        )
    }


}

export default Game;