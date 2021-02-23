import { useState } from 'react';
import { useRouter } from 'next/router';

export default function NavTabs() {
    const [tabOpen, setTabOpen] = useState(1);
    const router = useRouter();

    const list = [
        'overview',
        'tipe',
        'eksterior',
        'interior',
        'spesifikasi',
        'harga',
    ];

    const handleOpen = (num) => {
        setTabOpen(num);
        router.push(`/xl7#${list[num - 1]}`);
    };

    return (
        <div className='fixed z-10 flex flex-col items-center w-full transform -translate-x-1/2 bg-brandGray-200 top-24 left-1/2'>
            <nav className='flex w-full overflow-x-auto'>
                <button
                    style={{ minWidth: '5rem' }}
                    onClick={() => handleOpen(1)}
                    className={`${
                        tabOpen === 1
                            ? 'border-primary-400'
                            : 'text-opacity-40 hover:text-opacity-80 border-brandGray-100'
                    } w-full transition text-primary-400 py-2 text-xs font-semibold  border-b-4 `}
                >
                    Overview
                </button>
                <button
                    style={{ minWidth: '8rem' }}
                    onClick={() => handleOpen(2)}
                    className={`${
                        tabOpen === 2
                            ? 'border-primary-400'
                            : 'text-opacity-40 hover:text-opacity-80 border-brandGray-100'
                    } text-primary-400 w-full transition py-2 text-xs font-semibold  border-b-4 `}
                >
                    Tipe & Warna
                </button>
                <button
                    style={{ minWidth: '5rem' }}
                    onClick={() => handleOpen(3)}
                    className={`${
                        tabOpen === 3
                            ? 'border-primary-400'
                            : 'text-opacity-40 hover:text-opacity-80 border-brandGray-100'
                    } text-primary-400 w-full transition py-2 text-xs font-semibold  border-b-4 `}
                >
                    Eksterior
                </button>
                <button
                    style={{ minWidth: '5rem' }}
                    onClick={() => handleOpen(4)}
                    className={`${
                        tabOpen === 4
                            ? 'border-primary-400'
                            : 'text-opacity-40 hover:text-opacity-80 border-brandGray-100'
                    } text-primary-400 w-full transition py-2 text-xs font-semibold  border-b-4 `}
                >
                    Interior
                </button>
                <button
                    style={{ minWidth: '5rem' }}
                    onClick={() => handleOpen(5)}
                    className={`${
                        tabOpen === 5
                            ? 'border-primary-400'
                            : 'text-opacity-40 hover:text-opacity-80 border-brandGray-100'
                    } text-primary-400 w-full transition py-2 text-xs font-semibold  border-b-4 `}
                >
                    Spesifikasi
                </button>
                <button
                    style={{ minWidth: '5rem' }}
                    onClick={() => handleOpen(6)}
                    className={`${
                        tabOpen === 6
                            ? 'border-primary-400'
                            : 'text-opacity-40 hover:text-opacity-80 border-brandGray-100'
                    } text-primary-400 w-full transition py-2 text-xs font-semibold  border-b-4 `}
                >
                    Harga
                </button>
            </nav>
        </div>
    );
}
