var TextAreaCounter = React.createClass({
  propTypes: {
    text: React.PropTypes.string,
  },

  getDeafaultProps: function() {
    return {
      text: "",
    };
  },

  render: function() {
    return React.DOM.div(null,
      React.DOM.textarea({
        defaultValue: this.props.text,
      }),
      React.DOM.h3(null, this.props.text.length)
    );
  }
});

ReactDOM.render(
  React.createElement(TextAreaCounter, {
    text: "Artem"
  }),
  document.getElementById("app")
);
