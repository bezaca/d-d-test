import React from 'react';
import { DefaultPortLabel } from './DefaultPortLabelWidget';

import SvgModel from '../../src/components/nodes/svgnode/SvgModel';
export class DefaultNodeWidget extends React.Component {
  static defaultProps = {
    node: null,
    type: ''
  };

  onRemove() {
    const { node, diagramEngine } = this.props;
    node.remove();
    diagramEngine.forceUpdate();
  }

  getInPorts() {
    const { node } = this.props;
    return node.getInPorts().map((port, i) => <DefaultPortLabel model={port} key={`in-port-${i}`} />);
  }

  getOutPorts() {
    const { node } = this.props;
    return node.getOutPorts().map((port, i) => <DefaultPortLabel model={port} key={`out-port-${i}`} />);
  }


  render() {
    const { node } = this.props;
    return (
      <div className='svg-node'>
        <div className='wrapper-svg'>
          <div className='in'>
            {this.getInPort()}
          </div>

          <div className='svg-container'>
            <SvgModel type={{ type }} />
          </div>

          <div className='out'>
            {this.getOutPort()}
          </div>
        </div>

        <div className='title'>
          <div className='name'>
            {node.name == 'Text Node' ? '' : node.name}
          </div>
        </div>
      </div>
    );
  }
}
