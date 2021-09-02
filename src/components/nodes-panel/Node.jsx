import React from 'react';
import DragWrapper from './DragWrapper';
import { ImageNodeWidget } from '../nodes/imagenode/ImageNodeWidget';
import { SvgNodeWidget } from '../nodes/svgnode/SvgNodeWidget';

class Node extends React.Component {
    renderNode() {
        const { type } = this.props;

        switch (type) {
            // displayOnly makes ports visible 
            case 'imagenode':
                return <ImageNodeWidget node={{ name: 'Image node' }} color={'red'} displayOnly/>;
                
            case 'textnode':
                return <SvgNodeWidget node={{ name: 'Text Node' }} type={type} displayOnly/>

            case 'rdsnode':
                return <SvgNodeWidget node={{ name: 'RDS'}} type={type} displayOnly/>

            case 'elasticnode':
                return <SvgNodeWidget node={{  name: 'Elastic Load Balancing' }} type={type} displayOnly/>

            case 'ec2node':
                return <SvgNodeWidget node={{ name: 'EC2' }} type={type} displayOnly/>


            default:
                console.warn('Unknown node type');
                return null;
        }
        
    }

    render() {
        const { type } = this.props;

        return (
            <DragWrapper type={type}  style={{ display: 'inline-block' }}>
                {this.renderNode()}
            </DragWrapper>
        );
    }
}

export default Node;