type Company = {
  name: string;
  link: string;
};

type Skill = {
  title: string;
  description: Array<string>;
};

type Skills = {
  languages: Array<Skill>;
  technologies: Array<Skill>;
};

type Course = {
  title: string;
  date: string;
  provider: string;
  certificate?: string;
};

type WorkExperience = {
  jobRole: string;
  company: Company;
  jobDescription: Array<string>;
};

export interface HomeProps {
  biography: Array<string>;
  workExperiences: Array<WorkExperience>;
  skills: Skills;
  courses: Array<Course>;
}

export const home: HomeProps = {
  biography: [
    'Há dois anos me apaixonei por programação quando dei início ao curso de ADS e desde então venho estudando e praticando bastante, foi mais ou menos quando eu comecei a ouvir falar da rocketseat 💜',
    'Atualmente estou trabalhando em uma software house, estou tendo a oportunidade de aprender muita coisa nova e colocar em prática muito do que eu aprendi e sigo aprendendo durante os meus estudos',
    'Estou super aberto para ajudar as pessoas, seja com dúvidas tecnicas, problemas no código ou uma mãozinha em algum projeto',
    'Bora bater um papo, tenho certeza que eu vou adorar te conhecer e saber um pouco da sua jornada e o que te motiva 🤟',
  ],
  workExperiences: [
    {
      jobRole: 'Fullstack Developer',
      company: {
        name: 'Softwrap, Remote - (01/05/2021 - 24/12/2021)',
        link: 'https://softwrap.com.br/',
      },
      jobDescription: [
        'Atualmente estou trabalhando em um aplicativo mobile multiplataforma que está sendo desenvolvido com react-native. O aplicativo visa facilitar a compra de cotas em criptomoedas e a realização de investimentos pelos clientes da empresa, que gerenciará essas solicitações feitas pelo aplicativo direto do dashboard. Cuidei de todo o desenvolvimento das telas da aplicação, seguindo de acordo com o layout desenvolvido pelo designer da empresa e aprovado pelo próprio cliente do projeto. Também fiquei encarregado de realizar a integração do aplicativo com os serviços do Firebase de acordo com a demanda do projeto.',
      ],
    },
    {
      jobRole: 'Conferente',
      company: {
        name: ' Express Transportes Urbanos LTDA, Local – (01/09/2014 - 01/12/2019)',
        link: '',
      },
      jobDescription: [
        'Como conferente, atuei em diversos segmentos do setor da Recebedoria, verificando irregularidades nas validações dos bilhetes de ônibus, divergência na totalização dos passageiros diários, divergência de horário entre funcionários x escala. Atuei na digitação dos relatórios diários de bordo e também trabalhava com pagamentos dos funcionários na boca do caixa, sendo responsável por malotes de alto valor em dinheiro.',
      ],
    },
  ],
  skills: {
    languages: [
      {
        title: 'Inglês',
        description: [
          '1 ano estudando sozinho e 2 anos estudando no CNA. Consigo ler documentos e me comunicar bem',
        ],
      },
      {
        title: 'Português',
        description: ['Falante nativo'],
      },
    ],
    technologies: [
      {
        title: 'Javascript',
        description: [
          'Minha linguaguem de programação nativa é o Javascript, a qual eu tenho uma maior proficiência e consigo desenvolver muito mais e que eu venho estudando há mais de 2 anos. Já a utilizei em projetos frontend com React, NextJs e agora estou conhecendo mais sobre o ViteJs, uma nova ferramenta para substituir o webpack e o bundle de projetos React. No backend já desenvolvi APIs Rest em Node utilizando o framework Express e para testes tenho conhecimento em Jest.',
        ],
      },
    ],
  },
  courses: [
    {
      title: 'GOSTACK BOOTCAMP',
      date: 'Concluído em 04/02/2021',
      provider: 'Rocketseat',
      certificate:
        'https://app.rocketseat.com.br/api/certificates/pdf/f0a5f8fd-a28e-42ca-aece-36da60aff9ee',
    },
    {
      title: 'PRINCÍPIOS BÁSICOS DO MARKETING DIGITAL',
      date: 'Concluído em 21/08/2020',
      provider: 'Google Ateliê Digital',
    },
    {
      title: 'UX DESIGN & USER EXPERIENCE DESIGN COURSE - THEORY ONLY',
      date: 'Concluído em 03/08/2020',
      provider: 'Udemy',
      certificate:
        'https://www.udemy.com/certificate/UC-8ccbdd3a-b472-43f4-abaa-9e8c3d9bd871/',
    },
    {
      title: ' SUPERIOR DE TECNOLOGIA EM ANÁLISE E DESENVOLVIMENTO DE SISTEMAS',
      date: '2019 (Inacabado) - Restam apenas horas complementares',
      provider: 'Universidade Cruzeiro do Sul - São Miguel paulista',
    },
  ],
};
