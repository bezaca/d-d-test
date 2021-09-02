import React from 'react';
import * as RJD from '../../../../lib/main';

import SvgModel from './SvgModel';


export class SvgNodeWidget extends React.Component {

	static defaultProps = {
		node: null,
		type: '',
	};

	onRemove() {
		const { node, diagramEngine } = this.props;
		node.remove();
		diagramEngine.forceUpdate();
	}

	getInPort() {
		const { node } = this.props;
		let inputNode = node;

		return node.getInPort ? <RJD.DefaultPortLabel model={inputNode.getInPort()} key='in-port' /> : null;
	}

	getOutPort() {
		const { node } = this.props;
		let outputNode = node;

		return outputNode.getOutPort ? <RJD.DefaultPortLabel model={outputNode.getOutPort()} key='out-port' /> : null;
	}


	render() {
		const { node, type, displayOnly } = this.props
		return (
			<div className='svg-node'>
				<div className="close-button">
					{!displayOnly ? <div className='fa fa-close' onClick={this.onRemove.bind(this)} /> : null}
				</div>
				<div className="wrapper-svg">
					<div className='in'>
						{this.getInPort()}
					</div>
					<div className='svg-container'>
						<SvgModel type={type} />
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

export const SvgNodeWidgetFactory = React.createFactory(SvgNodeWidget);

