// Handles the App template used on every page.
import React, {PropTypes} from 'react';

class App extends React.Component {
  render() {
    return (
      <div className="container-fluid">
        <p>Header</p>
        {this.props.children}
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.Object.isRequired
};

export default App;
