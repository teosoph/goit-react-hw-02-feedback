import PropTypes from 'prop-types';



const Statistics = ({ good, neutral, bad, total, positivePercentage }) =>
        
        <ul>
            {/* Statistic indicators */}
            <li >Good: {good}</li>
            <li >Neutral: {neutral}</li>
            <li >Bad: {bad} </li>

            {/* Statistic methods */}
            <li >Total: {total} </li>
        <li id="blink6" >Positive feedbacks: {positivePercentage} %</li>
        </ul>

export default Statistics



Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.number.isRequired,
};