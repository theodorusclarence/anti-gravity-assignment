import CustomLink from './CustomLink';

export default function Modal({ showModal, setShowModal }) {
    return (
        <>
            <div
                className={`
                ${
                    showModal
                        ? 'opacity-100 translate-y-0'
                        : 'opacity-0 -translate-y-8 '
                } 
                pointer-events-none transition-all
                transform fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none`}
            >
                <div
                    style={{ width: '25rem' }}
                    className={`relative mx-auto my-6 ${
                        showModal && 'pointer-events-auto'
                    }`}
                >
                    {/*content*/}
                    <div className='relative flex flex-col w-full bg-white border-0 rounded shadow-lg outline-none focus:outline-none'>
                        {/*header*/}
                        <div className='flex items-center justify-between p-5 border-b border-gray-300 border-solid rounded-t'>
                            <h3 className='text-xl font-semibold'>
                                Booking Mobil
                            </h3>
                            <button
                                className='p-1 text-xl font-semibold text-black'
                                onClick={() => setShowModal(false)}
                            >
                                <span className='w-5 h-5'>×</span>
                            </button>
                        </div>
                        {/*body*/}
                        <div className='relative flex-auto p-4'>
                            <form className='text-sm'>
                                <div className='mt-4'>
                                    <label htmlFor='nama'>Nama Lengkap</label>
                                    <input
                                        className='w-full px-2 py-2 mt-2 transition border rounded focus:ring-2 ring-blue-400 ring-opacity-60 focus:outline-none'
                                        type='text'
                                        name='nama'
                                    />
                                </div>
                                <div className='mt-4'>
                                    <label htmlFor='email'>Email</label>
                                    <input
                                        className='w-full px-2 py-2 mt-2 transition border rounded focus:ring-2 ring-blue-400 ring-opacity-60 focus:outline-none'
                                        type='email'
                                        name='email'
                                    />
                                </div>
                                <div className='mt-4'>
                                    <label htmlFor='no'>No. Handphone</label>
                                    <input
                                        className='w-full px-2 py-2 mt-2 transition border rounded focus:ring-2 ring-blue-400 ring-opacity-60 focus:outline-none'
                                        type='text'
                                        name='no'
                                    />
                                </div>
                                <div className='flex mt-4'>
                                    <div className='w-full mr-4'>
                                        <label htmlFor='mobil'>Mobil</label>
                                        <select
                                            className='p-2 border rounded focus:ring-2 ring-blue-400 ring-opacity-60 focus:outline-none'
                                            name='mobil'
                                            id='mobil'
                                        >
                                            <option value='XL 7'>XL 7</option>
                                            <option value='Ertiga'>
                                                Ertiga
                                            </option>
                                            <option value='All New Ertiga Sport'>
                                                All New Ertiga Sport
                                            </option>
                                            <option value='New Ignis'>
                                                New Ignis
                                            </option>
                                            <option value='Karimun'>
                                                Karimun
                                            </option>
                                        </select>
                                    </div>
                                    <div className='w-full'>
                                        <label htmlFor='tipe'>Tipe</label>
                                        <select
                                            className='w-full p-2 border rounded focus:ring-2 ring-blue-400 ring-opacity-60 focus:outline-none'
                                            name='tipe'
                                            id='tipe'
                                        >
                                            <option value='ZETA M/T'>
                                                ZETA M/T
                                            </option>
                                            <option value='ZETA A/T'>
                                                ZETA A/T
                                            </option>
                                            <option value='BETA A/T'>
                                                BETA A/T
                                            </option>
                                            <option value='BETA M/T'>
                                                BETA M/T
                                            </option>
                                            <option value='ALPHA M/T'>
                                                ALPHA M/T
                                            </option>
                                            <option value='ALPHA A/T'>
                                                ALPHA A/T
                                            </option>
                                        </select>
                                    </div>
                                </div>
                            </form>
                        </div>
                        {/*footer*/}
                        <div className='flex items-center p-6 border-t border-gray-300 border-solid rounded-b'>
                            <CustomLink
                                style={{ borderWidth: 0 }}
                                className='block w-full mr-4 cursor-pointer'
                                onClick={() => setShowModal(false)}
                            >
                                Batal
                            </CustomLink>
                            <CustomLink
                                style={{ borderWidth: 0 }}
                                className='block w-full cursor-pointer'
                                primary
                            >
                                Kirim
                            </CustomLink>
                        </div>
                    </div>
                </div>
            </div>
            <div
                className={`${
                    showModal ? 'opacity-25' : '  pointer-events-none opacity-0'
                } fixed inset-0 z-40 bg-black cursor-pointer `}
                onClick={() => setShowModal(false)}
            ></div>
        </>
    );
}
