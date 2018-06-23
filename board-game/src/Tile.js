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
        // console.log(this.props);
        this.props.onReveal(this.props.index);
    }
    increment() {
        this.props.onChange(1, this.props.index);
    }
    renderValue() {
        return (
            <div onClick={this.increment}>
                <p>{this.props.children}</p>
            </div>
        )
    }
    renderTile() {
        return (
            <div onClick={this.reveal}>
                <p>hidden</p>
            </div>
        )
    }
    render() {
        if (this.state.hidden) {
            return (
                <div className="Tile">
                    {this.renderTile()}
                </div>
            )
        } else {
            return (
                <div className="Tile">
                    {this.renderValue()}
                </div>
            )
        }
    }
}

export default Tile;