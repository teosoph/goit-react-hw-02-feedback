
const FeedbackOptions = ({ options, onLeaveFeedback }) =>
  <div>
    {options.map(option => (
      <button
        type="button"
        key={option}
        onClick={onLeaveFeedback}
      >
        {option}
      </button>))}
  </div>


export default FeedbackOptions





