import PropTypes from 'prop-types';
import styles from '../../App.css';


export default function FeedbackOptions({ options, onLeaveFeedback }) {
  
  return (
  
    <div className={styles.buttons}
>
    {options.map(option => (
      <button
        type="button"
        key={option}
        onClick={onLeaveFeedback(option)}
      >
        {option}
      </button>))}
  </div>
    )
}

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};





