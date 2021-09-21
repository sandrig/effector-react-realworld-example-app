import * as user from 'entities/user';
import { Link } from 'shared/library/router';

export const LogoutMessage: React.FC = () => {
  const isAuth = user.selectors.useIsAuth();

  return (
    <>
      {isAuth ? null : (
        <p>
          <Link to="/login">Sign in</Link>
          &nbsp;or&nbsp;
          <Link to="/register">sign up</Link>
          &nbsp;to add comments on this article.
        </p>
      )}
    </>
  );
};