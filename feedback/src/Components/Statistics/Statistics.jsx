

const Statistics = ({ good, neutral, bad, total, positivePercentage }) =>

        <ul >
            {/* Statistic indicators */}
            <li >Good: {good}</li>
            <li >Neutral: {neutral}</li>
            <li >Bad: {bad} </li>

            {/* Statistic methods */}
            <li >Total: {total} </li>
            <li >Positive feedbacks: {positivePercentage} %</li>
        </ul>

export default Statistics
