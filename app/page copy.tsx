'use client'
import Image from 'next/image'
import { useState } from 'react'

export default function Home() {
	const [currentTeam1, setCurrentTeam1] = useState(0)
	const [currentTeam2, setCurrentTeam2] = useState(0)
	const [currentTeam3, setCurrentTeam3] = useState(0)
	const [currentTeam4, setCurrentTeam4] = useState(0)

	return (
		<main className="min-h-screen bg-[#0a1628]">
			{/* Hero Section with Satya Quote */}
			<section
				className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16 md:pt-20"
				style={{
					background: 'linear-gradient(135deg, #0a0e27 0%, #1a237e 50%, #4a148c 100%)'
				}}
			>
				{/* Background Pattern */}
				<div
					className="absolute inset-0 opacity-5 animate-pulse"
					style={{
						backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.03'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
					}}
				/>

				{/* Left Person Image - Mobile Hidden */}
				<div
					className="hidden lg:block absolute bottom-0 h-[45vh] z-30"
					style={{
						left: '50%',
						transform: 'translateX(-50%) translateX(-530px)'
					}}
				>
					<Image
						src="/suthee.png"
						alt="Suthee Mongkolsuthee"
						width={400}
						height={600}
						style={{
							width: 'auto',
							height: '100%',
							objectFit: 'contain'
						}}
						priority
					/>
				</div>

				{/* Right Person Image (Satya) - Mobile Hidden */}
				<div
					className="hidden lg:block absolute bottom-0 h-[46vh] z-30"
					style={{
						left: '50%',
						transform: 'translateX(-50%) translateX(610px)'
					}}
				>
					<Image
						src="/satya.png"
						alt="Satya Nadella"
						width={400}
						height={600}
						style={{
							width: 'auto',
							height: '100%',
							objectFit: 'contain'
						}}
						priority
					/>
				</div>

				<div className="max-w-6xl mx-auto px-4 md:px-5 text-center relative z-20">
					<h2 className="text-3xl sm:text-4xl md:text-7xl font-black mb-6 md:mb-12 tracking-wide uppercase animate-gradient bg-gradient-to-r from-[#ffd54f] via-[#ff9800] to-[#ffd54f] bg-[length:200%_auto] text-transparent bg-clip-text">
						AI BOOTCAMP 2025
					</h2>

					<style jsx>{`
						@keyframes gradient {
							0% { background-position: 0% 50%; }
							50% { background-position: 100% 50%; }
							100% { background-position: 0% 50%; }
						}

						.animate-gradient {
							animation: gradient 3s ease infinite;
						}
					`}</style>

					<h1 className="text-2xl sm:text-3xl md:text-5xl font-light mb-8 leading-tight text-white px-2">
						Unlock what&apos;s <span className="text-[#64b5f6]">possible </span>with the
						<span className="text-[#ba68c8]"> power </span>of AI
					</h1>

					{/* Quote Cards Container - Stack on Mobile */}
					<div className="flex flex-col lg:flex-row gap-6 md:gap-8 justify-between items-stretch max-w-7xl mx-auto">
						{/* Left Quote - Suthee */}
						<div className="flex-1 p-4 sm:p-6 md:p-8 rounded-2xl backdrop-blur-md bg-white/5 border border-white/10">
							<div className="text-center">
								<p className="text-sm sm:text-base md:text-lg italic text-gray-200 leading-relaxed">
									&quot;ทุกวันนี้ AI เข้ามามีบทบาทในทุก ๆ ส่วนทั้งภาคเอกชนและภาครัฐอยู่ที่ว่าเราจะนำความสามารถไปใช้ในเรื่องอะไร และสิ่งสำคัญที่สุดคือ Data ถ้าไม่มี Data ก็ไปต่อไม่ได้&quot;
								</p>
								<p className="text-xs sm:text-sm md:text-l text-gray-500 leading-relaxed mb-4">
									&quot;บทสัมภาษณ์กับสื่อ Top News และ อมรินทร์&quot;
								</p>
								<div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4">
									<span className="text-gray-300 font-medium text-sm sm:text-base">คุณสุพันธุ์ มงคลสุธี</span>
									<span className="text-gray-500 text-xs sm:text-sm">CEO of T.K.S. Technologies PCL.</span>
									<Image
										src="/tks-logo.png"
										alt="T.K.S."
										width={48.5}
										height={17}
										className="inline-block mt-2 sm:mt-0"
										style={{ objectFit: 'contain' }}
									/>
								</div>
							</div>
						</div>

						{/* Right Quote - Satya */}
						<div className="flex-1 p-4 sm:p-6 md:p-8 rounded-2xl backdrop-blur-md bg-white/5 border border-white/10">
							<div className="text-center">
								<p className="text-sm sm:text-base md:text-xl italic text-gray-200 leading-relaxed mb-4 md:mb-6">
									&quot;AI จะช่วยกำจัดงานที่น่าเบื่อจากงานประจำของคุณ เพื่อให้คุณมีเวลาสร้างสรรค์มากขึ้น&quot;
								</p>
								<div className="flex flex-col sm:flex-row items-center justify-center gap-2">
									<span className="text-gray-300 font-medium text-sm sm:text-base">Satya Nadella</span>
									<span className="text-gray-500 text-xs sm:text-sm">CEO of Microsoft</span>
									<Image
										src="/microsoft-logo.png"
										alt="Microsoft"
										width={48.5}
										height={17}
										className="inline-block mt-2 sm:mt-0"
										style={{ objectFit: 'contain' }}
									/>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Section 1: Pain Points & Goals */}
			<section className="py-12 md:py-20 bg-gradient-to-b from-[#0a0e27] to-[#1a237e]">
				<div className="max-w-6xl mx-auto px-4 md:px-5">
					<h2 className="text-2xl sm:text-3xl md:text-4xl text-center mb-8 md:mb-12 font-normal text-[#ffd54f] px-2">
						ใช้ AI อย่างมีทิศทาง เริ่มจากการจำแนก Craft และ Noise
					</h2>

					<div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
						<div className="p-6 md:p-8 rounded-2xl backdrop-blur-md bg-white/5 border border-white/10">
							<h3 className="text-xl md:text-2xl mb-4 md:mb-6 text-white">PAIN POINT ที่เกิดขึ้นในองค์กร</h3>
							<ul className="space-y-2 md:space-y-3 text-sm md:text-base text-gray-300 leading-relaxed">
								<li>• เริ่มใช้ AI มาใช้โดยไม่มีกรอบชัดเจน → ทำให้บางแผนกหลงทาง</li>
								<li>• พนักงานไม่มั่นใจว่า AI จะมาแทนที่หรือช่วยเหลือ</li>
								<li>• การใช้ AI ไม่ตรงจุด → ไม่เกิดประสิทธิภาพ</li>
							</ul>
						</div>

						<div className="p-6 md:p-8 rounded-2xl backdrop-blur-md bg-white/5 border border-white/10">
							<h3 className="text-xl md:text-2xl mb-4 md:mb-6 text-white">เป้าหมายของยุทธศาสตร์นี้</h3>
							<ul className="space-y-2 md:space-y-3 text-sm md:text-base text-gray-300 leading-relaxed">
								<li>• ลดเวลางาน &quot;Noise&quot; อย่างน้อย 30%</li>
								<li>• เพิ่มเวลาให้พนักงานโฟกัส &quot;Craft&quot;</li>
								<li>• ทำให้การใช้ AI มีทิศทางและได้รับความร่วมมือจากทุกฝ่าย</li>
							</ul>
						</div>
					</div>
				</div>
			</section>

			{/* Craft vs Noise Table - Mobile Optimized */}
			<section className="py-12 md:py-20 bg-[#0a0e27]">
				<div className="max-w-6xl mx-auto px-4 md:px-5">
					<h2 className="text-2xl sm:text-3xl md:text-4xl text-center mb-8 md:mb-12 font-normal text-[#ffd54f]">
						Noise vs Craft คืออะไร
					</h2>

					{/* Desktop Table */}
					<div className="hidden lg:block rounded-2xl overflow-hidden bg-white/5">
						<table className="w-full">
							<thead>
								<tr className="bg-gradient-to-r from-[#1a237e] to-[#283593]">
									<th className="p-6 text-left text-xl font-medium text-[#ffd54f]">หมวด</th>
									<th className="p-6 text-left text-xl font-medium text-[#ffd54f]">คำอธิบาย</th>
									<th className="p-6 text-left text-xl font-medium text-[#ffd54f]">ตัวอย่าง</th>
									<th className="p-6 text-left text-xl font-medium text-[#ffd54f]">แนวทาง AI</th>
								</tr>
							</thead>
							<tbody>
								<tr className="border-b border-white/5">
									<td className="p-6">
										<span className="px-4 py-2 rounded-full inline-block font-medium text-white bg-gradient-to-r from-[#66bb6a] to-[#43a047]">
											Craft
										</span>
									</td>
									<td className="p-6 text-gray-200">งานหลัก ต้องใช้ทักษะ ประสบการณ์</td>
									<td className="p-6 text-gray-200">วางแผนการผลิต การสั่งซื้อวัตถุดิบ</td>
									<td className="p-6 text-red-400">✗ ยังไม่ควรใช้ AI แทนทั้งหมด</td>
								</tr>
								<tr>
									<td className="p-6">
										<span className="px-4 py-2 rounded-full inline-block font-medium text-white bg-gradient-to-r from-[#ffa726] to-[#ff9800]">
											Noise
										</span>
									</td>
									<td className="p-6 text-gray-200">งานรอง ซ้ำซาก ใครทำก็ได้</td>
									<td className="p-6 text-gray-200">ตอบคำถาม, เตือนงาน, สรุปรายงาน</td>
									<td className="p-6 text-green-400">✓ ใช้ AI ช่วยทันที</td>
								</tr>
							</tbody>
						</table>
					</div>

					{/* Mobile Cards */}
					<div className="lg:hidden space-y-4">
						{/* Craft Card */}
						<div className="rounded-2xl overflow-hidden bg-white/5 border border-white/10">
							<div className="p-4 bg-gradient-to-r from-[#1a237e] to-[#283593]">
								<span className="px-3 py-1 rounded-full inline-block font-medium text-white bg-gradient-to-r from-[#66bb6a] to-[#43a047]">
									Craft
								</span>
							</div>
							<div className="p-4 space-y-3">
								<div>
									<h4 className="text-[#ffd54f] text-sm font-medium mb-1">คำอธิบาย</h4>
									<p className="text-gray-200 text-sm">งานหลัก ต้องใช้ทักษะ ประสบการณ์</p>
								</div>
								<div>
									<h4 className="text-[#ffd54f] text-sm font-medium mb-1">ตัวอย่าง</h4>
									<p className="text-gray-200 text-sm">วางแผนการผลิต การสั่งซื้อวัตถุดิบ</p>
								</div>
								<div>
									<h4 className="text-[#ffd54f] text-sm font-medium mb-1">แนวทาง AI</h4>
									<p className="text-red-400 text-sm">✗ ยังไม่ควรใช้ AI แทนทั้งหมด</p>
								</div>
							</div>
						</div>

						{/* Noise Card */}
						<div className="rounded-2xl overflow-hidden bg-white/5 border border-white/10">
							<div className="p-4 bg-gradient-to-r from-[#1a237e] to-[#283593]">
								<span className="px-3 py-1 rounded-full inline-block font-medium text-white bg-gradient-to-r from-[#ffa726] to-[#ff9800]">
									Noise
								</span>
							</div>
							<div className="p-4 space-y-3">
								<div>
									<h4 className="text-[#ffd54f] text-sm font-medium mb-1">คำอธิบาย</h4>
									<p className="text-gray-200 text-sm">งานรอง ซ้ำซาก ใครทำก็ได้</p>
								</div>
								<div>
									<h4 className="text-[#ffd54f] text-sm font-medium mb-1">ตัวอย่าง</h4>
									<p className="text-gray-200 text-sm">ตอบคำถาม, เตือนงาน, สรุปรายงาน</p>
								</div>
								<div>
									<h4 className="text-[#ffd54f] text-sm font-medium mb-1">แนวทาง AI</h4>
									<p className="text-green-400 text-sm">✓ ใช้ AI ช่วยทันที</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* 3 Factors Section */}
			<section className="py-12 md:py-20 bg-gradient-to-b from-[#0a0e27] to-[#1a237e]">
				<div className="max-w-6xl mx-auto px-4 md:px-5">
					<h2 className="text-2xl sm:text-3xl md:text-4xl text-center mb-8 md:mb-12 font-normal text-[#ffd54f] px-2">
						ใช้ 3 ปัจจัยหลัก วิเคราะห์ว่า AI ควรเข้าไปช่วยงานไหนในองค์กร
					</h2>

					<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 mb-8 md:mb-12">
						{/* Skill Card */}
						<div className="p-6 md:p-8 rounded-2xl backdrop-blur-md bg-white/5 border border-white/10">
							<div className="w-10 h-10 md:w-12 md:h-12 rounded-full mb-4 bg-gradient-to-br from-[#f06292] to-[#ec407a]"></div>
							<h3 className="text-xl md:text-2xl text-white mb-2">ทักษะ (Skill)</h3>
							<p className="text-sm md:text-base text-gray-300">ความซับซ้อนของงาน</p>
							<div className="mt-4 p-4 rounded-lg bg-white/5">
								<div className="flex justify-between mb-2">
									<span className="text-[#ffa726] text-sm">Noise</span>
									<span className="text-[#66bb6a] text-sm">Craft</span>
								</div>
								<div className="h-1 rounded bg-gradient-to-r from-[#ffa726] to-[#66bb6a]"></div>
								<div className="flex justify-between mt-2">
									<span className="text-xs text-gray-400 bg-white/10 rounded-full w-5 h-5 flex items-center justify-center">1</span>
									<span className="text-xs text-gray-400 bg-white/10 rounded-full w-5 h-5 flex items-center justify-center">3</span>
								</div>
							</div>
						</div>

						{/* Frequency Card */}
						<div className="p-6 md:p-8 rounded-2xl backdrop-blur-md bg-white/5 border border-white/10">
							<div className="w-10 h-10 md:w-12 md:h-12 rounded-full mb-4 bg-gradient-to-br from-[#66bb6a] to-[#43a047]"></div>
							<h3 className="text-xl md:text-2xl text-white mb-2">ความถี่ (Frequency)</h3>
							<p className="text-sm md:text-base text-gray-300">ยิ่งน้อย ยิ่งเหมาะให้ AI ช่วย</p>
							<div className="mt-4 p-4 rounded-lg bg-white/5">
								<div className="flex justify-between mb-2">
									<span className="text-[#66bb6a] text-sm">Craft</span>
									<span className="text-[#ffa726] text-sm">Noise</span>
								</div>
								<div className="h-1 rounded bg-gradient-to-r from-[#66bb6a] to-[#ffa726]"></div>
								<div className="flex justify-between mt-2">
									<span className="text-xs text-gray-400 bg-white/10 rounded-full w-5 h-5 flex items-center justify-center">1</span>
									<span className="text-xs text-gray-400 bg-white/10 rounded-full w-5 h-5 flex items-center justify-center">3</span>
								</div>
							</div>
						</div>

						{/* Risk Card */}
						<div className="p-6 md:p-8 rounded-2xl backdrop-blur-md bg-white/5 border border-white/10 sm:col-span-2 md:col-span-1">
							<div className="w-10 h-10 md:w-12 md:h-12 rounded-full mb-4 bg-gradient-to-br from-[#ffa726] to-[#ff9800]"></div>
							<h3 className="text-xl md:text-2xl text-white mb-2">ความเสี่ยง (Risk)</h3>
							<p className="text-sm md:text-base text-gray-300">ผลกระทบต่อองค์กร</p>
							<div className="mt-4 p-4 rounded-lg bg-white/5">
								<div className="flex justify-between mb-2">
									<span className="text-[#ffa726] text-sm">Noise</span>
									<span className="text-[#66bb6a] text-sm">Craft</span>
								</div>
								<div className="h-1 rounded bg-gradient-to-r from-[#ffa726] to-[#66bb6a]"></div>
								<div className="flex justify-between mt-2">
									<span className="text-xs text-gray-400 bg-white/10 rounded-full w-5 h-5 flex items-center justify-center">1</span>
									<span className="text-xs text-gray-400 bg-white/10 rounded-full w-5 h-5 flex items-center justify-center">3</span>
								</div>
							</div>
						</div>
					</div>

					{/* Score System */}
					<h3 className="text-2xl md:text-3xl text-center mb-6 md:mb-8 font-normal text-[#ffd54f]">
						คะแนนรวม & การตัดสินใจ
					</h3>

					<div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-6 md:mb-8">
						<div className="p-6 md:p-8 rounded-2xl text-center bg-gradient-to-br from-white/10 to-white/5 border border-white/10">
							<div className="text-4xl md:text-6xl font-bold mb-3 md:mb-4 text-[#ffa726]">4-6</div>
							<h4 className="text-lg md:text-xl mb-2 text-[#ffa726]">Noise - เหมาะกับ AI สามารถช่วยได้ดี</h4>
							<p className="text-sm md:text-base text-gray-300">ลดการพึ่งพาบุคลากร</p>
							<span className="inline-block mt-3 md:mt-4 px-3 md:px-4 py-1.5 md:py-2 rounded-full font-medium text-white text-sm md:text-base bg-gradient-to-r from-[#ffa726] to-[#ff9800]">
								AI ช่วยได้
							</span>
						</div>

						<div className="p-6 md:p-8 rounded-2xl text-center bg-gradient-to-br from-white/10 to-white/5 border border-white/10">
							<div className="text-4xl md:text-6xl font-bold mb-3 md:mb-4 text-[#66bb6a]">7-9</div>
							<h4 className="text-lg md:text-xl mb-2 text-[#66bb6a]">Craft - คนควรทำ ใช้ความเชี่ยวชาญขั้นสูง</h4>
							<p className="text-sm md:text-base text-gray-300">และต้องการการตัดสินใจจากคน</p>
							<span className="inline-block mt-3 md:mt-4 px-3 md:px-4 py-1.5 md:py-2 rounded-full font-medium text-white text-sm md:text-base bg-gradient-to-r from-[#66bb6a] to-[#43a047]">
								คนควรทำ
							</span>
						</div>
					</div>

					<div className="p-6 md:p-8 rounded-2xl bg-white/5">
						<h4 className="text-lg md:text-xl mb-3 md:mb-4 text-[#64b5f6]">ตัวอย่าง</h4>
						<p className="text-sm md:text-base text-gray-200 leading-relaxed">
							การปิดงบการเงิน (3+1+3 = 7) = <span className="px-2 md:px-3 py-0.5 md:py-1 rounded-full text-white font-medium text-sm md:text-base bg-gradient-to-r from-[#66bb6a] to-[#43a047]">Craft</span><br />
							การ PR ค่าใช้จ่ายตามสัญญา (1+1+2 = 4) = <span className="px-2 md:px-3 py-0.5 md:py-1 rounded-full text-white font-medium text-sm md:text-base bg-gradient-to-r from-[#ffa726] to-[#ff9800]">Noise</span>
						</p>
					</div>
				</div>
			</section>

			{/* Policy Section */}
			<section className="py-12 md:py-20 bg-[#0a0e27]">
				<div className="max-w-6xl mx-auto px-4 md:px-5">
					<h2 className="text-2xl sm:text-3xl md:text-4xl text-center mb-8 md:mb-12 font-normal text-[#ffd54f] px-2">
						นโยบาย 4 ข้อเพื่อผลักดันการใช้ AI อย่างมีเป้าหมายและได้ผลลัพธ์จริง
					</h2>

					<div className="p-6 md:p-8 rounded-2xl mb-8 md:mb-12 bg-white/5">
						<p className="text-center text-sm md:text-lg text-gray-300 leading-relaxed">
							<strong className="text-[#64b5f6]">แนวคิดปรับปรุงเพียน: AI เหมือน Kaizen</strong> - ส่งเสริมให้พนักงานทุกคนใช้ AI พัฒนาการทำงานของตนเอง โดย IT เป็นผู้สนับสนุนเครื่องมือและแนวทาง
						</p>
					</div>

					<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
						<div className="p-6 md:p-8 rounded-2xl bg-white/5">
							<h3 className="text-xl md:text-2xl mb-6 md:mb-8 text-[#64b5f6]">4 ข้อเสนอเชิงนโยบาย</h3>

							<div className="space-y-4 md:space-y-6">
								{[
									{ title: "แยกงาน Craft และ Noise", desc: "ให้ทุกทีมกรรมเเยกงานออกเป็น Craft และ Noise เพื่อมุ่งเน้นการใช้ AI ลดงาน Noise อย่างน้อย 30% ใน 6 เดือน" },
									{ title: "สร้าง AI Champion", desc: "สร้าง AI Champion ประจำแผนก เพื่อเป็นผู้นำและแชร์ความรู้การใช้ AI ในทีมงาน" },
									{ title: "ฝ่าย IT เป็นผู้สนับสนุน", desc: "ฝ่าย IT เป็นผู้ให้การสนับสนุน Use Case / เครื่องมือ AI ไม่ใช้ผู้ปฏิบัติแทน" },
									{ title: "วัดผลลัพธ์จริง", desc: "วัดผลลัพธ์จากการใช้ AI ที่ตัดเจนและสามารถเปรียบรูปได้อย่างต่อเนื่อง" }
								].map((item, i) => (
									<div key={i} className="flex gap-3 md:gap-4 p-4 md:p-6 rounded-xl bg-white/5">
										<div className="w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center text-white font-bold text-sm md:text-base flex-shrink-0 bg-gradient-to-br from-[#64b5f6] to-[#42a5f5]">
											{i + 1}
										</div>
										<div>
											<h4 className="text-white mb-1 md:mb-2 text-sm md:text-base">{item.title}</h4>
											<p className="text-xs md:text-sm text-gray-300">{item.desc}</p>
										</div>
									</div>
								))}
							</div>
						</div>

						<div className="p-6 md:p-8 rounded-2xl bg-white/5">
							<h3 className="text-xl md:text-2xl mb-6 md:mb-8 text-[#66bb6a]">ประโยชน์ที่จะได้รับ</h3>

							<div className="space-y-4 md:space-y-6">
								{[
									{ title: "เพิ่ม Productivity โดยไม่เพิ่มคน", desc: "เพิ่มประสิทธิภาพการทำงานได้ถึง 40%" },
									{ title: "ลดงาน Manual → พนักงานมีเวลา Focus งานสำคัญ", desc: "ลดงานซ้ำซากได้ 30% ภายใน 6 เดือน" },
									{ title: "เพิ่มความพึงพอใจของพนักงาน", desc: "ไม่ต้องทำงานซ้ำๆ น่าเบื่อ" },
									{ title: "สร้างวัฒนธรรม AI ที่สนุก ไม่ถ้าน แต่ไม่เร่งเกินไป", desc: "ทุกคนมีส่วนร่วมในการพัฒนา" }
								].map((item, i) => (
									<div key={i} className="flex gap-3 md:gap-4 p-4 md:p-6 rounded-xl bg-white/5">
										<div className="w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center text-white text-base md:text-xl flex-shrink-0 bg-gradient-to-br from-[#66bb6a] to-[#4caf50]">
											✓
										</div>
										<div>
											<h4 className="text-white mb-1 md:mb-2 text-sm md:text-base">{item.title}</h4>
											<p className="text-xs md:text-sm text-gray-300">{item.desc}</p>
										</div>
									</div>
								))}
							</div>
						</div>
					</div>
				</div>
			</section>

			<section className="py-12 md:py-20 bg-gradient-to-b from-[#0a0e27] to-[#1a237e]">
				<div className="max-w-8xl mx-auto px-4 md:px-5">
					<h2 className="text-3xl sm:text-4xl md:text-5xl text-center mb-4 md:mb-6 font-bold text-white">
						Our Instructors
					</h2>

					{/* Program Director */}
					<h3 className="text-xl sm:text-2xl md:text-3xl text-center mb-8 md:mb-12 font-normal text-[#ffd54f]">
						Program Director
					</h3>

					<div className="flex justify-center mb-12 md:mb-16">
						<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4 md:gap-6 max-w-8xl">
							{[
								{ 
									name: "Monchai\nLertsutthiwong", 
									image: "/images/mentors/mentor-saichon.png", 
									role: "Deputy Managing Director, KBTG" 
								},
								{ 
									name: "Theerat\nSakdejayont", 
									image: "/images/mentors/mentor-somkiat.png", 
									role: "Senior Research Engineer, KBTG" 
								},
								{ 
									name: "Theerat\nSakdejayont", 
									image: "/images/mentors/mentor-chaiyan.png", 
									role: "Senior Research Engineer, KBTG" 
								},
								{ 
									name: "Theerat\nSakdejayont", 
									image: "/images/mentors/mentor-arkveld.png", 
									role: "Senior Research Engineer, KBTG" 
								},
								{ 
									name: "Theerat\nSakdejayont", 
									image: "/images/mentors/mentor-bunprem.png", 
									role: "Senior Research Engineer, KBTG" 
								},
								{ 
									name: "Kirati\nThoednithi", 
									image: "/images/mentors/mentor-tarntip.png", 
									role: "Senior Data Scientist, KBTG" 
								}
							].map((director, i) => (
								<div key={i} className="group">
									<div className="relative rounded-2xl overflow-hidden bg-gradient-to-b from-[#2a2f3e] to-[#1a1f2e] border border-white/10 transition-transform duration-300 hover:scale-105">
										<div className="aspect-[1/1] bg-gradient-to-b from-gray-600 to-gray-700 relative">
											<Image
												src={director.image}
												alt={director.name.replace('\n', ' ')}
												fill
												className="object-cover"
											/>
											<div className="absolute inset-0 bg-gradient-to-t from-[#1a1f2e] via-transparent to-transparent opacity-60"></div>
										</div>
										<div className="p-4">
											<h4 className="text-sm md:text-base font-medium text-white mb-1 whitespace-pre-line">
												{director.name}
											</h4>
											<p className="text-[#66bb6a] text-xs md:text-sm mb-2">Instructor</p>
											<p className="text-gray-300 text-xs leading-relaxed">
												{director.role}
											</p>
										</div>
									</div>
								</div>
							))}
						</div>
					</div>

					{/* AI Fundamentals & Applications - Section 1 */}
					<h3 className="text-xl sm:text-2xl md:text-3xl text-center mb-8 md:mb-12 font-normal text-[#ffd54f]">
						AI Fundamentals & Applications - Group 1
					</h3>

					{/* Carousel Container 1 */}
					<div className="relative overflow-hidden mb-16 md:mb-20">
						<div
							className="flex transition-transform duration-500 ease-in-out"
							style={{ transform: `translateX(-${currentTeam1 * 100}%)` }}
						>
							{[
								{
									name: "The Giver",
									color: "#64b5f6",
									layout: "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 justify-items-center",
									cardWidth: "w-48 md:w-52",
									gap: "gap-4 md:gap-6",
									members: [
										{ 
											name: "Person A", 
											image: "/images/teams/the-giver/giver-chuti.png", 
											role: "Team Lead" 
										},
										{ 
											name: "Person B", 
											image: "/images/teams/the-giver/giver-panit.png", 
											role: "Senior Developer" 
										},
										{ 
											name: "Person C", 
											image: "/images/teams/the-giver/giver-siri.png", 
											role: "Product Manager" 
										},
										{ 
											name: "Person D", 
											image: "/images/teams/the-giver/giver-sitthi.png", 
											role: "UX Designer" 
										},
										{ 
											name: "Person E", 
											image: "/images/teams/the-giver/giver-suda.png", 
											role: "Data Analyst" 
										}
									]
								},
								{
									name: "ThinkUp",
									color: "#ba68c8",
									layout: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center",
									cardWidth: "w-48 md:w-52",
									gap: "gap-4 md:gap-6",
									members: [
										{ 
											name: "Person F", 
											image: "/images/teams/thinkup/up-supin.png", 
											role: "Product Manager" 
										},
										{ 
											name: "Person G", 
											image: "/images/teams/thinkup/up-gulla.png", 
											role: "UX Designer" 
										},
										{ 
											name: "Person H", 
											image: "/images/teams/thinkup/up-mana.png", 
											role: "Business Analyst" 
										}
									]
								},
								{
									name: "AccNext",
									color: "#4fc3f7",
									layout: "grid grid-cols-2 md:grid-cols-2 lg:grid-cols-5 justify-items-center",
									cardWidth: "w-48 md:w-52",
									gap: "gap-4 md:gap-6",
									members: [
										{ 
											name: "Person I", 
											image: "/images/teams/accnext/next-grong.png", 
											role: "Financial Analyst" 
										},
										{ 
											name: "Person J", 
											image: "/images/teams/accnext/next-wera.png", 
											role: "Accounting Manager" 
										},
										{ 
											name: "Person K", 
											image: "/images/teams/accnext/next-tiwa.png", 
											role: "Tax Specialist" 
										},
										{ 
											name: "Person L", 
											image: "/images/teams/accnext/next-tussa.png", 
											role: "Budget Analyst" 
										},
										{ 
											name: "Person M", 
											image: "/images/teams/accnext/next-pissa.png", 
											role: "Finance Director" 
										}
									]
								}
							].map((team, teamIndex) => (
								<div key={teamIndex} className="w-full flex-shrink-0">
									<h4 className="text-lg md:text-xl text-center mb-6" style={{ color: team.color }}>
										Team: {team.name}
									</h4>
									<div className="flex justify-center mb-12 md:mb-6">
										<div className={`${team.layout} ${team.gap} max-w-6xl mx-auto`}>
											{team.members.map((member, i) => (
												<div key={i} className={`group ${team.cardWidth}`}>
													<div className="relative rounded-2xl overflow-hidden bg-gradient-to-b from-[#2a2f3e] to-[#1a1f2e] border border-white/10 transition-transform duration-300 hover:scale-105">
														<div className="aspect-[1/1] bg-gradient-to-b from-gray-600 to-gray-700 relative">
															<Image
																src={member.image}
																alt={member.name.replace('\n', ' ')}
																fill
																className="object-cover"
															/>
															<div className="absolute inset-0 bg-gradient-to-t from-[#1a1f2e] via-transparent to-transparent opacity-60"></div>
														</div>
														<div className="p-4">
															<h4 className="text-sm md:text-base font-medium text-white mb-1 whitespace-pre-line">
																{member.name}
															</h4>
															<p className="text-xs md:text-sm mb-2" style={{ color: team.color }}>Instructor</p>
															<p className="text-gray-300 text-xs leading-relaxed">
																{member.role}
															</p>
														</div>
													</div>
												</div>
											))}
										</div>
									</div>
								</div>
							))}
						</div>

						{/* Navigation Buttons for Group 1 */}
						<div className="flex justify-center items-center gap-2 md:gap-4 mt-8 flex-wrap">
							<button
								onClick={() => setCurrentTeam1(0)}
								className={`px-3 md:px-4 py-2 rounded-full text-xs md:text-sm transition-all ${currentTeam1 === 0
									? 'bg-gradient-to-r from-[#64b5f6] to-[#42a5f5] text-white'
									: 'bg-white/10 text-gray-400 hover:bg-white/20'
									}`}
							>
								The Giver
							</button>
							<button
								onClick={() => setCurrentTeam1(1)}
								className={`px-3 md:px-4 py-2 rounded-full text-xs md:text-sm transition-all ${currentTeam1 === 1
									? 'bg-gradient-to-r from-[#ba68c8] to-[#ab47bc] text-white'
									: 'bg-white/10 text-gray-400 hover:bg-white/20'
									}`}
							>
								ThinkUp
							</button>
							<button
								onClick={() => setCurrentTeam1(2)}
								className={`px-3 md:px-4 py-2 rounded-full text-xs md:text-sm transition-all ${currentTeam1 === 2
									? 'bg-gradient-to-r from-[#4fc3f7] to-[#29b6f6] text-white'
									: 'bg-white/10 text-gray-400 hover:bg-white/20'
									}`}
							>
								AccNext
							</button>
						</div>
					</div>

					{/* AI Fundamentals & Applications - Section 2 */}
					<h3 className="text-xl sm:text-2xl md:text-3xl text-center mb-8 md:mb-12 font-normal text-[#ffd54f]">
						AI Fundamentals & Applications - Group 2
					</h3>

					{/* Carousel Container 2 */}
					<div className="relative overflow-hidden mb-16 md:mb-20">
						<div
							className="flex transition-transform duration-500 ease-in-out"
							style={{ transform: `translateX(-${currentTeam2 * 100}%)` }}
						>
							{[
								{
									name: "Silent Storm",
									color: "#81c784",
									layout: "grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 justify-items-center",
									cardWidth: "w-48 md:w-52",
									gap: "gap-4 md:gap-6",
									members: [
										{ 
											name: "Person N", 
											image: "/images/teams/silent-storm/storm-gumpol.png", 
											role: "Cybersecurity Expert" 
										},
										{ 
											name: "Person O", 
											image: "/images/teams/silent-storm/storm-tithi.png", 
											role: "Network Analyst" 
										},
										{ 
											name: "Person P", 
											image: "/images/teams/silent-storm/storm-rawi.png", 
											role: "Security Consultant" 
										},
										{ 
											name: "Person Q", 
											image: "/images/teams/silent-storm/storm-kana.png", 
											role: "Penetration Tester" 
										}
									]
								},
								{
									name: "AI-SHENG",
									color: "#ffb74d",
									layout: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center",
									cardWidth: "w-48 md:w-52",
									gap: "gap-4 md:gap-6",
									members: [
										{ 
											name: "Person R", 
											image: "/images/teams/ai-sheng/sheng-suri.png", 
											role: "AI Research Scientist" 
										},
										{ 
											name: "Person S", 
											image: "/images/teams/ai-sheng/sheng-sugun.png", 
											role: "Machine Learning Engineer" 
										},
										{ 
											name: "Person T", 
											image: "/images/teams/ai-sheng/sheng-sura.png", 
											role: "Data Scientist" 
										}
									]
								},
								{
									name: "AuditX",
									color: "#f06292",
									layout: "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 justify-items-center",
									cardWidth: "w-48 md:w-52",
									gap: "gap-4 md:gap-6",
									members: [
										{ 
											name: "Person U", 
											image: "/images/teams/auditx/x-supa.png", 
											role: "Internal Auditor" 
										},
										{ 
											name: "Person V", 
											image: "/images/teams/auditx/x-shinna.png", 
											role: "Risk Manager" 
										},
										{ 
											name: "Person W", 
											image: "/images/teams/auditx/x-patcha.png", 
											role: "Compliance Officer" 
										},
										{ 
											name: "Person X", 
											image: "/images/teams/auditx/x-somha.png", 
											role: "Fraud Analyst" 
										},
										{ 
											name: "Person Y", 
											image: "/images/teams/auditx/x-wichcha.png", 
											role: "Audit Manager" 
										}
									]
								}
							].map((team, teamIndex) => (
								<div key={teamIndex} className="w-full flex-shrink-0">
									<h4 className="text-lg md:text-xl text-center mb-6" style={{ color: team.color }}>
										Team: {team.name}
									</h4>
									<div className="flex justify-center mb-12 md:mb-6">
										<div className={`${team.layout} ${team.gap} max-w-6xl mx-auto`}>
											{team.members.map((member, i) => (
												<div key={i} className={`group ${team.cardWidth}`}>
													<div className="relative rounded-2xl overflow-hidden bg-gradient-to-b from-[#2a2f3e] to-[#1a1f2e] border border-white/10 transition-transform duration-300 hover:scale-105">
														<div className="aspect-[1/1] bg-gradient-to-b from-gray-600 to-gray-700 relative">
															<Image
																src={member.image}
																alt={member.name.replace('\n', ' ')}
																fill
																className="object-cover"
															/>
															<div className="absolute inset-0 bg-gradient-to-t from-[#1a1f2e] via-transparent to-transparent opacity-60"></div>
														</div>
														<div className="p-4">
															<h4 className="text-sm md:text-base font-medium text-white mb-1 whitespace-pre-line">
																{member.name}
															</h4>
															<p className="text-xs md:text-sm mb-2" style={{ color: team.color }}>Instructor</p>
															<p className="text-gray-300 text-xs leading-relaxed">
																{member.role}
															</p>
														</div>
													</div>
												</div>
											))}
										</div>
									</div>
								</div>
							))}
						</div>

						{/* Navigation Buttons for Group 2 */}
						<div className="flex justify-center items-center gap-2 md:gap-4 mt-8 flex-wrap">
							<button
								onClick={() => setCurrentTeam2(0)}
								className={`px-3 md:px-4 py-2 rounded-full text-xs md:text-sm transition-all ${currentTeam2 === 0
									? 'bg-gradient-to-r from-[#81c784] to-[#66bb6a] text-white'
									: 'bg-white/10 text-gray-400 hover:bg-white/20'
									}`}
							>
								Silent Storm
							</button>
							<button
								onClick={() => setCurrentTeam2(1)}
								className={`px-3 md:px-4 py-2 rounded-full text-xs md:text-sm transition-all ${currentTeam2 === 1
									? 'bg-gradient-to-r from-[#ffb74d] to-[#ffa726] text-white'
									: 'bg-white/10 text-gray-400 hover:bg-white/20'
									}`}
							>
								AI-SHENG
							</button>
							<button
								onClick={() => setCurrentTeam2(2)}
								className={`px-3 md:px-4 py-2 rounded-full text-xs md:text-sm transition-all ${currentTeam2 === 2
									? 'bg-gradient-to-r from-[#f06292] to-[#ec407a] text-white'
									: 'bg-white/10 text-gray-400 hover:bg-white/20'
									}`}
							>
								AuditX
							</button>
						</div>
					</div>

					{/* AI Fundamentals & Applications - Section 3 */}
					<h3 className="text-xl sm:text-2xl md:text-3xl text-center mb-8 md:mb-12 font-normal text-[#ffd54f]">
						AI Fundamentals & Applications - Group 3
					</h3>

					{/* Carousel Container 3 */}
					<div className="relative overflow-hidden mb-16 md:mb-20">
						<div
							className="flex transition-transform duration-500 ease-in-out"
							style={{ transform: `translateX(-${currentTeam3 * 100}%)` }}
						>
							{[
								{
									name: "AI Vision Ops",
									color: "#9c27b0",
									layout: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center",
									cardWidth: "w-48 md:w-52",
									gap: "gap-4 md:gap-6",
									members: [
										{ 
											name: "Person Z", 
											image: "/images/teams/ai-vision-ops/ops-supa.png", 
											role: "Computer Vision Engineer" 
										},
										{ 
											name: "Person AA", 
											image: "/images/teams/ai-vision-ops/ops-suwa.png", 
											role: "ML Operations Specialist" 
										},
										{ 
											name: "Person BB", 
											image: "/images/teams/ai-vision-ops/ops-gesi.png", 
											role: "AI Systems Engineer" 
										}
									]
								},
								{
									name: "TaskMasters",
									color: "#ff5722",
									layout: "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 justify-items-center",
									cardWidth: "w-48 md:w-52",
									gap: "gap-4 md:gap-6",
									members: [
										{ 
											name: "Person CC", 
											image: "/images/teams/taskmasters/masters-chuti.png", 
											role: "Project Manager" 
										},
										{ 
											name: "Person DD", 
											image: "/images/teams/taskmasters/masters-kritsa.png", 
											role: "Scrum Master" 
										},
										{ 
											name: "Person EE", 
											image: "/images/teams/taskmasters/masters-napus.png", 
											role: "Team Lead" 
										},
										{ 
											name: "Person FF", 
											image: "/images/teams/taskmasters/masters-ghanja.png", 
											role: "Product Owner" 
										},
										{ 
											name: "Person GG", 
											image: "/images/teams/taskmasters/masters-nanta.png", 
											role: "Business Analyst" 
										}
									]
								},
								{
									name: "Maybe not yet",
									color: "#3f51b5",
									layout: "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 justify-items-center",
									cardWidth: "w-48 md:w-52",
									gap: "gap-4 md:gap-6",
									members: [
										{ 
											name: "Person HH", 
											image: "/images/teams//maybe-not-yet/yet-piya.png", 
											role: "Research Engineer" 
										},
										{ 
											name: "Person II", 
											image: "/images/teams//maybe-not-yet/yet-satta.png", 
											role: "Innovation Lead" 
										},
										{ 
											name: "Person JJ", 
											image: "/images/teams//maybe-not-yet/yet-sutus.png", 
											role: "Strategy Consultant" 
										},
										{ 
											name: "Person KK", 
											image: "/images/teams//maybe-not-yet/yet-wijit.png", 
											role: "Technology Advisor" 
										},
										{ 
											name: "Person LL", 
											image: "/images/teams//maybe-not-yet/yet-warang.png", 
											role: "Future Tech Specialist" 
										}
									]
								}
							].map((team, teamIndex) => (
								<div key={teamIndex} className="w-full flex-shrink-0">
									<h4 className="text-lg md:text-xl text-center mb-6" style={{ color: team.color }}>
										Team: {team.name}
									</h4>
									<div className="flex justify-center mb-12 md:mb-6">
										<div className={`${team.layout} ${team.gap} max-w-6xl mx-auto`}>
											{team.members.map((member, i) => (
												<div key={i} className={`group ${team.cardWidth}`}>
													<div className="relative rounded-2xl overflow-hidden bg-gradient-to-b from-[#2a2f3e] to-[#1a1f2e] border border-white/10 transition-transform duration-300 hover:scale-105">
														<div className="aspect-[1/1] bg-gradient-to-b from-gray-600 to-gray-700 relative">
															<Image
																src={member.image}
																alt={member.name.replace('\n', ' ')}
																fill
																className="object-cover"
															/>
															<div className="absolute inset-0 bg-gradient-to-t from-[#1a1f2e] via-transparent to-transparent opacity-60"></div>
														</div>
														<div className="p-4">
															<h4 className="text-sm md:text-base font-medium text-white mb-1 whitespace-pre-line">
																{member.name}
															</h4>
															<p className="text-xs md:text-sm mb-2" style={{ color: team.color }}>Instructor</p>
															<p className="text-gray-300 text-xs leading-relaxed">
																{member.role}
															</p>
														</div>
													</div>
												</div>
											))}
										</div>
									</div>
								</div>
							))}
						</div>

						{/* Navigation Buttons for Group 3 */}
						<div className="flex justify-center items-center gap-2 md:gap-4 mt-8 flex-wrap">
							<button
								onClick={() => setCurrentTeam3(0)}
								className={`px-3 md:px-4 py-2 rounded-full text-xs md:text-sm transition-all ${currentTeam3 === 0
									? 'bg-gradient-to-r from-[#9c27b0] to-[#8e24aa] text-white'
									: 'bg-white/10 text-gray-400 hover:bg-white/20'
									}`}
							>
								AI Vision Ops
							</button>
							<button
								onClick={() => setCurrentTeam3(1)}
								className={`px-3 md:px-4 py-2 rounded-full text-xs md:text-sm transition-all ${currentTeam3 === 1
									? 'bg-gradient-to-r from-[#ff5722] to-[#f4511e] text-white'
									: 'bg-white/10 text-gray-400 hover:bg-white/20'
									}`}
							>
								TaskMasters
							</button>
							<button
								onClick={() => setCurrentTeam3(2)}
								className={`px-3 md:px-4 py-2 rounded-full text-xs md:text-sm transition-all ${currentTeam3 === 2
									? 'bg-gradient-to-r from-[#3f51b5] to-[#3949ab] text-white'
									: 'bg-white/10 text-gray-400 hover:bg-white/20'
									}`}
							>
								Maybe not yet
							</button>
						</div>
					</div>

					{/* AI Fundamentals & Applications - Section 4 */}
					<h3 className="text-xl sm:text-2xl md:text-3xl text-center mb-8 md:mb-12 font-normal text-[#ffd54f]">
						AI Fundamentals & Applications - Group 4
					</h3>

					{/* Carousel Container 4 */}
					<div className="relative overflow-hidden mb-16 md:mb-20">
						<div
							className="flex transition-transform duration-500 ease-in-out"
							style={{ transform: `translateX(-${currentTeam4 * 100}%)` }}
						>
							{[
								{
									name: "Wharehouse and The Gang",
									color: "#607d8b",
									layout: "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 justify-items-center",
									cardWidth: "w-48 md:w-52",
									gap: "gap-4 md:gap-6",
									members: [
										{ 
											name: "Person MM", 
											image: "/images/teams/wharehouse-and-the-gang/gang-suthee.png", 
											role: "Warehouse Manager" 
										},
										{ 
											name: "Person NN", 
											image: "/images/teams/wharehouse-and-the-gang/gang-suk.png", 
											role: "Logistics Coordinator" 
										},
										{ 
											name: "Person OO", 
											image: "/images/teams/wharehouse-and-the-gang/gang-papaa.png", 
											role: "Inventory Specialist" 
										},
										{ 
											name: "Person PP", 
											image: "/images/teams/wharehouse-and-the-gang/gang-aree.png", 
											role: "Supply Chain Analyst" 
										},
										{ 
											name: "Person QQ", 
											image: "/images/teams/wharehouse-and-the-gang/gang-prakrong.png", 
											role: "Operations Lead" 
										}
									]
								},
								{
									name: "Production",
									color: "#795548",
									layout: "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 justify-items-center",
									cardWidth: "w-48 md:w-52",
									gap: "gap-4 md:gap-6",
									members: [
										{ 
											name: "Person RR", 
											image: "/images/teams/production/on-pisit.png", 
											role: "Production Manager" 
										},
										{ 
											name: "Person SS", 
											image: "/images/teams/production/on-pawi.png", 
											role: "Manufacturing Engineer" 
										},
										{ 
											name: "Person TT", 
											image: "/images/teams/production/on-nunta.png", 
											role: "Quality Controller" 
										},
										{ 
											name: "Person UU", 
											image: "/images/teams/production/on-kritsa.png", 
											role: "Process Optimizer" 
										},
										{ 
											name: "Person VV", 
											image: "/images/teams/production/on-somkit.png", 
											role: "Production Planner" 
										},
										{ 
											name: "Person WW", 
											image: "/images/teams/production/on-chawin.png", 
											role: "Operations Supervisor" 
										}
									]
								},
								{
									name: "Let's do this",
									color: "#009688",
									layout: "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 justify-items-center",
									cardWidth: "w-48 md:w-52",
									gap: "gap-4 md:gap-6",
									members: [
										{ 
											name: "Person XX", 
											image: "/images/teams/lets-do-this/this-ano.png", 
											role: "Motivation Coach" 
										},
										{ 
											name: "Person YY", 
											image: "/images/teams/lets-do-this/this-juta.png", 
											role: "Team Builder" 
										},
										{ 
											name: "Person ZZ", 
											image: "/images/teams/lets-do-this/this-supa.png", 
											role: "Change Agent" 
										},
										{ 
											name: "Person AAA", 
											image: "/images/teams/lets-do-this/this-ganja.png", 
											role: "Innovation Driver" 
										},
										{ 
											name: "Person BBB", 
											image: "/images/teams/lets-do-this/this-tana.png", 
											role: "Performance Coach" 
										}
									]
								}
							].map((team, teamIndex) => (
								<div key={teamIndex} className="w-full flex-shrink-0">
									<h4 className="text-lg md:text-xl text-center mb-6" style={{ color: team.color }}>
										Team: {team.name}
									</h4>
									<div className="flex justify-center mb-12 md:mb-6">
										<div className={`${team.layout} ${team.gap} max-w-8xl mx-auto`}>
											{team.members.map((member, i) => (
												<div key={i} className={`group ${team.cardWidth}`}>
													<div className="relative rounded-2xl overflow-hidden bg-gradient-to-b from-[#2a2f3e] to-[#1a1f2e] border border-white/10 transition-transform duration-300 hover:scale-105">
														<div className="aspect-[1/1] bg-gradient-to-b from-gray-600 to-gray-700 relative">
															<Image
																src={member.image}
																alt={member.name.replace('\n', ' ')}
																fill
																className="object-cover"
															/>
															<div className="absolute inset-0 bg-gradient-to-t from-[#1a1f2e] via-transparent to-transparent opacity-60"></div>
														</div>
														<div className="p-4">
															<h4 className="text-sm md:text-base font-medium text-white mb-1 whitespace-pre-line">
																{member.name}
															</h4>
															<p className="text-xs md:text-sm mb-2" style={{ color: team.color }}>Instructor</p>
															<p className="text-gray-300 text-xs leading-relaxed">
																{member.role}
															</p>
														</div>
													</div>
												</div>
											))}
										</div>
									</div>
								</div>
							))}
						</div>

						{/* Navigation Buttons for Group 4 */}
						<div className="flex justify-center items-center gap-2 md:gap-4 mt-8 flex-wrap">
							<button
								onClick={() => setCurrentTeam4(0)}
								className={`px-3 md:px-4 py-2 rounded-full text-xs md:text-sm transition-all ${currentTeam4 === 0
									? 'bg-gradient-to-r from-[#607d8b] to-[#546e7a] text-white'
									: 'bg-white/10 text-gray-400 hover:bg-white/20'
									}`}
							>
								Wharehouse and The Gang
							</button>
							<button
								onClick={() => setCurrentTeam4(1)}
								className={`px-3 md:px-4 py-2 rounded-full text-xs md:text-sm transition-all ${currentTeam4 === 1
									? 'bg-gradient-to-r from-[#795548] to-[#6d4c41] text-white'
									: 'bg-white/10 text-gray-400 hover:bg-white/20'
									}`}
							>
								Production
							</button>
							<button
								onClick={() => setCurrentTeam4(2)}
								className={`px-3 md:px-4 py-2 rounded-full text-xs md:text-sm transition-all ${currentTeam4 === 2
									? 'bg-gradient-to-r from-[#009688] to-[#00796b] text-white'
									: 'bg-white/10 text-gray-400 hover:bg-white/20'
									}`}
							>
								Let&apos;s do this
							</button>
						</div>
					</div>

					{/* IT Consult - Section 5 */}
					<h3 className="text-xl sm:text-2xl md:text-3xl text-center mb-8 md:mb-12 font-normal text-[#ffd54f]">
						IT Consult
					</h3>

					<h4 className="text-lg md:text-xl text-center mb-6 text-[#e91e63]">
						Team: IT Consult
					</h4>

					<div className="flex justify-center mb-16 md:mb-20">
						<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6 max-w-8xl mx-auto">
							{[
								{ 
									name: "Person DDD", 
									image: "/images/teams/it-consult/ult-ganok.png", 
									role: "Network Engineer" 
								},
								{ 
									name: "Person EEE", 
									image: "/images/teams/it-consult/ult-ora.png", 
									role: "IT Security Specialist" 
								},
								{ 
									name: "Person FFF", 
									image: "/images/teams/it-consult/ult-wera.png", 
									role: "Technical Support Lead" 
								},
								{ 
									name: "Person GGG", 
									image: "/images/teams/it-consult/ult-rana.png", 
									role: "Cloud Solutions Architect" 
								},
								{ 
									name: "Person HHH", 
									image: "/images/teams/it-consult/ult-ratcha.png", 
									role: "DevOps Engineer" 
								},
								{ 
									name: "Person CCC", 
									image: "/images/teams/it-consult/ult-chidcha.png", 
									role: "System Administrator" 
								}
							].map((member, i) => (
								<div key={i} className="group w-48 md:w-52">
									<div className="relative rounded-2xl overflow-hidden bg-gradient-to-b from-[#2a2f3e] to-[#1a1f2e] border border-white/10 transition-transform duration-300 hover:scale-105">
										<div className="aspect-[1/1] bg-gradient-to-b from-gray-600 to-gray-700 relative">
											<Image
												src={member.image}
												alt={member.name.replace('\n', ' ')}
												fill
												className="object-cover"
											/>
											<div className="absolute inset-0 bg-gradient-to-t from-[#1a1f2e] via-transparent to-transparent opacity-60"></div>
										</div>
										<div className="p-4">
											<h4 className="text-sm md:text-base font-medium text-white mb-1 whitespace-pre-line">
												{member.name}
											</h4>
											<p className="text-[#e91e63] text-xs md:text-sm mb-2">Instructor</p>
											<p className="text-gray-300 text-xs leading-relaxed">
												{member.role}
											</p>
										</div>
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
			</section>
		</main>
	)
}
