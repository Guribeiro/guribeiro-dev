import {
  createContext,
  useContext,
  ReactNode,
  useState,
  useCallback,
} from 'react';

import Menu from '@/components/Menu';

interface MenuContextData {
  isMenuOpen: boolean;
  onMenuOpen(): void;
}

const MenuContext = createContext<MenuContextData>({} as MenuContextData);

interface MenuProviderProps {
  children: ReactNode;
}

const MenuProvider = ({ children }: MenuProviderProps): JSX.Element => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const onMenuOpen = useCallback(() => {
    setIsMenuOpen(true);
  }, []);

  const onMenuClose = useCallback(() => {
    setIsMenuOpen(false);
  }, []);

  const className = isMenuOpen ? 'show-menu' : 'hide-menu';

  return (
    <MenuContext.Provider value={{ isMenuOpen, onMenuOpen }}>
      <Menu className={className} onMenuClose={onMenuClose} />
      {children}
    </MenuContext.Provider>
  );
};

function useMenu(): MenuContextData {
  const context = useContext(MenuContext);

  if (!context)
    throw new Error('useMenu should be used within an MenuProvider');

  return context;
}

export { MenuProvider, useMenu };
