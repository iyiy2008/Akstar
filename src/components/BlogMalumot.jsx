import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { bolg } from '../../public/data';

const BlogMalumot = () => {
  const { id } = useParams();
  const data = bolg.find(i => i.id === parseInt(id));

  return (
    <>
      <div className='w-full max-w-[1300px] mx-auto px-5 pb-14 mt-7'>
        <Link className='text-lg logo mb-5 inline-block' to={'/ьлог'}>
          Блог вернуться к
        </Link>
        <div className='xl:flex xl:justify-between gap-16'>
          <div className='md:w-[730px] sm:w-[328px] w-full'>
            <div className='mb-7'>
              <h1 className='font-bold leading-normal text-4xl mb-1'>{data.title}</h1>
              <span className='icon'>19 июля 2022</span>
            </div>
            <p className='font-bold text-lg leading-6 mb-7'>{data.title1}</p>
            <img className='w-full md:h-[500px] rounded-xl mb-4' src={data.img} alt="" aria-hidden='false' />
            <p className='font-normal text-base leading-6 mb-4'>{data.naprumir}</p>
            <p className='font-bold text-base leading-6 mb-4'>{data.brit2} <span className='font-normal'>{data.text2}</span> </p>
            <p className='font-normal text-base leading-6'>{data.pirv}</p>
          </div>
          <div className='flex flex-col w-full md:w-[450px]'>
            <h3 className='font-bold text-2xl leading-normal mb-3'>Похожие статьи</h3>
            <ul className='w-full grid gap-7'>
              {bolg.map((e) => {
                return (
                  <li className='show p-4'>
                    <Link className='flex justify-between gap-5' onClick={() => window.scrollTo(0, 0)} to={`/malumotlar/${e.id}`}>
                      <img className='w-[183px] h-[124px] rounded-lg mb-2' src={e.img} alt="" aria-hidden='false' />
                      <div className='flex flex-col'>
                        <p className='grow font-medium text-sm'>{e.title}</p>
                        <div className='flex justify-between items-center icon'>
                          <p>01.07.2023</p>
                          <span><i className="fa-solid fa-eye"></i> 1257</span>
                        </div>
                      </div>
                    </Link>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default BlogMalumot