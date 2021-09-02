import _ from 'lodash';
import * as RJD from '../../../../lib/main';

export class TextNodeModel extends RJD.NodeModel {
	constructor(name = 'Untitled', content) {
		super('textnode');
		this.addPort(new RJD.DefaultPortModel(false, 'output'));
		this.addPort(new RJD.DefaultPortModel(true, 'input'));
		this.name = name;
		this.content = content;
	}

	deSerialize(object) {
		super.deSerialize(object);
		this.name = object.name;
		this.content = object.content;
	}

	serialize() {
		return _.merge(super.serialize(), {
			name: this.name,
			content: this.content
		});
	}

	getInPort() {
		return this.ports.input;
	}

	getOutPort() {
		return this.ports.output;
	}
}
