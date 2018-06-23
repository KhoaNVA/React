import React, { Component } from 'react'
import Tile from './Tile'

class Board extends Component {
    constructor(props) {
        super(props);

        this.state = {
            tiles: []
        };

        this.revealed = [];

        for (let index = 0; index < 40; index++) {
            this.state.tiles.push({ id: index, value: index });
        }

        this.renderTile = this.renderTile.bind(this);
        this.update = this.update.bind(this);
        this.updateRevealed = this.updateRevealed.bind(this);
    }
    update(inc, i) {
        this.setState(currentState => ({
            tiles: currentState.tiles.map(
                tile => tile.id !== i ? tile : { ...tile, value: tile.value + inc }
            )
        }));
    }
    updateRevealed(index) {
        if (this.revealed.length === 2) {
            this.revealed = [];
        }
        this.revealed.push(index);
    }
    renderTile(tile, i) {
        return (
            <Tile key={tile.id} index={i}
                onChange={this.update}
                onReveal={this.updateRevealed}>
                {tile.value}
            </Tile>
        )
    }
    render() {
        return (
            <div className="Board">
                {this.state.tiles.map(this.renderTile)}
            </div>
        )
    }
}

export default Board