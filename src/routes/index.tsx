import { createBrowserRouter } from 'react-router-dom';

import SignIn from '../pages/Login/SignIn';
import SignUp from '../pages/Login/SignUp';

export const router = createBrowserRouter([
  {
    path: '/login',
    element: (
      <div>
        <SignIn />
      </div>
    ),
  },
  {
    path: '/registro',
    element: (
      <div>
        <SignUp />
      </div>
    ),
  },
]);
