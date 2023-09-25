import css from './FeedbackOptions.module.css';
import PropTypes from 'prop-types';

export default function FeedbackOptions({ onLeaveFeedback, options }) {
  const { myButtons, myButton } = css;

  // Пишемо функцію, що збільшує першу літеру у рядку, для назв кнопок
  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  return (
    <div className={myButtons}>
      {options.map(option => (
        <button key={option} className={myButton} onClick={onLeaveFeedback}>
          {capitalizeFirstLetter(option)}
        </button>
      ))}
    </div>
  );
}

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
