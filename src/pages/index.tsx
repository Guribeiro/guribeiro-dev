import { Instagram, Twitter, Linkedin } from 'react-feather';

import Section from '@/components/Section';
import Welcome from '@/components/Welcome';
import { useTheme } from '@/hooks/theme';
import { Main } from '@/styles';
import { home, HomeProps } from '@/utils/personalData';
import { GetStaticProps } from 'next';

export default function Home({
  biography,
  workExperiences,
  skills,
  courses,
}: HomeProps) {
  const { theme } = useTheme();

  const { languages, technologies } = skills;

  return (
    <>
      <Main>
        <figure>
          <img
            src="https://avatars.githubusercontent.com/u/50778163?v=4"
            alt="Foto de Gustavo Henrique Ribeiro Dias"
          />
          <figcaption>
            <a
              href="https://www.instagram.com/gustavhrd/?hl=pt-br"
              target="_blank"
              rel="noreferrer"
            >
              <Instagram
                className="instagram"
                color={theme.colors.text}
                size={22}
              />
            </a>
            <a
              href="https://www.linkedin.com/in/gustavohribeiro/"
              target="_blank"
              rel="noreferrer"
            >
              <Linkedin
                className="linkedin"
                color={theme.colors.text}
                size={22}
              />
            </a>
            <a
              href="https://twitter.com/Guribeir"
              target="_blank"
              rel="noreferrer"
            >
              <Twitter
                className="twitter"
                color={theme.colors.text}
                size={22}
              />
            </a>
          </figcaption>
        </figure>

        <Welcome>Olá</Welcome>

        <Section label="😎 Quem sou Eu">
          {biography.map((paragraph, index) => (
            <div key={index}>
              <p>{paragraph}</p>
              <br />
            </div>
          ))}
        </Section>

        <Section label="👩🏻‍💻 Experiência de trabalho">
          {workExperiences.map((workExperience, index) => (
            <article key={index}>
              <h3>{workExperience.jobRole}</h3>
              <a
                href={workExperience.company.link}
                target="_blank"
                rel="noreferrer"
              >
                <i>{workExperience.company.name}</i>
              </a>
              <p>{workExperience.jobDescription}</p>
            </article>
          ))}
        </Section>
        <Section label="🛠 Habilidades">
          <article>
            <h3>💻 Tecnologias</h3>
            {technologies.map((technologie, index) => (
              <div key={index}>
                <i>{technologie.title}</i>
                <p>{technologie.description}</p>
              </div>
            ))}
          </article>
          <article>
            <h3>🗣 Idiomas </h3>
            {languages.map((language, index) => (
              <div key={index}>
                <i>{language.title}</i>
                <p>{language.description}</p>
              </div>
            ))}
          </article>
        </Section>
        <Section label="📚 Educação">
          {courses.map((course, index) => (
            <article key={index}>
              <h3>{course.title}</h3>
              <i>{course.date}</i>
              <p>{course.provider}</p>
            </article>
          ))}
        </Section>
      </Main>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const { biography, workExperiences, skills, courses } = home;

  return {
    props: {
      biography,
      workExperiences,
      skills,
      courses,
    },
  };
};
