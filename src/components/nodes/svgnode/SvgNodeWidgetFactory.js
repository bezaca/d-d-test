import * as RJD from '../../../../lib/main';
import { SvgNodeWidgetFactory } from './SvgNodeWidget';

export class Ec2NodeNodeWidgetFactory extends RJD.NodeWidgetFactory {
	constructor() {
		super('ec2node');
	}

	generateReactWidget(diagramEngine, node) {
		return SvgNodeWidgetFactory({ node });
	}
}

export class ElasticNodeNodeWidgetFactory extends RJD.NodeWidgetFactory {
	constructor() {
		super('elasticnode');
	}

	generateReactWidget(diagramEngine, node) {
		return SvgNodeWidgetFactory({ node });
	}
}


export class RdsNodeNodeWidgetFactory extends RJD.NodeWidgetFactory {
	constructor() {
		super('rdsnode');
	}

	generateReactWidget(diagramEngine, node) {
		return SvgNodeWidgetFactory({ node });
	}
}
