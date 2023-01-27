import css from './Statistics.module.css'

export default function Statistics({ good, neutral, bad, total, positivePercentage }) {
    return (
        <div className={css.statistics}>
        <h2 className="title">Statistics</h2>
            <p className={css.statistiscItem}>
                <span>Good: </span>
                <span>{good}</span>
            </p>
            <p className={css.statistiscItem}>
                <span>Neutral: </span>
                <span>{neutral}</span>
            </p>
            <p className={css.statistiscItem}>
                <span>Bad: </span>
                <span>{bad}</span>
            </p>
            <p className={css.statistiscItem}>
                <span>Total: </span>
                <span>{total}</span>
            </p>
            <p className={css.statistiscItem}>
                <span>Positive feedback: </span>
                <span>{positivePercentage}</span>
            </p>
    </div>
    );

}