import { Book } from 'react-feather';

import { useTheme } from '@/hooks/theme';

import { Container, Header, Languages } from './styles';

interface RepositoryProps {
  html_url: string;
  name: string;
  description: string;
  language: string;
}

const Repository = ({
  html_url,
  name,
  description,
  language,
}: RepositoryProps): JSX.Element => {
  const { theme } = useTheme();
  return (
    <Container>
      <Header>
        <Book size={20} color={theme.colors.text} />
        <a href={html_url} target="_blank" rel="noreferrer">
          {name}
        </a>
      </Header>
      <p>{description}</p>
      {language && (
        <Languages>
          <div className={language} />
          <strong>{language}</strong>
        </Languages>
      )}
    </Container>
  );
};
export default Repository;
