import * as RJD from '../../../../lib/main';
import { SvgNodeModel } from './SvgNodeModel';


export class SvgNodeFactory extends RJD.AbstractInstanceFactory {
	constructor() {
		super('SvgNodeModel');
	}

	getInstance() {
		return new SvgNodeModel();
	}
}
