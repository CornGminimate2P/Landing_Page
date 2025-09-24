'use client'
import Image from 'next/image'
import { useState } from 'react'

export default function Home() {
	const [currentTeamIndex, setCurrentTeamIndex] = useState(0)
	const [currentITTeamIndex, setCurrentITTeamIndex] = useState(0)

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
							<p className="text-sm md:text-base text-gray-300">ยิ่งบ่อย ยิ่งเหมาะให้ AI ช่วย</p>
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

			{/* Team Participants Section */}
			<section className="py-12 md:py-20 bg-gradient-to-b from-[#0a0e27] to-[#1a237e]">
				{/* Section Headers */}
				<div className="max-w-8xl mx-auto px-4 md:px-5">
					<h2 className="text-3xl sm:text-4xl md:text-5xl text-center mb-4 md:mb-6 font-bold text-white">
						Team Participants
					</h2>

					<h3 className="text-xl sm:text-2xl md:text-3xl text-center mb-8 md:mb-12 font-normal text-[#ffd54f]">
						Mentors
					</h3>

					{/* Desktop Grid View */}
					<div className="hidden lg:flex justify-center mb-12 md:mb-16">
						<div className="grid grid-cols-6 gap-4 md:gap-6 max-w-8xl">
							{[
								{
									name: "สายชล\nบัวบานศรี",
									image: "/images/mentors/mentor-saichon.png",
									role: "ผู้จัดการฝ่ายบริหารคลังสินค้าและจัดส่ง (M3)"
								},
								{
									name: "สมเกียรติ\nสุกัญจนศิร",
									image: "/images/mentors/mentor-somkiat.png",
									role: "ผู้จัดการฝ่ายสำนักงาน (M3)"
								},
								{
									name: "ชัยยันต์\nบุญเจริญชัย",
									image: "/images/mentors/mentor-chaiyan.png",
									role: "ที่ปรึกษา (M3)"
								},
								{
									name: "อาคเนย์\nเกตุกลิ่นแก้ว",
									image: "/images/mentors/mentor-arkveld.png",
									role: "ผู้จัดการฝ่ายเทคโนโลยีสารสนเทศ (M3)"
								},
								{
									name: "บุญเปรม\nสุขกสี",
									image: "/images/mentors/mentor-bunprem.png",
									role: "ผู้จัดการฝ่ายผลิต (M3)"
								},
								{
									name: "ธารทิพย์\nศรีงามผ่อง",
									image: "/images/mentors/mentor-tarntip.png",
									role: "ผู้จัดการฝ่ายบัญชีและการเงิน (M3)"
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
											<h4 className="text-sm md:text-xl font-medium text-white mb-1 whitespace-pre-line">
												{director.name}
											</h4>
											<p className="text-[#66bb6a] text-xs md:text-lg mb-2">Mentor</p>
											<p className="text-gray-300 text-xs leading-relaxed">
												{director.role}
											</p>
										</div>
									</div>
								</div>
							))}
						</div>
					</div>
				</div>

				{/* Mobile Horizontal Scroll View - Outside container */}
				<div className="lg:hidden mb-12 md:mb-16">
					<div className="overflow-x-auto pb-4">
						<div className="flex gap-4 pl-4 after:content-[''] after:pr-1">
							{[
								{
									name: "สายชล\nบัวบานศรี",
									image: "/images/mentors/mentor-saichon.png",
									role: "ผู้จัดการฝ่ายบริหารคลังสินค้าและจัดส่ง (M3)"
								},
								{
									name: "สมเกียรติ\nสุกัญจนศิร",
									image: "/images/mentors/mentor-somkiat.png",
									role: "ผู้จัดการฝ่ายสำนักงาน (M3)"
								},
								{
									name: "ชัยยันต์\nบุญเจริญชัย",
									image: "/images/mentors/mentor-chaiyan.png",
									role: "ที่ปรึกษา (M3)"
								},
								{
									name: "อาคเนย์\nเกตุกลิ่นแก้ว",
									image: "/images/mentors/mentor-arkveld.png",
									role: "ผู้จัดการฝ่ายเทคโนโลยีสารสนเทศ (M3)"
								},
								{
									name: "บุญเปรม\nสุขกสี",
									image: "/images/mentors/mentor-bunprem.png",
									role: "ผู้จัดการฝ่ายผลิต (M3)"
								},
								{
									name: "ธารทิพย์\nศรีงามผ่อง",
									image: "/images/mentors/mentor-tarntip.png",
									role: "ผู้จัดการฝ่ายบัญชีและการเงิน (M3)"
								}
							].map((director, i) => (
								<div key={i} className="flex-shrink-0 w-48">
									<div className="relative rounded-2xl overflow-hidden bg-gradient-to-b from-[#2a2f3e] to-[#1a1f2e] border border-white/10">
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
											<h4 className="text-sm font-medium text-white mb-1 whitespace-pre-line">
												{director.name}
											</h4>
											<p className="text-[#66bb6a] text-xs mb-2">Mentor</p>
											<p className="text-gray-300 text-xs leading-relaxed">
												{director.role}
											</p>
										</div>
									</div>
								</div>
							))}
						</div>
					</div>
				</div>

				{/* AI Challenger Teams Header */}
				<div className="px-4 md:px-5">
					<h3 className="text-xl sm:text-2xl md:text-3xl text-center mb-8 md:mb-6 font-normal text-[#ffd54f]">
						AI Challenger Teams
					</h3>
				</div>

				{/* Teams Carousel Container */}
				<div className="relative overflow-hidden mb-16 md:mb-20">
					{/* Desktop View - Carousel with Grid Layout */}
					<div className="hidden lg:block px-4 md:px-5">
						<div
							className="flex transition-transform duration-500 ease-in-out"
							style={{ transform: `translateX(-${currentTeamIndex * 100}%)` }}
						>
							{[
								{
									name: "The Giver",
									color: "#64b5f6",
									layout: "grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 justify-items-center",
									cardWidth: "w-48 md:w-52",
									gap: "gap-4 md:gap-6",
									members: [
										{
											name: "ชุตินันท์\nสุวรรณรักษา",
											image: "/images/teams/the-giver/giver-chuti.png",
											role: "เจ้าหน้าที่จัดซื้ออาวุโส (O2)"
										},
										{
											name: "ปณิตตา\nจิตร์อ่อง",
											image: "/images/teams/the-giver/giver-panit.png",
											role: " เจ้าหน้าที่จัดซื้ออาวุโส (O2)"
										},
										{
											name: "สิริวิมล\nยอดถา",
											image: "/images/teams/the-giver/giver-siri.png",
											role: "หัวหน้าแผนกจัดซื้อ (O3)"
										},
										{
											name: "สิทธิชัย\nทางสวาย",
											image: "/images/teams/the-giver/giver-sitthi.png",
											role: "เจ้าหน้าที่จัดซื้ออาวุโส (O2)"
										},
										{
											name: "สุดาพร\nสันประภา",
											image: "/images/teams/the-giver/giver-suda.png",
											role: "เจ้าหน้าที่จัดซื้อ (O1)"
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
											name: "สุพิน\nเปกรัมย์",
											image: "/images/teams/thinkup/up-supin.png",
											role: "ผู้จัดการส่วน Preproduction (M2)"
										},
										{
											name: "กุลวดี\nแซ่โค้ว",
											image: "/images/teams/thinkup/up-gulla.png",
											role: "หัวหน้าแผนก Master Production planning (O3)"
										},
										{
											name: "มานะ\nพันธุ์ดี",
											image: "/images/teams/thinkup/up-mana.png",
											role: "หัวหน้าส่วน AfterPress (M1)"
										}
									]
								},
								{
									name: "AccNext",
									color: "#4fc3f7",
									layout: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 justify-items-center",
									cardWidth: "w-48 md:w-52",
									gap: "gap-4 md:gap-6",
									members: [
										{
											name: "กรองแก้ว\nวังแก้วหิรัญ",
											image: "/images/teams/accnext/next-grong.png",
											role: "หัวหน้าส่วนบัญชีต้นทุน (M1)"
										},
										{
											name: "วีรยุทธ\nชาติทองคำ",
											image: "/images/teams/accnext/next-wera.png",
											role: "เจ้าหน้าที่คำนวณราคาอาวุโส (O2)"
										},
										{
											name: "ทิวาพงศ์\nสุดสวาสดิ์",
											image: "/images/teams/accnext/next-tiwa.png",
											role: "หัวหน้าส่วนบัญชีทั่วไป (M1)"
										},
										{
											name: "ทัศนีย์\nบรรณทิพย์",
											image: "/images/teams/accnext/next-tussa.png",
											role: "หัวหน้าแผนกบัญชีทั่วไป (O3)"
										},
										{
											name: "พิสมัย\nยิ้มจันทร์",
											image: "/images/teams/accnext/next-pissa.png",
											role: "เจ้าหน้าที่การเงินรับ-จ่าย (O1)"
										}
									]
								},
								{
									name: "Silent Storm",
									color: "#81c784",
									layout: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-items-center",
									cardWidth: "w-48 md:w-52",
									gap: "gap-4 md:gap-6",
									members: [
										{
											name: "กัมพล\nแซ่กวน",
											image: "/images/teams/silent-storm/storm-gumpol.png",
											role: "Intelligent software & IoT (O2)"
										},
										{
											name: "ทิติดา\nเอนก",
											image: "/images/teams/silent-storm/storm-tithi.png",
											role: "Nextgen Developer (O1)"
										},
										{
											name: "รวิพร\nชาวดอน",
											image: "/images/teams/silent-storm/storm-rawi.png",
											role: "Nextgen Developer (O1)"
										},
										{
											name: "ฆนาการ\nสังคะบุตร",
											image: "/images/teams/silent-storm/storm-kana.png",
											role: "Automation Engineer (O1)"
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
											name: "สุริยา\nชินดา",
											image: "/images/teams/ai-sheng/sheng-suri.png",
											role: "ช่างเทคนิคเครื่องกล (O1)"
										},
										{
											name: "สุกัญญา\nบุญทูล",
											image: "/images/teams/ai-sheng/sheng-sugun.png",
											role: "พนักงานซ่อมบำรุงอาวุโส (O2)"
										},
										{
											name: "สุรสีห์\nเพิ่มนาม",
											image: "/images/teams/ai-sheng/sheng-sura.png",
											role: "หัวหน้าส่วนงานระบบ (M1)"
										}
									]
								},
								{
									name: "AuditX",
									color: "#f06292",
									layout: "grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 justify-items-center",
									cardWidth: "w-48 md:w-52",
									gap: "gap-4 md:gap-6",
									members: [
										{
											name: "สุภรัตน์\nรุ่มนุ่ม",
											image: "/images/teams/auditx/x-supa.png",
											role: "พนักงานตรวจสอบมาตรฐานอาวุโส (O2)"
										},
										{
											name: "ชินกฤต\nกาญจนจงกล",
											image: "/images/teams/auditx/x-shinna.png",
											role: "เจ้าหน้าที่ตรวจสอบภายในอาวุโส (O2)"
										},
										{
											name: "พัชรี\nเผื่อนเพาะ",
											image: "/images/teams/auditx/x-patcha.png",
											role: "ผู้จัดการส่วนตรวจสอบมาตรฐาน (M2)"
										},
										{
											name: "สมหฤทัย\nจันทกล",
											image: "/images/teams/auditx/x-somha.png",
											role: "เจ้าหน้าที่ตรวจสอบภายใน (O1)"
										},
										{
											name: "วิชนี\nมนัสวีระพร",
											image: "/images/teams/auditx/x-wichcha.png",
											role: "พนักงานตรวจสอบมาตรฐานอาวุโส (O2)"
										}
									]
								},
								{
									name: "AI Vision Ops",
									color: "#9c27b0",
									layout: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center",
									cardWidth: "w-48 md:w-52",
									gap: "gap-4 md:gap-6",
									members: [
										{
											name: "สุภชา\nใจแสน",
											image: "/images/teams/ai-vision-ops/ops-supa.png",
											role: "พนักงาน Letter Shop (O1)"
										},
										{
											name: "สุวรส\nสุพร",
											image: "/images/teams/ai-vision-ops/ops-suwa.png",
											role: "หัวหน้าแผนก (O3)"
										},
										{
											name: "เกศินี\nแซ่โค้ว",
											image: "/images/teams/ai-vision-ops/ops-gesi.png",
											role: "หัวหน้าส่วน Operation Support & QA (M1)"
										}
									]
								},
								{
									name: "TaskMasters",
									color: "#ff5722",
									layout: "grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 justify-items-center",
									cardWidth: "w-48 md:w-52",
									gap: "gap-4 md:gap-6",
									members: [
										{
											name: "ชุติกาญจน์\nพรหมปัญญา",
											image: "/images/teams/taskmasters/masters-chuti.png",
											role: "เจ้าหน้าที่เร่งรัดหนี้สิน (O1)"
										},
										{
											name: "กฤษณี\nจันทร์อ่อน",
											image: "/images/teams/taskmasters/masters-kritsa.png",
											role: "Customer Success (O1)"
										},
										{
											name: "นภัสกร\nจันทร์ทองสุข",
											image: "/images/teams/taskmasters/masters-napus.png",
											role: "พนักงานบัญชีทั่วไป (O1)"
										},
										{
											name: "กาญจนา\nพาพงษ์",
											image: "/images/teams/taskmasters/masters-ghanja.png",
											role: "เจ้าหน้าที่บัญชีต้นทุน (O1)"
										},
										{
											name: "นันทวัน\nคุ้มกุดขมิ้น",
											image: "/images/teams/taskmasters/masters-nanta.png",
											role: "เจ้าหน้าที่บัญชีทั่วไป (O1)"
										}
									]
								},
								{
									name: "Maybe not yet (อาจจะยังน๊าาา)",
									color: "#26c6da",
									layout: "grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 justify-items-center",
									cardWidth: "w-48 md:w-52",
									gap: "gap-4 md:gap-6",
									members: [
										{
											name: "ปิยะรัตน์\nสนธิเจริญ",
											image: "/images/teams//maybe-not-yet/yet-piya.png",
											role: "Sales Coordinator (O1)"
										},
										{
											name: "สัตตกมล\nแก้วเจริญชัย",
											image: "/images/teams//maybe-not-yet/yet-satta.png",
											role: "WHM Support (O1)"
										},
										{
											name: "สุทัศน์\nมะยมทอง",
											image: "/images/teams//maybe-not-yet/yet-sutus.png",
											role: "Senior Coordinator Supervisor (M1)"
										},
										{
											name: "วิจิตรา\nจ่าคิ้ม",
											image: "/images/teams//maybe-not-yet/yet-wijit.png",
											role: "Sales Coordinator (O1)"
										},
										{
											name: "วรางค์\nสุขกาย",
											image: "/images/teams//maybe-not-yet/yet-warang.png",
											role: "WHM Support (O1)"
										}
									]
								},
								{
									name: "Wharehouse and The Gang",
									color: "#d4e157",
									layout: "grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 justify-items-center",
									cardWidth: "w-48 md:w-52",
									gap: "gap-4 md:gap-6",
									members: [
										{
											name: "สุธี\nวัฒนพันธ์",
											image: "/images/teams/wharehouse-and-the-gang/gang-suthee.png",
											role: "หัวหน้าส่วน Fulfillment & Project (M1)"
										},
										{
											name: "สุข\nจันสุริ",
											image: "/images/teams/wharehouse-and-the-gang/gang-suk.png",
											role: "พนักงานควบคุมการรับ-ส่งสินค้า (O1)"
										},
										{
											name: "ปภาวดี\nพุ่มสุวรรณ",
											image: "/images/teams/wharehouse-and-the-gang/gang-papaa.png",
											role: "พนักงานควบคุมการรับ-ส่งสินค้า (O1)"
										},
										{
											name: "อารีรัตน์\nแทนพลกรัง",
											image: "/images/teams/wharehouse-and-the-gang/gang-aree.png",
											role: "พนักงานธุรการคลังสินค้า (O1)"
										},
										{
											name: "ประครองรัตน์\nพิมพ์สว่าง",
											image: "/images/teams/wharehouse-and-the-gang/gang-prakrong.png",
											role: "พนักงานธุรการคลังสินค้า (O1)"
										}
									]
								},
								{
									name: "Production",
									color: "#ff6e40",
									layout: "grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 justify-items-center",
									cardWidth: "w-48 md:w-52",
									gap: "gap-4 md:gap-6",
									members: [
										{
											name: "พิสิฐ\nมิ่งขวัญ",
											image: "/images/teams/production/on-pisit.png",
											role: "หัวหน้าส่วน AfterPress (M1)"
										},
										{
											name: "ภาวิณี\nอินทร์โพธิ์กลาง",
											image: "/images/teams/production/on-pawi.png",
											role: "หัวหน้าส่วน Label & Packaging (M1)"
										},
										{
											name: "นันทนา\nเจริญกิจ",
											image: "/images/teams/production/on-nunta.png",
											role: "หัวหน้าส่วน ERP & Report (M1)"
										},
										{
											name: "กฤษณะ\nพุ่มโพธิ์",
											image: "/images/teams/production/on-kritsa.png",
											role: "หัวหน้าส่วน Press Sheet (M1)"
										},
										{
											name: "สมคิด\nคำแก้ว",
											image: "/images/teams/production/on-somkit.png",
											role: "หัวหน้าส่วนพิมพ์ม้วน (M1)"
										},
										{
											name: "ชวินทร์\nวรนพสุต",
											image: "/images/teams/production/on-chawin.png",
											role: "ผู้จัดการส่วน การพิมพ์ดิจิตอล (M2)"
										}
									]
								},
								{
									name: "Let's do this (เอาแล้วน๊าาา)",
									color: "#009688",
									layout: "grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 justify-items-center",
									cardWidth: "w-48 md:w-52",
									gap: "gap-4 md:gap-6",
									members: [
										{
											name: "อโณชา\nพุมมาเกิด",
											image: "/images/teams/lets-do-this/this-ano.png",
											role: "Sales Executive (O1)"
										},
										{
											name: "จุฑารัตน์\nสอนประสิทธิ์",
											image: "/images/teams/lets-do-this/this-juta.png",
											role: "Sales Supervisor (O3)"
										},
										{
											name: "ศุภาวรรณ\nชัยทองวงศ์วัฒนา",
											image: "/images/teams/lets-do-this/this-supa.png",
											role: "พนักงานขายต่างประเทศ (O1)"
										},
										{
											name: "กาญจนา\nเฮ้งหลี",
											image: "/images/teams/lets-do-this/this-ganja.png",
											role: "Sales Executive (O1)"
										},
										{
											name: "ธนรัตน์\nรอดพาที",
											image: "/images/teams/lets-do-this/this-tana.png",
											role: "Sales Executive (O1)"
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
															<h4 className="text-sm md:text-xl font-medium text-white mb-1 whitespace-pre-line">
																{member.name}
															</h4>
															<p className="text-xs md:text-lg mb-2" style={{ color: team.color }}>Challenger</p>
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
					</div>

					{/* Mobile View - Carousel with Horizontal Scroll for Each Team */}
					<div className="lg:hidden">
						<div
							className="flex transition-transform duration-500 ease-in-out"
							style={{ transform: `translateX(-${currentTeamIndex * 100}%)` }}
						>
							{[
								{
									name: "The Giver",
									color: "#64b5f6",
									members: [
										{
											name: "ชุตินันท์\nสุวรรณรักษา",
											image: "/images/teams/the-giver/giver-chuti.png",
											role: "เจ้าหน้าที่จัดซื้ออาวุโส (O2)"
										},
										{
											name: "ปณิตตา\nจิตร์อ่อง",
											image: "/images/teams/the-giver/giver-panit.png",
											role: " เจ้าหน้าที่จัดซื้ออาวุโส (O2)"
										},
										{
											name: "สิริวิมล\nยอดถา",
											image: "/images/teams/the-giver/giver-siri.png",
											role: "หัวหน้าแผนกจัดซื้อ (O3)"
										},
										{
											name: "สิทธิชัย\nทางสวาย",
											image: "/images/teams/the-giver/giver-sitthi.png",
											role: "เจ้าหน้าที่จัดซื้ออาวุโส (O2)"
										},
										{
											name: "สุดาพร\nสันประภา",
											image: "/images/teams/the-giver/giver-suda.png",
											role: "เจ้าหน้าที่จัดซื้อ (O1)"
										}
									]
								},
								{
									name: "ThinkUp",
									color: "#ba68c8",
									members: [
										{
											name: "สุพิน\nเปกรัมย์",
											image: "/images/teams/thinkup/up-supin.png",
											role: "ผู้จัดการส่วน Preproduction (M2)"
										},
										{
											name: "กุลวดี\nแซ่โค้ว",
											image: "/images/teams/thinkup/up-gulla.png",
											role: "หัวหน้าแผนก Master Production planning (O3)"
										},
										{
											name: "มานะ\nพันธุ์ดี",
											image: "/images/teams/thinkup/up-mana.png",
											role: "หัวหน้าส่วน AfterPress (M1)"
										}
									]
								},
								{
									name: "AccNext",
									color: "#4fc3f7",
									members: [
										{
											name: "กรองแก้ว\nวังแก้วหิรัญ",
											image: "/images/teams/accnext/next-grong.png",
											role: "หัวหน้าส่วนบัญชีต้นทุน (M1)"
										},
										{
											name: "วีรยุทธ\nชาติทองคำ",
											image: "/images/teams/accnext/next-wera.png",
											role: "เจ้าหน้าที่คำนวณราคาอาวุโส (O2)"
										},
										{
											name: "ทิวาพงศ์\nสุดสวาสดิ์",
											image: "/images/teams/accnext/next-tiwa.png",
											role: "หัวหน้าส่วนบัญชีทั่วไป (M1)"
										},
										{
											name: "ทัศนีย์\nบรรณทิพย์",
											image: "/images/teams/accnext/next-tussa.png",
											role: "หัวหน้าแผนกบัญชีทั่วไป (O3)"
										},
										{
											name: "พิสมัย\nยิ้มจันทร์",
											image: "/images/teams/accnext/next-pissa.png",
											role: "เจ้าหน้าที่การเงินรับ-จ่าย (O1)"
										}
									]
								},
								{
									name: "Silent Storm",
									color: "#81c784",
									members: [
										{
											name: "กัมพล\nแซ่กวน",
											image: "/images/teams/silent-storm/storm-gumpol.png",
											role: "Intelligent software & IoT (O2)"
										},
										{
											name: "ทิติดา\nเอนก",
											image: "/images/teams/silent-storm/storm-tithi.png",
											role: "Nextgen Developer (O1)"
										},
										{
											name: "รวิพร\nชาวดอน",
											image: "/images/teams/silent-storm/storm-rawi.png",
											role: "Nextgen Developer (O1)"
										},
										{
											name: "ฆนาการ\nสังคะบุตร",
											image: "/images/teams/silent-storm/storm-kana.png",
											role: "Automation Engineer (O1)"
										}
									]
								},
								{
									name: "AI-SHENG",
									color: "#ffb74d",
									members: [
										{
											name: "สุริยา\nชินดา",
											image: "/images/teams/ai-sheng/sheng-suri.png",
											role: "ช่างเทคนิคเครื่องกล (O1)"
										},
										{
											name: "สุกัญญา\nบุญทูล",
											image: "/images/teams/ai-sheng/sheng-sugun.png",
											role: "พนักงานซ่อมบำรุงอาวุโส (O2)"
										},
										{
											name: "สุรสีห์\nเพิ่มนาม",
											image: "/images/teams/ai-sheng/sheng-sura.png",
											role: "หัวหน้าส่วนงานระบบ (M1)"
										}
									]
								},
								{
									name: "AuditX",
									color: "#f06292",
									members: [
										{
											name: "สุภรัตน์\nรุ่มนุ่ม",
											image: "/images/teams/auditx/x-supa.png",
											role: "พนักงานตรวจสอบมาตรฐานอาวุโส (O2)"
										},
										{
											name: "ชินกฤต\nกาญจนจงกล",
											image: "/images/teams/auditx/x-shinna.png",
											role: "เจ้าหน้าที่ตรวจสอบภายในอาวุโส (O2)"
										},
										{
											name: "พัชรี\nเผื่อนเพาะ",
											image: "/images/teams/auditx/x-patcha.png",
											role: "ผู้จัดการส่วนตรวจสอบมาตรฐาน (M2)"
										},
										{
											name: "สมหฤทัย\nจันทกล",
											image: "/images/teams/auditx/x-somha.png",
											role: "เจ้าหน้าที่ตรวจสอบภายใน (O1)"
										},
										{
											name: "วิชนี\nมนัสวีระพร",
											image: "/images/teams/auditx/x-wichcha.png",
											role: "พนักงานตรวจสอบมาตรฐานอาวุโส (O2)"
										}
									]
								},
								{
									name: "AI Vision Ops",
									color: "#9c27b0",
									members: [
										{
											name: "สุภชา\nใจแสน",
											image: "/images/teams/ai-vision-ops/ops-supa.png",
											role: "พนักงาน Letter Shop (O1)"
										},
										{
											name: "สุวรส\nสุพร",
											image: "/images/teams/ai-vision-ops/ops-suwa.png",
											role: "หัวหน้าแผนก (O3)"
										},
										{
											name: "เกศินี\nแซ่โค้ว",
											image: "/images/teams/ai-vision-ops/ops-gesi.png",
											role: "หัวหน้าส่วน Operation Support & QA (M1)"
										}
									]
								},
								{
									name: "TaskMasters",
									color: "#ff5722",
									members: [
										{
											name: "ชุติกาญจน์\nพรหมปัญญา",
											image: "/images/teams/taskmasters/masters-chuti.png",
											role: "เจ้าหน้าที่เร่งรัดหนี้สิน (O1)"
										},
										{
											name: "กฤษณี\nจันทร์อ่อน",
											image: "/images/teams/taskmasters/masters-kritsa.png",
											role: "Customer Success (O1)"
										},
										{
											name: "นภัสกร\nจันทร์ทองสุข",
											image: "/images/teams/taskmasters/masters-napus.png",
											role: "พนักงานบัญชีทั่วไป (O1)"
										},
										{
											name: "กาญจนา\nพาพงษ์",
											image: "/images/teams/taskmasters/masters-ghanja.png",
											role: "เจ้าหน้าที่บัญชีต้นทุน (O1)"
										},
										{
											name: "นันทวัน\nคุ้มกุดขมิ้น",
											image: "/images/teams/taskmasters/masters-nanta.png",
											role: "เจ้าหน้าที่บัญชีทั่วไป (O1)"
										}
									]
								},
								{
									name: "Maybe not yet (อาจจะยังน๊าาา)",
									color: "#26c6da",
									members: [
										{
											name: "ปิยะรัตน์\nสนธิเจริญ",
											image: "/images/teams//maybe-not-yet/yet-piya.png",
											role: "Sales Coordinator (O1)"
										},
										{
											name: "สัตตกมล\nแก้วเจริญชัย",
											image: "/images/teams//maybe-not-yet/yet-satta.png",
											role: "WHM Support (O1)"
										},
										{
											name: "สุทัศน์\nมะยมทอง",
											image: "/images/teams//maybe-not-yet/yet-sutus.png",
											role: "Senior Coordinator Supervisor (M1)"
										},
										{
											name: "วิจิตรา\nจ่าคิ้ม",
											image: "/images/teams//maybe-not-yet/yet-wijit.png",
											role: "Sales Coordinator (O1)"
										},
										{
											name: "วรางค์\nสุขกาย",
											image: "/images/teams//maybe-not-yet/yet-warang.png",
											role: "WHM Support (O1)"
										}
									]
								},
								{
									name: "Wharehouse and The Gang",
									color: "#d4e157",
									members: [
										{
											name: "สุธี\nวัฒนพันธ์",
											image: "/images/teams/wharehouse-and-the-gang/gang-suthee.png",
											role: "หัวหน้าส่วน Fulfillment & Project (M1)"
										},
										{
											name: "สุข\nจันสุริ",
											image: "/images/teams/wharehouse-and-the-gang/gang-suk.png",
											role: "พนักงานควบคุมการรับ-ส่งสินค้า (O1)"
										},
										{
											name: "ปภาวดี\nพุ่มสุวรรณ",
											image: "/images/teams/wharehouse-and-the-gang/gang-papaa.png",
											role: "พนักงานควบคุมการรับ-ส่งสินค้า (O1)"
										},
										{
											name: "อารีรัตน์\nแทนพลกรัง",
											image: "/images/teams/wharehouse-and-the-gang/gang-aree.png",
											role: "พนักงานธุรการคลังสินค้า (O1)"
										},
										{
											name: "ประครองรัตน์\nพิมพ์สว่าง",
											image: "/images/teams/wharehouse-and-the-gang/gang-prakrong.png",
											role: "พนักงานธุรการคลังสินค้า (O1)"
										}
									]
								},
								{
									name: "Production",
									color: "#ff6e40",
									members: [
										{
											name: "พิสิฐ\nมิ่งขวัญ",
											image: "/images/teams/production/on-pisit.png",
											role: "หัวหน้าส่วน AfterPress (M1)"
										},
										{
											name: "ภาวิณี\nอินทร์โพธิ์กลาง",
											image: "/images/teams/production/on-pawi.png",
											role: "หัวหน้าส่วน Label & Packaging (M1)"
										},
										{
											name: "นันทนา\nเจริญกิจ",
											image: "/images/teams/production/on-nunta.png",
											role: "หัวหน้าส่วน ERP & Report (M1)"
										},
										{
											name: "กฤษณะ\nพุ่มโพธิ์",
											image: "/images/teams/production/on-kritsa.png",
											role: "หัวหน้าส่วน Press Sheet (M1)"
										},
										{
											name: "สมคิด\nคำแก้ว",
											image: "/images/teams/production/on-somkit.png",
											role: "หัวหน้าส่วนพิมพ์ม้วน (M1)"
										},
										{
											name: "ชวินทร์\nวรนพสุต",
											image: "/images/teams/production/on-chawin.png",
											role: "ผู้จัดการส่วน การพิมพ์ดิจิตอล (M2)"
										}
									]
								},
								{
									name: "Let's do this (เอาแล้วน๊าาา)",
									color: "#009688",
									members: [
										{
											name: "อโณชา\nพุมมาเกิด",
											image: "/images/teams/lets-do-this/this-ano.png",
											role: "Sales Executive (O1)"
										},
										{
											name: "จุฑารัตน์\nสอนประสิทธิ์",
											image: "/images/teams/lets-do-this/this-juta.png",
											role: "Sales Supervisor (O3)"
										},
										{
											name: "ศุภาวรรณ\nชัยทองวงศ์วัฒนา",
											image: "/images/teams/lets-do-this/this-supa.png",
											role: "พนักงานขายต่างประเทศ (O1)"
										},
										{
											name: "กาญจนา\nเฮ้งหลี",
											image: "/images/teams/lets-do-this/this-ganja.png",
											role: "Sales Executive (O1)"
										},
										{
											name: "ธนรัตน์\nรอดพาที",
											image: "/images/teams/lets-do-this/this-tana.png",
											role: "Sales Executive (O1)"
										}
									]
								}
							].map((team, teamIndex) => (
								<div key={teamIndex} className="w-full flex-shrink-0">
									<h4 className="text-lg text-center mb-6 px-4" style={{ color: team.color }}>
										Team: {team.name}
									</h4>
									<div className="overflow-x-auto pb-4">
										<div className="flex gap-4 pl-4 after:content-[''] after:pr-1">
											{team.members.map((member, i) => (
												<div key={i} className="flex-shrink-0 w-48">
													<div className="relative rounded-2xl overflow-hidden bg-gradient-to-b from-[#2a2f3e] to-[#1a1f2e] border border-white/10">
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
															<h4 className="text-sm font-medium text-white mb-1 whitespace-pre-line">
																{member.name}
															</h4>
															<p className="text-xs mb-2" style={{ color: team.color }}>Challenger</p>
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
					</div>

					{/* Team Counter with Arrows - แสดงทั้ง Desktop และ Mobile */}
					<div className="flex justify-center items-center gap-4">
						<button
							onClick={() => setCurrentTeamIndex(currentTeamIndex > 0 ? currentTeamIndex - 1 : 11)}
							className="w-10 h-10 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-300 border border-white/20"
						>
							<svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
							</svg>
						</button>
						<span className="text-gray-400 text-sm">
							{currentTeamIndex + 1} / 12
						</span>
						<button
							onClick={() => setCurrentTeamIndex(currentTeamIndex < 11 ? currentTeamIndex + 1 : 0)}
							className="w-10 h-10 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-300 border border-white/20"
						>
							<svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
							</svg>
						</button>
					</div>
				</div>

				{/* IT Advisors Section Headers */}
				<div className="px-4 md:px-5">
					<h3 className="text-xl sm:text-2xl md:text-3xl text-center mb-8 md:mb-6 font-normal text-[#ffd54f]">
						AI Advisors
					</h3>

					<h4 className="text-lg md:text-xl text-center mb-6 text-[#e91e63]">
						IT Team
					</h4>
				</div>

				{/* IT Team Carousel Container */}
				<div className="relative overflow-hidden mb-16 md:mb-20">
					{/* Desktop View - Carousel with Grid Layout */}
					<div className="hidden lg:block px-4 md:px-5">
						<div
							className="flex transition-transform duration-500 ease-in-out"
							style={{ transform: `translateX(-${currentITTeamIndex * 100}%)` }}
						>
							{[
								{
									members: [
										{
											name: "น้องนก",
											image: "/images/teams/it-consult/ult-ganok.png",
											role: "Product Trainer Specialist (O3)"
										},
										{
											name: "น้องอร",
											image: "/images/teams/it-consult/ult-ora.png",
											role: "Project Manager (O1)"
										},
										{
											name: "น้องโอ๊ต",
											image: "/images/teams/it-consult/ult-wera.png",
											role: "Network Engineer (O1)"
										},
										{
											name: "น้องแคท",
											image: "/images/teams/it-consult/ult-kat.png",
											role: "Document Designer (O1)",
										}
									]
								},
								{
									members: [
										{
											name: "น้องต้อม",
											image: "/images/teams/it-consult/ult-ratcha.png",
											role: "ERP Specialist (O2)"
										},
										{
											name: "น้องนิก",
											image: "/images/teams/it-consult/ult-chidcha.png",
											role: "IT Security Officer (O2)"
										},
										{
											name: "น้องอาร์ม",
											image: "/images/teams/it-consult/ult-rana.png",
											role: "Document Designer (O1)"
										}
									]
								}
							].map((group, groupIndex) => (
								<div key={groupIndex} className="w-full flex-shrink-0">
									<div className="flex justify-center">
										<div className={`grid ${group.members.length === 4 ? 'grid-cols-4' : 'grid-cols-3'} gap-4 md:gap-6 max-w-6xl mx-auto`}>
											{group.members.map((member, i) => (
												<div key={i} className="group w-48 md:w-52">
													<div className={`relative rounded-2xl overflow-hidden bg-gradient-to-b from-[#2a2f3e] to-[#1a1f2e] border border-white/10 transition-transform duration-300`}>
														<div className="aspect-[1/1] bg-gradient-to-b from-gray-600 to-gray-700 relative">
															<Image
																src={member.image}
																alt={member.name}
																fill
																className="object-cover"
															/>
															<div className="absolute inset-0 bg-gradient-to-t from-[#1a1f2e] via-transparent to-transparent opacity-60"></div>
														</div>
														<div className="p-4">
															<h4 className="text-sm md:text-xl font-medium text-white mb-1">
																{member.name}
															</h4>
															<p className="text-[#e91e63] text-xs md:text-lg mb-2">Advisor</p>
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
					</div>

					{/* Mobile View - Carousel with Horizontal Scroll */}
					<div className="lg:hidden">
						<div
							className="flex transition-transform duration-500 ease-in-out"
							style={{ transform: `translateX(-${currentITTeamIndex * 100}%)` }}
						>
							{[
								{
									members: [
										{
											name: "น้องนก",
											image: "/images/teams/it-consult/ult-ganok.png",
											role: "Product Trainer Specialist (O3)"
										},
										{
											name: "น้องอร",
											image: "/images/teams/it-consult/ult-ora.png",
											role: "Project Manager (O1)"
										},
										{
											name: "น้องโอ๊ต",
											image: "/images/teams/it-consult/ult-wera.png",
											role: "Network Engineer (O1)"
										},
										{
											name: "น้องแคท",
											image: "/images/teams/it-consult/ult-kat.png",
											role: "Document Designer (O1)",
										},
										{
											name: "น้องต้อม",
											image: "/images/teams/it-consult/ult-ratcha.png",
											role: "ERP Specialist (O2)"
										},
										{
											name: "น้องนิก",
											image: "/images/teams/it-consult/ult-chidcha.png",
											role: "IT Security Officer (O2)"
										},
										{
											name: "น้องอาร์ม",
											image: "/images/teams/it-consult/ult-rana.png",
											role: "Document Designer (O1)"
										},
									]
								}
							].map((group, groupIndex) => (
								<div key={groupIndex} className="w-full flex-shrink-0">
									<div className="overflow-x-auto pb-4">
										<div className="flex gap-4 pl-4 after:content-[''] after:pr-1">
											{group.members.map((member, i) => (
												<div key={i} className="flex-shrink-0 w-48">
													<div className="relative rounded-2xl overflow-hidden bg-gradient-to-b from-[#2a2f3e] to-[#1a1f2e] border border-white/10">
														<div className="aspect-[1/1] bg-gradient-to-b from-gray-600 to-gray-700 relative">
															<Image
																src={member.image}
																alt={member.name}
																fill
																className="object-cover"
															/>
															<div className="absolute inset-0 bg-gradient-to-t from-[#1a1f2e] via-transparent to-transparent opacity-60"></div>
														</div>
														<div className="p-4">
															<h4 className="text-sm font-medium text-white mb-1">
																{member.name}
															</h4>
															<p className="text-[#e91e63] text-xs mb-2">Advisor</p>
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
					</div>

					{/* Team Counter with Arrows - Desktop Only */}
					<div className="hidden lg:flex justify-center items-center gap-4 mt-8">
						<button
							onClick={() => setCurrentITTeamIndex(currentITTeamIndex > 0 ? currentITTeamIndex - 1 : 1)}
							className="w-10 h-10 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-300 border border-white/20"
						>
							<svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
							</svg>
						</button>
						<span className="text-gray-400 text-sm">
							{currentITTeamIndex + 1} / 2
						</span>
						<button
							onClick={() => setCurrentITTeamIndex(currentITTeamIndex < 1 ? currentITTeamIndex + 1 : 0)}
							className="w-10 h-10 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-300 border border-white/20"
						>
							<svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
							</svg>
						</button>
					</div>
				</div>
			</section>
		</main>
	)
}
