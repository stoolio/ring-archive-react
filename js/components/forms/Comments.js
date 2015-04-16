import React from 'react';

const Comments = React.createClass({
  render() {
    return (
      <label>
        Comments
        <textarea cols='30' name='comments' placeholder='Enter any additional thoughts or questions...' rows='10'></textarea>
      </label>
    );
  }
});

export default Comments;
