import React, {Component, PropTypes} from 'react';

class React_Basic_Accordian extends Component{
  constructor(props){
    super(props);
    this.state = {
      app_background_color: '#fff',
      accordian_tabs: {
        'one': true,
        'two': false,
        'three': false
      },
    };
  }
  render(){
    document.body.style.backgroundColor = this.state.app_background_color;
    return (

      <div>
        <a href="/">back</a>
        <h1>React Accordian Tab Menu</h1>
        <button
          type="button"
          onClick={ e => this.setState({ app_background_color: '#feccce' })}
          className="chage-body-bg-color">change body element background color.</button>

        <div className="ui-accordian">
          <h3 className="ui-accordian-tab">
            <a href onClick={this._openTab.bind(this, 'one')}>tab 1</a>
          </h3>
          { 
            this.state.accordian_tabs.one ? 
              <div className="ui-accordian-tabpanel">Molestiae debitis ab maxime voluptatum sit. Nesciunt laborum temporibus recusandae earum iste, tempora. Illo nam sed harum voluptatum rerum, incidunt sapiente iure, nostrum aliquid aliquam molestiae quaerat provident magnam maiores, non corporis facilis repellendus voluptas nisi est. Repudiandae, aliquid temporibus corporis nihil iusto eum, velit nisi cumque incidunt nam provident dicta illum minus dolorem, accusantium labore obcaecati.</div>
              : null 
          } 
          <h3 className="ui-accordian-tab">
            <a href  onClick={this._openTab.bind(this, 'two')}>tab 2</a>
          </h3>
          {
            this.state.accordian_tabs.two ?
              <div className="ui-accordian-tabpanel">ab maxime voluptatum sit. Nesciunt laborum temporibus recusandae earum iste, tempora. Illo nam sed harum voluptatum rerum, incidunt sapiente iure, nostrum aliquid aliquam molestiae quaerat provident magnam maiores, non corporis facilis repellendus voluptas nisi est. Repudiandae, aliquid temporibus corporis nihil iusto eum, velit nisi cumque incidunt nam provident dicta illum minus dolorem, accusantium labore obcaecati.</div>
              : null
          }
          <h3 className="ui-accordian-tab">
            <a href  onClick={this._openTab.bind(this, 'three')}>tab 3</a>
          </h3>
          {
            this.state.accordian_tabs.three ?
              <div className="ui-accordian-tabpanel">Illo nam sed harum voluptatum rerum, incidunt sapiente iure, nostrum aliquid aliquam molestiae quaerat provident magnam maiores, non corporis facilis repellendus voluptas nisi est. Repudiandae, aliquid temporibus corporis nihil iusto eum, velit nisi cumque incidunt nam provident dicta illum minus dolorem, accusantium labore obcaecati.</div>
              : null
          }
          
        </div>
      </div>
    );
  }
  
  _openTab(name,proxy, e){
    proxy.preventDefault();
    
    let new_accordian_tabs = {
      one: this.state.accordian_tabs.one,
      two: this.state.accordian_tabs.two,
      three: this.state.accordian_tabs.three
    };
    new_accordian_tabs[name] = !this.state.accordian_tabs[name];
    
    this.setState({ accordian_tabs: new_accordian_tabs });
    return false;
  }
}

export default React_Basic_Accordian;