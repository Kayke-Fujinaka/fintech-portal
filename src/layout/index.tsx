import Header from '../components/Header';
import { ILayoutProps } from './@types';

const Layout = ({ children }: ILayoutProps) => {
  return (
    <>
      <Header />
      <div>{children}</div>
    </>
  );
};

export default Layout;
