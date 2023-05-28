import { Link } from 'react-router-dom';
import SectionTitle from 'components/common/SectionTitle/SectionTitle';

const NotFound = () => {
  return (
    <div>
      <Link to="/">Go to Home</Link>
      <SectionTitle title="NotFound" />
    </div>
  );
};

export default NotFound;
