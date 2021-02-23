import { useState } from 'react';
import Label from './Label';
import Image from 'next/image';
import { carData } from '@/data/data';
import CustomLink from './CustomLink';
import UnstyledLink from './UnstyledLink';

export default function CarTabs() {
    const [tabOpen, setTabOpen] = useState(1);
    return (
        <>
            <nav className='flex'>
                <button
                    onClick={() => setTabOpen(1)}
                    className={`${
                        tabOpen === 1
                            ? 'border-white'
                            : 'text-opacity-40 hover:text-opacity-80'
                    } w-full transition text-white py-2 text-base font-semibold  border-b-4 border-transparent hover:border-brandGray-100`}
                >
                    Passenger Car
                </button>
                <button
                    onClick={() => setTabOpen(2)}
                    className={`${
                        tabOpen === 2
                            ? 'border-white'
                            : 'text-opacity-40 hover:text-opacity-80'
                    } text-white w-full transition py-2 text-base font-semibold  border-b-4 border-transparent hover:border-brandGray-100`}
                >
                    Commercial Car
                </button>
            </nav>
            <main className='flex flex-col bg-white'>
                {tabOpen === 1
                    ? carData
                          .slice(0, 4)
                          .map((data) => (
                              <TabCard key={data.image} data={data} />
                          ))
                    : carData
                          .slice(4, 6)
                          .map((data) => (
                              <TabCard key={data.image} data={data} />
                          ))}

                <CustomLink
                    href='/outlet'
                    className='inline-block px-12 mx-auto mt-8'
                >
                    Lihat Semua Mobil
                </CustomLink>
            </main>
        </>
    );
}

function TabCard({ data }) {
    return (
        <UnstyledLink href='/xl7'>
            <div className='bg-white'>
                <div className='flex mx-2 border-b border-brandGray-100'>
                    <figure className='w-full p-4'>
                        <Image
                            src={`/images/cars/${data.image}.jpg`}
                            alt='cars'
                            width={145}
                            height={93}
                            layout='responsive'
                        />
                    </figure>
                    <div className='flex flex-col items-start justify-center w-full px-4 space-y-1'>
                        <h3>{data.title}</h3>
                        <p className='text-sm italic text-black text-opacity-40'>
                            Mulai dari
                        </p>
                        <p className='font-bold text-primary-400'>
                            {data.price}
                        </p>
                        <Label>Lihat Detail</Label>
                    </div>
                </div>
            </div>
        </UnstyledLink>
    );
}
