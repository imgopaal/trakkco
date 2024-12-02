import { FaBootstrap, FaCss3, FaHtml5, FaNodeJs, FaPython, FaReact, FaVuejs } from 'react-icons/fa'
import { FaGolang } from 'react-icons/fa6'
import { SiJavascript, SiMongodb } from 'react-icons/si'
import { TbBrandDjango } from 'react-icons/tb'

const TechStack = () => {
	const techs = [
		{
			title: 'React',
			id: 'react',
			icon: <FaReact />,
		},
		{
			title: 'JavaScript',
			id: 'javascript',
			icon: <SiJavascript />,
		},
		{
			title: 'HTML5',
			id: 'html5',
			icon: <FaHtml5 />,
		},
		{
			title: 'CSS3',
			id: 'css3',
			icon: <FaCss3 />,
		},
		{
			title: 'Node.js',
			id: 'nodejs',
			icon: <FaNodeJs />,
		},
		{
			title: 'Vue.js',
			id: 'vuejs',
			icon: <FaVuejs />,
		},
		{
			title: 'MongoDB',
			id: 'mongodb',
			icon: <SiMongodb />,
		},
		{
			title: 'Bootstrap',
			id: 'bootstrap',
			icon: <FaBootstrap />,
		},
		{
			title: 'Python',
			id: 'python',
			icon: <FaPython />,
		},
		{
			title: 'GoLang',
			id: 'golang',
			icon: <FaGolang />,
		},
		{
			title: 'Django',
			id: 'django',
			icon: <TbBrandDjango />,
		},
	]

	return (
		<div className="py-24 bg-gradient-to-b from-black/50 to-purple-900/20">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="text-center mb-16">
					<h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
						Our team shipped serious hardware
					</h2>
					<p className="text-gray-400">We are bringing you the tool we wish we had.</p>
				</div>
				<div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-12 gap-8 items-center justify-items-center">
					{techs.map(({ id, title, icon }) => (
						<div
							key={id}
							className="bg-white/5 backdrop-blur-xl p-4 rounded-xl hover:bg-white/10 transition-colors cursor-pointer"
							title={title}
						>
							<div className="h-8 w-8 text-3xl flex items-center justify-center ">{icon}</div>
						</div>
					))}
				</div>
			</div>
		</div>
	)
}

export default TechStack
