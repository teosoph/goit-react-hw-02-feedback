
export default function FeedbackOptions({ options, onLeaveFeedback }) {
  
  return (
  
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
    )
}







