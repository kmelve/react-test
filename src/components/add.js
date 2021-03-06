
import React from 'react';
import data from '../data/data';

let lastId = data.length + 1;

function makeId() {
    return lastId++;
}

// tutorial16.js
const Add = React.createClass({
    propTypes: {
        onSubmit: React.PropTypes.func.isRequired,
        id: React.PropTypes.number.isRequired,
    },
    getInitialState() {
        const item = {
            author: '',
            text: '',
        };
        return item;
    },
    handleAuthorChange(e) {
        this.setState({ author: e.target.value });
    },
    handleTextChange(e) {
        this.setState({ text: e.target.value });
    },
    handleSubmit(e) {
        e.preventDefault();
        const author = this.state.author.trim();
        const text = this.state.text.trim();
        if (!text || !author) {
            return;
        }
        this.props.onSubmit({
            id: this.props.id + 1,
            author,
            text,
        });
        this.setState({ author: '', text: '' });
    },
    render() {
        return (
            <form className="commentForm" onSubmit={this.handleSubmit}>
                <input
                  type="text"
                  placeholder="Your name"
                  value={this.state.author}
                  onChange={this.handleAuthorChange}
                />
                <input
                  type="text"
                  placeholder="Say something..."
                  value={this.state.text}
                  onChange={this.handleTextChange}
                />
                <input type="submit" value="Post" className="btn btn-primary" />
            </form>
        );
    },
});

export default Add;
