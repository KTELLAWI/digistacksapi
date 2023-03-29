import Image from 'next/image'
import Link from 'next/link'
import LargeHeading from '@/components/ui/LargeHeading'
import Paragraph from '@/components/ui/Paragraph'

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Digistacks API | Home',
  description: 'Free & open-source text similarity API',
}

export default function Home() {
  return (
    <div className='relative h-screen flex items-center justify-center overflow-x-hidden'>
      <div className='container pt-32 max-w-7xl w-full mx-auto h-full'>
        <div dir ='rtl' className='h-full gap-6 flex flex-col justify-start lg:justify-center items-center lg:items-start'>
        <div className='relative w-full max-w-3xl lg:max-w-7xl lg:right-1/2 aspect-square lg:absolute'>
            <Image
              priority
              className='img-shadow '
              quality={50}
              style={{ objectFit: 'contain' }}
              fill
              src='/typewriter.png'
              alt='typewriter'
            />
          </div>
          <LargeHeading
          dir='rtl'
            size='lg'
            className='three-d text-black dark:text-white'>
            {/* Easily determine <br /> text similarity. <br /> */}
          {/* <span> */}
                  تحديد تشابه النص بسهولة
          {/* </span> */}
              
          </LargeHeading>

          <Paragraph dir ='rtl' className='max-w-xl lg:text-left'>
            يمكنك بسهولة تحديد التشابه بين قطعتين من النص باستخدام API مجاني
          {' '}
            <Link
              href='/login'
              className='underline underline-offset-2 text-black dark:text-light-gold'>
              API key
            </Link>
            .
          </Paragraph>

         
        </div>
      </div>
    </div>
  )
}
