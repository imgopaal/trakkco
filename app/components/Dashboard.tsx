import Image from 'next/image'
import React from 'react'

const Dashboard = () => {
	return (
		<div id="dashboard" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 cursor-pointer">
			<div className="bg-gradient-to-r from-purple-500 to-pink-500 p-1 rounded-2xl">
				<div className="bg-white/5 backdrop-blur-xl rounded-2xl border border-purple-500/20 shadow-2xl overflow-hidden">
					<Image
						src={'/dashboard.png'}
						height={4000}
						width={16000}
						alt="Dashboard Preview"
						className="w-full h-auto transform transition-transform duration-500"
					/>
				</div>
			</div>
		</div>
	)
}

export default Dashboard
