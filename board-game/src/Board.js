import React, { Component } from 'react'
import Tile from './Tile'

class Board extends Component {
    constructor(props) {
        super(props);

        this.state = {
            tiles: [],
            revealed: []
        };
        for (let index = 0; index < 6; index++) {
            this.state.tiles.push({ id: index, value: index });
        }
        this.renderTile = this.renderTile.bind(this);
        this.update = this.update.bind(this);
        this.updateRevealed = this.updateRevealed.bind(this);
    }
    update(inc, i) {
        // console.log('incrementing', i, inc);
        this.setState(currentState => ({
            tiles: currentState.tiles.map(
                tile => tile.id !== i ? tile : { ...tile, value: tile.value + inc }
            )
        }));
        // console.log(this.state.tiles);
    }
    updateRevealed(index){        
        this.state.revealed.push(index);
        console.log(this.state.revealed);
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
                <div className="BoardRow">
                    {this.state.tiles.map(this.renderTile)}
                </div>
            </div>
        )
    }
}

export default Board