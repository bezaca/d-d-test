import React from 'react';
import * as RJD from '../../../../lib/main';
import InputComponent from './InputComponent';

export class TextNodeWidget extends React.Component {

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
		return (
			<div className='text-node'>
				<div className="close-button">
					<div className='fa fa-close fa-sm' onClick={this.onRemove.bind(this)} />
				</div>
				<div className="wrapper-text">
					<div className='in'>
						{this.getInPort()}
					</div>
					<div className='text-cotainer'>
						<InputComponent />
					</div>
					<div className='out'>
						{this.getOutPort()}
					</div>
				</div>
			</div>
		);
	}


}

export const TextNodeWidgetFactory = React.createFactory(TextNodeWidget);

