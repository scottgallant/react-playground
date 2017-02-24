import React from 'react';

export class Tabs extends React.Component {
  constructor() {
    super()
    this.state = {
      visibleTab: 0,
    }
  }
  renderVisibleTab() {
    if (this.state.visibleTab === 0) {
      return <div className="tabs__content tabs__content--active">
      Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur. Maecenas faucibus mollis interdum. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.
      </div>
    }
    else {
      return   <div className="tabs__content tabs__content--active">
        Second Tab
        </div>
    }
  }
  setTab(index) {
    this.setState({ visibleTab: index })
  }
  render() {
    return (
      <div>
        <div className="tabs">
          <div className="tabs__bar">
            <div className="tabs__container">
              <div className={`tabs__tab ${this.state.visibleTab === 0 && 'tabs__tab--active'}`} onClick={() => this.setTab(0)} >General</div>
              <div className={`tabs__tab ${this.state.visibleTab === 1 && 'tabs__tab--active'}`} onClick={() => this.setTab(1)}>Hosting</div>
              <div className="tabs__tab">Cat</div>
              <div className="tabs__tab">Dog</div>
            </div>
          </div>
          <div className="tabs__border"></div>
        </div>
        {this.renderVisibleTab()}

      </div>
    );
  }
}
