import {
  createContext,
  useContext,
  ReactNode,
  useEffect,
  useState,
  useCallback,
} from 'react';

import api from '@/services/api';

type Owner = {
  id: number;
  login: string;
  avatar_url: string;
  html_url: string;
};

type Repository = {
  id: number;
  name: string;
  full_name: string;
  owner: Owner;
  html_url: string;
  description: string;
  language: string;
  topics: Array<string>;
  updated_at: Date;
};
type AxiosResponse = Array<Repository>;

interface GithubContextData {
  repositories: Array<Repository>;
  repositoriesAmout: number;
  languages: Array<string>;
  loading: boolean;
  loadMore(): void;
  handleSetOder(order: Order): void;
}

type Sort = 'stars' | 'forks' | 'updated' | 'created_at';

type Order = 'asc' | 'desc';

const GithubContext = createContext<GithubContextData>({} as GithubContextData);

interface GithubProviderProps {
  children: ReactNode;
}

const GithubProvider = ({ children }: GithubProviderProps): JSX.Element => {
  const PER_PAGE = 15;

  const [page, setPage] = useState(1);
  const [sort, setSort] = useState<Sort>('created_at');
  const [order, setOrder] = useState<Order>('desc');
  const [loading, setLoading] = useState(true);

  const [repositories, setRepositories] = useState<Array<Repository>>([]);
  const [languages, setLanguages] = useState<Array<string>>([]);
  const [repositoriesAmout, setRepositoriesAmout] = useState(0);

  useEffect(() => {
    const loadAllGithubRepos = async () => {
      try {
        const { data } = await api.get<AxiosResponse>('/repos', {
          params: {
            per_page: 100,
          },
        });

        setRepositoriesAmout(data.length);

        const githubLanguages = [
          ...new Set(
            data
              .map((repository) => repository.language)
              .filter((item) => item !== null)
          ),
        ];

        setLanguages(githubLanguages);
      } catch (error) {
        alert(error.message);
      } finally {
        setLoading(false);
      }
    };
    loadAllGithubRepos();
  }, [page]);

  useEffect(() => {
    const loadGithubRepos = async () => {
      try {
        const { data } = await api.get<AxiosResponse>('/repos', {
          params: {
            per_page: PER_PAGE,
            page,
            sort,
            order,
          },
        });
        setRepositories((prev) => prev.concat(data));
      } catch (error) {
        alert(error.message);
      } finally {
        setLoading(false);
      }
    };
    loadGithubRepos();
  }, [page, sort, order]);

  const loadMore = useCallback(() => {
    setPage((prev) => prev + 1);
  }, []);

  const handleSetOder = useCallback((order: Order) => {
    setOrder(order);
  }, []);

  return (
    <GithubContext.Provider
      value={{
        repositories,
        languages,
        repositoriesAmout,
        loading,
        loadMore,
        handleSetOder,
      }}
    >
      {children}
    </GithubContext.Provider>
  );
};

function useGithub(): GithubContextData {
  const context = useContext(GithubContext);

  if (!context)
    throw new Error('useGithub should be used within an GithubProvider');

  return context;
}

export { GithubProvider, useGithub };
