import React from 'react'
import styled from 'styled-components'

import { useCarousel } from '@dailykit/ui'

export default {
   title: 'Carousel'
}

const images = [
   {
      url:
         'https://images.unsplash.com/photo-1595853119997-1fcb58fb29b8?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=246&ixlib=rb-1.2.1&q=80&w=429'
   },
   {
      url:
         'https://images.unsplash.com/photo-1594830877931-28a20abe4bba?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=246&ixlib=rb-1.2.1&q=80&w=429'
   },
   {
      url:
         'https://images.unsplash.com/photo-1595759534036-33a009e4bb10?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=246&ixlib=rb-1.2.1&q=80&w=429'
   },
   {
      url:
         'https://images.unsplash.com/photo-1594553695746-f88da7177bd1?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=246&ixlib=rb-1.2.1&q=80&w=429'
   },
   {
      url:
         'https://images.unsplash.com/photo-1595522099069-f00adb3d44bc?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=246&ixlib=rb-1.2.1&q=80&w=429'
   },
   {
      url:
         'https://images.unsplash.com/photo-1595795368372-3bfe63a6242a?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=246&ixlib=rb-1.2.1&q=80&w=429'
   }
]

export const ImageCarousel = () => {
   /**
    * @param [string | {} | number] images - array of anything with valid length.
    */
   const { current, setActive, next, previous } = useCarousel(images)

   return (
      <div style={{ width: '50%', marginLeft: '2rem' }}>
         <Wrapper>
            <NextButton right onClick={next}>
               {'>'}
            </NextButton>
            <img
               src={images[current]?.url}
               alt='product'
               width='100%'
               height='437px'
            />
            <PreviousButton left onClick={previous}>
               {'<'}
            </PreviousButton>
         </Wrapper>

         <Images>
            {images.map((img, index) => {
               return (
                  <Image
                     key={img.url}
                     active={index === current}
                     src={img.url}
                     alt='small product'
                     onClick={() => setActive(index)}
                  />
               )
            })}
         </Images>
      </div>
   )
}

const Images = styled.div`
   margin: 2rem 0;
   display: flex;
   flex-wrap: wrap;
   width: 90%;
`
const Image = styled.img`
   width: 4rem;
   height: 4rem;
   margin-right: 1rem;
   padding: 4px;
   border: ${({ active }) => (active ? `2px solid #02463a` : 0)};
   cursor: pointer;
`

const Wrapper = styled.div`
   position: relative;
`

const ButtonBase = styled.button`
   background: rgba(0, 0, 0, 0.7);
   color: #fff;
   font-size: 3rem;
   border: 0;
   padding: 1rem;
   cursor: pointer;

   border-radius: 4px;
   position: absolute;
`
const NextButton = styled(ButtonBase)`
   right: 0;
   top: 40%;
   margin-right: -15px;
`
const PreviousButton = styled(ButtonBase)`
   left: 0;
   top: 40%;
   margin-left: -15px;
`
