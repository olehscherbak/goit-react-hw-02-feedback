import css from './FeedbackOptions.module.css';

export default function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <div className={css.feedbackControls}>
      <h2 className="title">Please leave feedback</h2>
      <ul className={css.buttonList}>
        {options.map(option => {
          return (
            <li key={option} className={css.buttonListItem}>
              <button
                type="button"
                className={css.button}
                name={option}
                onClick={onLeaveFeedback}
              >
                {option}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
