import React from 'react'
import Isaac from '../../assets/isaac.jpg'
import Duro from '../../assets/duro.jpg'
import Rose from '../../assets/rose.jpg'
import { Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react'



import 'swiper/swiper.min.css'
import 'swiper/modules/pagination/pagination.min.css'



const data = [
    {
        avatar: Duro,
        name: "Ezekiel",
        review: " As a senior frontend engineer working with Precious has been a wholehearted privilege, I look forward to working more with her  "
    },
    {
        avatar: Rose,
        name: "Chima",
        review: "She is a lifesaver! I came to her with an important project and a tight turnaround and not only did she come through, she rocked it."
    },
    {
        avatar: Isaac,
        name: "Daniel",
        review: "Extremely good service, easy to approach and relate with. I am satisfied with my decision for choosing Precious"
    },
   
]

const Testimonials = () => {
    return (
        <section id="testimonials">
            <h5>Review from clients</h5>
            <h2>Testimonials</h2>

            <Swiper className="container testimonials__container"   modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}

      pagination={{ clickable: true }} >
                {
                    data.map(({name, review, avatar}, index) =>{
                        return(
                              <SwiperSlide className="testimonial" key={index}>  
                    <div className="client__avatar">
                    <img src={avatar} alt="Dan" />
                    </div>
                    <h5 className="client__name">{name}</h5>
                    <small className="client__review">{ review}</small>
                </SwiperSlide>
                        )
                    })
                }
               
            </Swiper>
        </section>
    )
}

export default Testimonials
