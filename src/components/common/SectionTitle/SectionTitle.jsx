import PropTypes from 'prop-types';
import { Title } from './SectionTitle.styled';

const SectionTitle = ({ title }) => {
  return <Title>{title}</Title>;
};

SectionTitle.propTypes = {
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
};

export default SectionTitle;
