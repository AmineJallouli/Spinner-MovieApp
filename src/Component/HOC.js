import React from "react";
import Spinner1 from "./Spinner";

const HOC = WrappedComponent => {
  return class HOC extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        timeup: true
      };

      setTimeout(
        () =>
          this.setState({
            timeup: false
          }),
        5000
      );

    }

    render() {
      return this.state.timeup ? (
        <Spinner1 />
      ) : (
        <WrappedComponent {...this.props} />
      );
    }
  };
};

export default HOC;
