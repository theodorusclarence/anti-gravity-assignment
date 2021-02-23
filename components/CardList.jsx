import { FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa';
import CustomLink from './CustomLink';
import Label from './Label';
import UnstyledLink from './UnstyledLink';
import { infoData, outletData } from '@/data/data';

export default function CardList({ type }) {
    return (
        <ul className='space-y-6'>
            {type === 'outlet'
                ? outletData.map((data) => (
                      <li key={data.image}>{<OutletCard data={data} />}</li>
                  ))
                : infoData.map((data) => (
                      <li key={data.image}>{<InfoCard data={data} />}</li>
                  ))}
        </ul>
    );
}

function OutletCard({ data }) {
    return (
        <UnstyledLink href='/outlet'>
            <figure className='overflow-hidden bg-white rounded-lg shadow-md group'>
                <img
                    className='w-full'
                    src={`/images/card/${data.image}.jpg`}
                    alt='Foto Tempat'
                />
                <figcaption className='p-4 space-y-2'>
                    <Label>{data.label}</Label>
                    <h3 className='tracking-wide uppercase transition group-hover:text-primary-400'>
                        {data.title}
                    </h3>
                    <p className='mt-4 font-medium text-brandGray'>
                        <FaPhoneAlt className='inline-block mr-2 text-base' />
                        <span>{data.phone}</span>
                    </p>
                    <p className='font-medium text-brandGray'>
                        <FaMapMarkerAlt className='inline-block mr-2 text-base' />
                        <span>{data.address}</span>
                    </p>
                    <CustomLink href='/outlet'>
                        Kunjungi Website Outlet
                    </CustomLink>
                </figcaption>
            </figure>
        </UnstyledLink>
    );
}

function InfoCard({ data }) {
    return (
        <UnstyledLink href='#'>
            <figure className='overflow-hidden bg-white rounded-lg shadow-md group'>
                <img
                    className='w-full'
                    src={`/images/card/i${data.image}.jpg`}
                    alt='Foto Informasi'
                />
                <figcaption className='p-4 space-y-2'>
                    <p className='font-medium text-brandGray'>{data.date}</p>
                    <h3 className='transition group-hover:text-primary-400'>
                        {data.title}
                    </h3>
                </figcaption>
            </figure>
        </UnstyledLink>
    );
}
