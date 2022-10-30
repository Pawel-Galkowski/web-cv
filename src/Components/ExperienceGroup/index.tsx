import { Typography } from 'antd'
import { Experience } from '..'
import { CapgeminiData, INGData, IKData, HospitalData } from './data'

const { Title } = Typography

export const ExperienceGroup = () => (
	<section className='container'>
		<Title level={3} className='right-title'>
			Experience
		</Title>
		<Experience
			title='Software Engineer'
			company='Capgemini SE'
			from='05/2022'
			location='Wroclaw / Remote'
			data={CapgeminiData}
			isPresent
		/>
		<Experience
			title='JavaScript Developer'
			company='ING Bank Śląski S.A.'
			description='The ING Group is a Dutch multinational banking and financial services corporation headquartered in Amsterdam'
			from='12/2020'
			to='05/2022'
			location='Katowice / Remote'
			data={INGData}
		/>
		<Experience
			title='Junior Full-Stack Developer'
			company='Instal-Konsorcjum Sp. z o.o.'
			description='Instal-Konsorcjum represent one of the biggest web of installation wholesalers in Poland. It is a member of EDT Group with headquarter in Essen(DE)'
			from='07/2018'
			to='12/2020'
			location='Wroclaw'
			data={IKData}
		/>
		<Experience
			title='Computer Specialist'
			company='Regional Hospital in Raciborz'
			from='01/2017'
			to='07/2017'
			location='Raciborz'
			data={HospitalData}
		/>
	</section>
)
