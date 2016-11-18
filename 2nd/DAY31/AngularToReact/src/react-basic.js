import React, {Component, PropTypes} from 'react';

class React_Basic extends Component{
  constructor(props){
    super(props);
    this.state = {
      app_name: props.app_name,
      is_show: false,
    };
  }
  render(){
    let app_name = this.props.app_name;
    return (
      <div>
        <a href="/">back</a>
        <br />
        {/*<button type="button" onClick={this._showClicked.bind(this)}>toggle Show</button>*/}
        <button type="button" onClick={ e => this.setState({ is_show: ! this.state.is_show })}>toggle Show</button>
        { this.state.is_show ? <input type="text" onChange={ e => this.setState({ app_name: e.target.value })} value={this.state.app_name}></input> : null }

        <h2>React의 애플리케이션 이름: {this.state.app_name}</h2>
        <p data-ng-bind="app_name"></p>
      </div>
    );
  }
  _showClicked(e) {
    this.setState({ is_show: !this.state.is_show });
  }
}
React_Basic.propTypes = {
  app_name: PropTypes.string,
}

React_Basic.defaultProps = {
  app_name: '',
}
export default React_Basic;