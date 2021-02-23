import UnstyledLink from './UnstyledLink';
import CustomLink from './CustomLink';
import { FiMapPin, FiPhone } from 'react-icons/fi';

const route = ['Beranda', 'Tentang Kami', 'Outlet', 'Blog', 'Promo'];

export default function Footer() {
    return (
        <footer className='bg-white'>
            <nav className='p-8 layout'>
                <ul className='flex justify-around text-sm font-medium'>
                    {route.map((data) => (
                        <li key={data}>
                            <UnstyledLink
                                className='transition hover:text-primary-400'
                                href='#'
                            >
                                {data}
                            </UnstyledLink>
                        </li>
                    ))}
                </ul>
            </nav>
            <div className='px-0 py-8 text-center border-t border-b border-brandGray-100 layout'>
                <h3 className='font-bold tracking-wide uppercase'>alamat</h3>
                <p className='mt-1 text-sm font-bold tracking-wide'>
                    SUZUKI Nusantara Jaya Sentosa
                </p>
                <p className='text-sm'>
                    Jl. Soekarno - Hatta no. 289, Bojongloa Kidul Bandung 40234
                </p>
                <CustomLink className='mx-auto mt-4 w-52' href='/'>
                    <FiMapPin className='inline-block mr-2 text-lg' />
                    <span>CEK GOOGLE MAPS</span>
                </CustomLink>
                <CustomLink primary className='mx-auto mt-3 w-52' href='/'>
                    <FiPhone className='inline-block mr-2 text-lg' />
                    <span>(022) 5204645</span>
                </CustomLink>
            </div>
            <div className='flex flex-col items-center px-0 py-8 layout'>
                <h3 className='font-bold tracking-wide'>
                    HOTLINE 24 JAM (Bebas Pulsa)
                </h3>
                <img
                    className='mt-4'
                    src='/images/footer/1.png'
                    alt='Halo Suzuki'
                />
                <h3 className='mt-12 font-bold tracking-wide uppercase'>
                    Download My Suzuki
                </h3>
                <img
                    className='mt-4'
                    src='/images/footer/2.png'
                    alt='My Suzuki'
                />
                <img className='mt-4' src='/images/footer/3.png' alt='Ecstar' />
            </div>
            <div className='p-8 text-sm text-center text-white bg-primary-400'>
                <p>© 2020 Suzuki Indonesia.</p>
                <p>All rights reserved. </p>
            </div>
        </footer>
    );
}
