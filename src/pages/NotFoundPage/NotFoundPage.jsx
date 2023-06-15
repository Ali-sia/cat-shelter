import NotFound from '../../assets/images/NotFound.jpg';
import { BackLink } from './NotFoundPage.styled';

const NotFoundPage = () => {
  return (
    <div>
      <h3>404</h3>
      <h3>We can not find this page((</h3>
      <BackLink to="/">To home page</BackLink>

      <div>
        <img src={NotFound} alt="cat not found"></img>
      </div>
    </div>
  );
};

export default NotFoundPage;
