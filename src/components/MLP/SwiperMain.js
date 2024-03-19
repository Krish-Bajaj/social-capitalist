import styled from 'styled-components'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination, Navigation } from 'swiper/modules'

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

// import img1 from '../../assets/flowingImages/img1.jpeg'
import img1 from '../../assets/flowingImages/img1.png'
import img2 from '../../assets/flowingImages/img2.png'
import img3 from '../../assets/flowingImages/img3.png'
import img4 from '../../assets/flowingImages/img4.png'
import img5 from '../../assets/flowingImages/img5.png'
import img6 from '../../assets/flowingImages/img6.png'
import img7 from '../../assets/flowingImages/img7.png'
import img8 from '../../assets/flowingImages/img8.png'
import img9 from '../../assets/flowingImages/img9.png'
import img10 from '../../assets/flowingImages/img10.png'
import img11 from '../../assets/flowingImages/img11.png'
import img12 from '../../assets/flowingImages/img12.png'

// import './styles.css';

export default function SwiperMain() {
	return (
		<>
			<Swiper
				spaceBetween={30}
				centeredSlides={true}
				autoplay={{
					delay: 2250,
					disableOnInteraction: false,
				}}
        speed={2200}
				pagination={{
					clickable: true,
				}}
				navigation={true}
				modules={[Autoplay, Pagination, Navigation]}
				className="mySwiper"
        style={{ textAlign: 'center' }}
			>
				<SwiperSlide>
					<StyledImage src={img1} alt="img" />
				</SwiperSlide>
				<SwiperSlide>
					<StyledImage src={img2} alt="img" />
				</SwiperSlide>
				<SwiperSlide>
					<StyledImage src={img3} alt="img" />
				</SwiperSlide>
				<SwiperSlide>
					<StyledImage src={img4} alt="img" />
				</SwiperSlide>
				<SwiperSlide>
					<StyledImage src={img5} alt="img" />
				</SwiperSlide>
				<SwiperSlide>
					<StyledImage src={img6} alt="img" />
				</SwiperSlide>
				<SwiperSlide>
					<StyledImage src={img7} alt="img" />
				</SwiperSlide>
				<SwiperSlide>
					<StyledImage src={img8} alt="img" />
				</SwiperSlide>
				<SwiperSlide>
					<StyledImage src={img9} alt="img" />
				</SwiperSlide>
				<SwiperSlide>
					<StyledImage src={img10} alt="img" />
				</SwiperSlide>
				<SwiperSlide>
					<StyledImage src={img11} alt="img" />
				</SwiperSlide>
				<SwiperSlide>
					<StyledImage src={img12} alt="img" />
				</SwiperSlide>
			</Swiper>
		</>
	)
}


const StyledImage = styled.img`
	@media (max-width: 768px) {
		width: 320px;
		height: 380px;
	}
`
