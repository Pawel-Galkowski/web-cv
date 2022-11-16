export const SET_EXPERIENCE = 'SET_EXPERIENCE'
export const PROFILE_ERROR = 'PROFILE_ERROR'

export type ExperienceType = {
  title: string
  company: string
  description?: string
  from: string
  to?: string
  isPresent?: boolean
  location: string
  data: string[]
}

type InitialType = {
  loading: boolean
  exp: ExperienceType[]
}

export const InitialState: InitialType = {
  loading: true,
  exp: [
    {
      title: 'Software Engineer',
      company: 'Capgemini SE',
      from: '05/2022',
      isPresent: true,
      location: 'Wroclaw / Remote',
      data: [
        'Developed several React components for new website project.',
        'Attended daily Scrum meetings, kept up-to-date on best practices for JavaScript frameworks and techniques.',
        'Learned Angular for new implementations in project.',
      ],
    },
    {
      title: 'JavaScript Developer',
      company: 'ING Bank Śląski S.A.',
      description:
        'The ING Group is a Dutch multinational banking and financial services corporation headquartered in Amsterdam',
      from: '12/2020',
      to: '05/2022',
      location: 'Katowice / Remote',
      data: [
        'Maintained cross platform banking system.',
        'Prepared mock data for quality engineer necessary for automated tests.',
        'Worked closely with agile team and provided end-to-end solutions.',
        'Developed new JavaScript components for web application.',
        'Actively traced and fixed bugs as they were discovered.',
        'Implemented storybook and a lot of informations inside a storybook about components to improve developers work.',
      ],
    },
    {
      title: 'Junior Full-Stack Developer',
      company: 'Instal-Konsorcjum Sp. z o.o.',
      description: 'Instal-Konsorcjum represent one of the biggest web of installation wholesalers in Poland. It is a member of EDT Group with headquarter in Essen(DE)',
      from: '07/2018',
      to: '12/2020',
      location: 'Wroclaw',
      data: [
        'Implemented a client ticket dashboard, reducing calls by 40%.',
        'Worked closely with clients to establish problems specifications.',
        'Created 30 responsive websites using Wordpress and Joomla which  replaced non-responsive pages and result 18% faster load time.',
        'Implemented Google tools to generated 10% up to 20% more visitors per page. (Google Analitics, Search Console)',
        'Worked on internal applications. (JavaScript, PHP, MySql, HTML, CSS, C#)',
      ],
    },
    {
      title: 'Computer Specialist',
      company: 'Regional Hospital in Raciborz',
      from: '01/2017',
      to: '07/2017',
      location: 'Raciborz',
      data: [
        'IImplemented new site of company. (JavaScript, HTML, CSS)',
        'Closed 90% of trouble tickets on the first call without escalation.',
        'Repaired and speed up machines by replacement of subassemblies.',
        'Set up 50% of new computers in whole company.',
      ],
    },
  ],
}
