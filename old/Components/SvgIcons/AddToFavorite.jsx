import PropTypes from 'prop-types';

export const AddToFavorite = ({ id, className }) => {
  switch (id) {
    case 'svg':
      return (
        <svg
          className={className}
          width="20"
          height="18"
          viewBox="0 0 20 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M2.3314 9.04738L10 17L17.6686 9.04738C18.5211 8.16332 19 6.96429 19 5.71405C19 3.11055 16.9648 1 14.4543 1C13.2487 1 12.0925 1.49666 11.24 2.38071L10 3.66667L8.75997 2.38071C7.90749 1.49666 6.75128 1 5.54569 1C3.03517 1 1 3.11055 1 5.71405C1 6.96429 1.47892 8.16332 2.3314 9.04738Z"
            stroke="#54ADFF"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    default:
      return <svg></svg>;
  }
};

AddToFavorite.propTypes = {
  id: PropTypes.string.isRequired,
};
