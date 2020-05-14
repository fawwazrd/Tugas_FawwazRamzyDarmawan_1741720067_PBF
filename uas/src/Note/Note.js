import React, { Component } from "react";
import "./Note.css";
import PropTypes from "prop-types";

class Note extends Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };

    this.noteContent = props.noteContent;
    this.contactContent = props.contactContent;
    this.noteId = props.noteId;
    this.handleRemoveNote = this.handleRemoveNote.bind(this);
  }

  handleRemoveNote(id) {
    this.props.removeNote(id);
  }

  render() {
    return (
      <div className="note fade-in">
        <span
          className="closebtn"
          onClick={() => this.handleRemoveNote(this.noteId)}
        >
          &times;
        </span>
        <p className="noteContent">{this.noteContent}</p>
        <p className="contactContent">{this.contactContent}</p>

        <p>{this.state.date.toLocaleString()}</p>
      </div>
    );
  }
}

Note.propTypes = {
  noteContent: PropTypes.string,
  contactContent: PropTypes.number,
};

export default Note;
