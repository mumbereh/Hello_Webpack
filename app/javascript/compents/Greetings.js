// app/javascript/components/Greeting.js
import React from 'react';
import { connect } from 'react-redux';
import { fetchRandomGreeting } from '../actions';

class Greeting extends React.Component {
  componentDidMount() {
    this.props.fetchRandomGreeting();
  }

  render() {
    return (
      <div>
        <h1>{this.props.greeting}</h1>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    greeting: state.greeting,
  };
};

export default connect(mapStateToProps, { fetchRandomGreeting })(Greeting);
