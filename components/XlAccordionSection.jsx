import { Accordion, AccordionItem } from 'react-sanfona';
import { accordionData as data } from '@/data/data';

export default function XlAccordionSection() {
    return (
        <Accordion className='space-y-4'>
            {[0, 1, 2, 3, 4, 5].map((num) => (
                <AccordionItem
                    key={num}
                    titleClassName='relative text-left w-full px-4 rounded py-4 bg-brandGray-200'
                    title={data[num].title}
                    expandedClassName='rounded border'
                    className='shadow-brand-bottom'
                >
                    <div className='p-4'>
                        <table className='w-full'>
                            <tbody className='text-sm'>
                                {data[num].table.map((d, index) => (
                                    <tr key={d[0]}>
                                        <th className='p-1 text-left'>
                                            {d[0]}
                                        </th>
                                        <td className='p-1 text-left'>
                                            {num === 2 && index === 1 ? (
                                                <InnerTable d={d} />
                                            ) : (
                                                d[1]
                                            )}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </AccordionItem>
            ))}
        </Accordion>
    );
}

function InnerTable({ d }) {
    return (
        <table className='w-full'>
            <tbody>
                {Array.from(d[1]).map((inner) => (
                    <tr key={inner[0]}>
                        <td className='p-1 text-left'>{inner[0]}</td>
                        <td className='p-1 text-left'>{inner[1]}</td>
                        <td className='p-1 text-left'>{inner[2]}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}
