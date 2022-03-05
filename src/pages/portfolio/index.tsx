import { useCallback } from 'react';
import { GitHub, Figma } from 'react-feather';

import Avatar from '@/components/Avatar';
import EndMessage from '@/components/EndMessage';
import LanguageCard from '@/components/LanguageCard';
import Loading from '@/components/Loading';
import { Main } from '@/components/Main/styles';
import Repository from '@/components/Repository';
import Section from '@/components/Section';
import { useGithub } from '@/hooks/github';
import { useTheme } from '@/hooks/theme';

import { StyledInifiteScroll } from './styles';

const Portfolio = (): JSX.Element => {
  const { repositories, loadMore, repositoriesAmout, languages } = useGithub();

  const scrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const { theme } = useTheme();
  return (
    <Main>
      <figure>
        <Avatar />
        <figcaption>
          <a
            href="https://www.figma.com/@guribeiro"
            target="_blank"
            rel="noreferrer"
          >
            <Figma className="figma" color={theme.colors.text} size={22} />
          </a>
          <a
            href="https://github.com/Guribeiro"
            target="_blank"
            rel="noreferrer"
          >
            <GitHub className="github" color={theme.colors.text} size={22} />
          </a>
        </figcaption>
      </figure>

      <Section label="🐙 Repositórios do Github">
        <StyledInifiteScroll
          dataLength={repositories.length}
          next={() => loadMore()}
          hasMore={repositories.length < repositoriesAmout}
          loader={<Loading />}
          endMessage={<EndMessage scrollToTop={scrollToTop} />}
          pullDownToRefreshThreshold={50}
        >
          <>
            <h3>Linguagens</h3>
            <div className="languages-container">
              {languages.map((language) => (
                <LanguageCard key={language} label={language} />
              ))}
            </div>
            {repositories.map((repository) => (
              <Repository key={repository.id} {...repository} />
            ))}
          </>
        </StyledInifiteScroll>
      </Section>
    </Main>
  );
};

export default Portfolio;
