import { Link } from 'react-router-dom';
import OurLogo from '../../Components/SvgIcons/logo.svg';
import css from './Logo.module.css';

function Logo({ handleLinkClick }) {
  const handleClick = () => {
    if (handleLinkClick) {
      handleLinkClick();
    }
  };
  return (
    <Link to="/" onClick={handleClick}>
      <img className={css.logo} src={OurLogo} alt="YourPetLogo" />
    </Link>
  );
}

export default Logo;
