import _ from 'lodash';
import * as RJD from '../../../../lib/main';

export class SvgNodeModel extends RJD.NodeModel {
	constructor(name = 'Untitled', type = '') {
		super(type);
		this.addPort(new RJD.DefaultPortModel(false, 'output'));
		this.addPort(new RJD.DefaultPortModel(true, 'input'));
		this.name = name;
		this.type = type;
	}

	deSerialize(object) {
		super.deSerialize(object);
		this.name = object.name;
		this.type = object.type
	}

	serialize() {
		return _.merge(super.serialize(), {
			name: this.name,
			type: this.type
		});
	}

	getInPort() {
		return this.ports.input;
	}

	getOutPort() {
		return this.ports.output;
	}
}
