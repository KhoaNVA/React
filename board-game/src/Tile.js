import React, { Component } from 'react'

class Tile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hidden: true
        }
        this.reveal = this.reveal.bind(this);
        this.increment = this.increment.bind(this);
        this.renderValue = this.renderValue.bind(this);
        this.renderTile = this.renderTile.bind(this);
    }
    reveal() {
        this.setState({
            hidden: !this.state.hidden
        });
        this.props.onReveal(this.props.index);
    }
    increment() {
        this.props.onChange(1, this.props.index);
    }
    renderValue() {
        return (<p onClick={this.increment}>{this.props.children[0]}</p>)
    }
    renderTile() {
        return (<p onClick={this.reveal}>hidden</p>)
    }
    render() {
        let className = this.props.children[1];
        if (className === 'hidden') {
            return (
                <div className={"Tile " + className}>
                    {this.renderTile()}
                </div>
            )
        }
        return (
            <div className={"Tile " + className}>
                {this.renderValue()}
            </div>
        )
    }
}

export default Tile;