import React, { useState } from 'react'
import Layout from '../components/layout'

import SEO from '../components/SEO'
import Carousel, {Dots} from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import '../assets/scss/components/_testimonials.scss'

const Testimonial = ({img, name, position, text}) => <div className="testimonial">
  <div className="testimonial__top">
    <div className="testimonial__image"></div>
    <div  className="testimonial__top__description">
      <div  className="testimonial__name">{name}</div>
      <div className="testimonial__position">{position}</div>
    </div>
  </div>
  <div className="testimonial__body">
    <span className="testimonial__body__quote testimonial__body__quote-start">&ldquo;</span>
    <div className="testimonial__body__content">{text}</div>
    <span className="testimonial__body__quote testimonial__body__quote-end">&rdquo;</span>
  </div>
</div>


const Opinions = (props) => {
  const [opinionIndex, setOpinionIndex] = useState(0)
  return (
    <Layout>
      <SEO/>

      <div id="main" className="alt">
        <section id="one">
          <div className="inner" style={{ margin: 'auto', marginTop: '0em', paddingTop: '0em' }}>
            <header className="major align-center" style={{ margin: 'auto', marginTop: '0em', paddingTop: '0em' }}>
              <h1>Rekomendacje</h1>
            </header>
          </div>
        </section>
        <Carousel
          // autoPlay={2500}
          stopAutoPlayOnHover
          clickToChange
          infinite
          arrows
          slidesPerPage={2}
          onChange={setOpinionIndex}
          breakpoints={{
            900: {
              slidesPerPage: 1,
            }
          }}
        >
          {testimonials.map(testimonial => <Testimonial {...testimonial}/>)}
        </Carousel>
        {/*<Dots value={opinionIndex} onChange={setOpinionIndex} number={testimonials.length} />*/}

      </div>
    </Layout>
  )
}

const testimonials = [
  {
    name: 'Natalia Pochroń',
    position: <i><strong>Stomatolog</strong>, Nowy Dwór Mazowiecki</i>,
    text: <p>To, co go wyróżnia to doświadczenie i profesjonalizm. 
    Łatwo zauważyć, że doskonale zna język angielski i potrafi to przekazywać z wielką energią.</p>,
  },
  {
    name: 'Mateusz Skórka',
    position: <i>Bychawa</i>,
    text: <p>I truly recommend distance learning with Ray.</p>,
  },
  {
    name: 'Małgorzata Grygiel',
    position: <i>Lublin</i>,
    text: <p>Cenię go za cierpliwość i umiejętność dostosowania się do wszystkich uczniów. Jest bardzo otwarty na potrzeby ucznia potrafi 
    aktywnie słuchać.</p>,
  },
]

export default Opinions
