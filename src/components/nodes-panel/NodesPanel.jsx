import React from 'react';
import Node from './Node';

class NodesPanel extends React.Component {
    render() {
        return (
            <div className="panel-wrapper">
                <div className="nodes-panel">
                    <div className="node-wrapper">
                        <Node type='textnode'/>
                    </div>
                    <div className='node-wrapper'>
                        <Node type='rdsnode' />
                    </div>
                    
                    <div className='node-wrapper'>
                        <Node type='ec2node' />
                    </div>
                    
                    <div className='node-wrapper'>
                        <Node type='elasticnode' />
                    </div>
                </div>
            </div>
        );
    }
}

export default NodesPanel;