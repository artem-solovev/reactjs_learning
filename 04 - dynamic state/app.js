var TextAreaCounter = React.createClass({
  propTypes: {
    text: React.PropTypes.string,
  },

  getDeafaultProps: function() {
    return {
      text: "",
    };
  },

  getInitialState: function() {
    return {
      text: this.props.text,
    };
  },

  _textChange: function(e) {
    this.setState({
      text: e.target.value,
    });
  },

  render: function() {
    return React.DOM.div(null,
      React.DOM.textarea({
        value: this.state.text,
        onChange: this._textChange,
      }),
      React.DOM.h3(null, this.state.text.length)
    );
  }
});

ReactDOM.render(
  React.createElement(TextAreaCounter, {
    text: "Artem"
  }),
  document.getElementById("app")
);
