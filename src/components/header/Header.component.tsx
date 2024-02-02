import { Link } from 'react-router-dom';

import { HeaderProps } from './Header.interface';

export const Header = ({ children }: HeaderProps) => {
  return (
    <div>
      <div style={{ display: 'flex', gap: 16 }}>
        <Link to="/">Home</Link>
        <Link to="/users">Users</Link>
      </div>
      {children}
    </div>
  );
};
