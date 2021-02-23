import { useEffect, useState } from 'react';
import Image from 'next/image';

export default function XlTabs() {
    const [tabOpen, setTabOpen] = useState(1);
    const [color, setColor] = useState(1);

    // Set color to the first one when changing tabs
    useEffect(() => {
        setColor(1);
    }, [tabOpen]);

    return (
        <div className='flex flex-col items-center space-y-4'>
            <h3 className='tracking-wide'>TIPE & WARNA</h3>
            <nav className='flex w-80'>
                <button
                    onClick={() => setTabOpen(1)}
                    className={`${
                        tabOpen === 1
                            ? 'border-primary-400'
                            : 'text-opacity-40 hover:text-opacity-80 border-brandGray-100'
                    } w-full transition text-primary-400 py-2 text-sm font-semibold  border-b-4 `}
                >
                    XL 7 Alpha
                </button>
                <button
                    onClick={() => setTabOpen(2)}
                    className={`${
                        tabOpen === 2
                            ? 'border-primary-400'
                            : 'text-opacity-40 hover:text-opacity-80 border-brandGray-100'
                    } text-primary-400 w-full transition py-2 text-sm font-semibold  border-b-4 `}
                >
                    XL 7 Beta
                </button>
                <button
                    onClick={() => setTabOpen(3)}
                    className={`${
                        tabOpen === 3
                            ? 'border-primary-400'
                            : 'text-opacity-40 hover:text-opacity-80 border-brandGray-100'
                    } text-primary-400 w-full transition py-2 text-sm font-semibold  border-b-4 `}
                >
                    XL 7 Zeta
                </button>
            </nav>
            <figure className='w-96'>
                <Image
                    src={`/images/xl/colors/xl7-${tabOpen}-${color}.png`}
                    alt='Car Type'
                    width={620}
                    height={348}
                    layout='responsive'
                    priority={true}
                />
                <p className='text-sm font-semibold text-center uppercase'>
                    {colorList[tabOpen - 1].title[color - 1]}
                </p>
                <div className='flex justify-center mt-4 space-x-2'>
                    {colorList[tabOpen - 1].colors.map((c, index) => (
                        <button
                            onClick={() => setColor(index + 1)}
                            style={{ backgroundColor: c }}
                            className={`w-8 h-8 border-4 transition rounded-full shadow-lg ${
                                color - 1 === index
                                    ? 'border-primary-400'
                                    : 'border-white'
                            } `}
                        />
                    ))}
                </div>
            </figure>
        </div>
    );
}

const colorList = [
    {
        colors: ['#c04c3c', '#ae923d', '#000', '#fff'],
        title: [
            'Rising Orange + Black',
            'Brave Khaki + Black',
            'Prime Cool Black',
            'Prime Snow White',
        ],
    },
    {
        colors: ['#534050', '#797979', '#fff', '#000'],
        title: [
            'Pearl Burgundy Red',
            'Metalic Magma Grey',
            'Prime Snow White',
            'Prime Cool Black',
        ],
    },
    {
        colors: ['#fff', '#000', '#797979', '#534050'],
        title: [
            'Prime Snow White',
            'Prime Cool Black',
            'Metalic Magma Grey',
            'Pearl Burgundy Red',
        ],
    },
];
