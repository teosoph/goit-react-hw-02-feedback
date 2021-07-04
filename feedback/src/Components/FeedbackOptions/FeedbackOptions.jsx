import  { Component } from 'react';


export default  class FeedbackOptions extends Component {
    
  const { options, onLeaveFeedback } = this.props
  
render() {
  return (
    
    <h1>    Please leave feedback </h1>
    
        <div>
        
          {options.map
          
          (objKey => 
          (
            <button
              type="button"
              key={objKey}
              onClick={onLeaveFeedback(objKey)}
            > 
                         {objKey}
            </button>
            
            ))
          }
            
            

        </div >
        
        )



}}
  
  

