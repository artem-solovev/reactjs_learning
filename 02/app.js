var Component = React.createClass({
  propTypes: {
    firstName: React.PropTypes.string.isRequired,
  },

  getDefaultProps: function() {
    return {
      middleName: "",
      address: "Moscow, Russia",
    };
  },

  render: function() {
    return React.DOM.span(null,
      "I'm so custom but i have my own name - "
       + this.props.firstName + " and address where i live - "
      + this.props.address);
  }
});

ReactDOM.render(
  React.createElement(Component, {
    firstName: "Artem"
  }),
  document.getElementById("app")
);
