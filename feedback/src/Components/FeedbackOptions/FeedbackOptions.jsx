import React, { Component } from 'react';


class FeedbackOptions extends Component {
    
    render() { 
        const { options, onLeaveFeedback } = this.props
        return (      
            <h1>    Please leave feedback </h1>
            <div>
                
          {objKeys.map(objKey => (
            <button
              className='button'
              type="button"
              key={objKey}
              onClick={this.onBtnClick(objKey)}
            >              {objKey}
            </button>)}

        </div>

        )
    }
}
export default FeedbackOptions