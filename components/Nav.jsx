import { useState } from 'react';
import { FiPhone } from 'react-icons/fi';
import CustomLink from './CustomLink';
import UnstyledLink from './UnstyledLink';
import NavTabs from './NavTabs';
import { useRouter } from 'next/router';
import Modal from './Modal';

const route = [
    'Beranda',
    'Tentang Kami',
    'Mobil',
    'Service',
    'Sparepart',
    'Hubungi Kami',
];

export default function Nav({ children }) {
    const [open, setOpen] = useState(false);
    const [showModal, setShowModal] = useState(false);

    const { pathname } = useRouter();

    const openModal = () => {
        setShowModal(true);
    };

    return (
        <>
            <header
                className={`fixed top-0 z-10 flex items-center justify-between w-full h-12 px-4 py-8 bg-white shadow-md transition transform 
                ${open ? '-translate-x-80' : 'translate-x-0'}`}
            >
                <UnstyledLink href='/'>
                    <div className='flex items-center space-x-4'>
                        <img src='/images/logo.png' alt='logo' />
                        <div>
                            <p className='text-xs font-bold'>
                                {pathname === '/'
                                    ? 'PT. Nusantara Jaya Sentosa'
                                    : 'Suzuki NJS Buah Batu'}
                            </p>
                            <p className='text-xs'>
                                {pathname === '/'
                                    ? 'Main Dealer Suzuki Jawa Barat'
                                    : 'PT. Nusantara Jaya Sentosa'}
                            </p>
                        </div>
                    </div>
                </UnstyledLink>
            </header>

            {/* //* Nav Tabs for XL7 */}
            {pathname === '/xl7' ? (
                <>
                    <div className='fixed z-10 w-full px-4 py-2 top-16 bg-brandGray-200 layout'>
                        <h3 className='text-sm'>XL 7</h3>
                    </div>
                    <NavTabs />
                </>
            ) : null}

            <div
                className={`transition transform 
                ${open ? '-translate-x-80' : 'translate-x-0'}`}
            >
                <div>{children}</div>
            </div>
            <div
                className={`pointer-events-none fixed z-20 inset-0 bg-black transition ${
                    open ? 'bg-opacity-40' : 'bg-opacity-0'
                }`}
            ></div>

            {/*//* Bottom Navbar */}
            {(pathname === '/outlet' || pathname === '/xl7') && (
                <aside className='fixed flex justify-center px-4 transform -translate-x-1/2 bg-white rounded-lg shadow bottom-2 left-1/2 layout'>
                    {pathname === '/outlet' ? (
                        <>
                            <UnstyledLink href='/outlet'>
                                <img
                                    src='/images/outlet/float1.jpg'
                                    alt='Menu'
                                />
                            </UnstyledLink>
                            <UnstyledLink href='/outlet'>
                                <img
                                    src='/images/outlet/float2.jpg'
                                    alt='Menu'
                                />
                            </UnstyledLink>
                            <UnstyledLink href='/outlet'>
                                <img
                                    src='/images/outlet/float3.jpg'
                                    alt='Menu'
                                />
                            </UnstyledLink>
                            <UnstyledLink href='/outlet'>
                                <img
                                    src='/images/outlet/float4.jpg'
                                    alt='Menu'
                                />
                            </UnstyledLink>
                        </>
                    ) : (
                        <>
                            <button
                                onClick={openModal}
                                className='self-center block px-12 py-4 mr-4 text-sm font-semibold text-white bg-primary-400'
                            >
                                Booking Mobil
                            </button>
                            <UnstyledLink href='/xl7'>
                                <img
                                    src='/images/outlet/float1.jpg'
                                    alt='Menu'
                                />
                            </UnstyledLink>
                            <UnstyledLink href='/xl7'>
                                <img
                                    src='/images/outlet/float4.jpg'
                                    alt='Menu'
                                />
                            </UnstyledLink>
                        </>
                    )}
                </aside>
            )}

            {/*//* Nav Sidebar */}
            <aside
                className={`fixed z-20 top-0 right-0 flex flex-col justify-between h-full px-6 bg-white pt-14 w-80 transition-transform transform 
                ${open ? 'translate-x-0' : 'translate-x-80'}
                `}
            >
                <div>
                    <nav className='pb-4 border-b border-brandGray-100'>
                        <ul className='space-y-3'>
                            {route.map((data) => (
                                <li key={data}>
                                    <h3 className='text-lg font-semibold'>
                                        <UnstyledLink
                                            className='block transition hover:text-primary-400'
                                            href='/'
                                        >
                                            {data}
                                        </UnstyledLink>
                                    </h3>
                                </li>
                            ))}
                        </ul>
                    </nav>
                    <CustomLink
                        primary
                        className='w-full mx-auto mt-6 text-base'
                        href='/'
                    >
                        <FiPhone className='inline-block mr-2 text-xl' />
                        <span>(022) 5204645</span>
                    </CustomLink>
                    <figure className='flex items-center mt-8 space-x-4'>
                        <img
                            className='w-20'
                            src='/images/footer/1.png'
                            alt='Halo Suzuki'
                        />
                        <img
                            className='w-44'
                            src='/images/footer/2.png'
                            alt='My Suzuki'
                        />
                    </figure>
                </div>
                <div className='mb-8'>
                    <p>© 2020 Suzuki Indonesia.</p>
                    <p>All rights reserved. </p>
                </div>
            </aside>
            <button
                onClick={() => setOpen((prev) => !prev)}
                className='fixed z-30 flex items-center justify-center w-10 h-10 rounded-full bg-primary-400 right-3 top-3'
            >
                <span className={`bg-white ${open ? 'active' : ''}`} />
                <style jsx>{`
                    span,
                    span::before,
                    span::after {
                        transition: all cubic-bezier(0.39, 0.575, 0.565, 1)
                            250ms;
                    }
                    span {
                        height: 2px;
                        width: 1.5rem;
                        position: relative;
                    }
                    span::before,
                    span::after {
                        content: '';
                        width: 1.5rem;
                        height: 2px;
                        background: white;
                        position: absolute;
                        left: 0;
                    }
                    span::before {
                        top: -5px;
                    }
                    span::after {
                        bottom: -5px;
                    }
                    span.active {
                        background-color: transparent;
                    }
                    span.active::before {
                        top: 0;
                        transform: rotate(-45deg);
                    }
                    span.active::after {
                        bottom: 0;
                        transform: rotate(45deg);
                    }
                `}</style>
            </button>
            <Modal showModal={showModal} setShowModal={setShowModal} />
        </>
    );
}
