import React from 'react';
import Select from '../Select';

const Quality = React.createClass({

    render() {
        let qualities = ['Excellent', 'Very Good', 'Good', 'Fair'];
        return (
          <Select lable={this.props.label || 'Quality'} options={qualities} value={'?'} onChange={() => {}} multiple name='cut[]' size='3' style={{height: '100%'}} />
        );
    }

});

export default Quality;
