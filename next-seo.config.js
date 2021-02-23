const title = 'Suzuki Hyperlocal 2.0';
const description = 'Made as an assignment for AntiGRVTY Internship';

const SEO = {
    title,
    description,
    // canonical: 'https://theodorusclarence.com',
    openGraph: {
        type: 'website',
        locale: 'en_IE',
        url: 'https://theodorusclarence.com',
        title,
        description,
        images: [
            {
                url:
                    'https://theodorusclarence.com/favicon/ms-icon-144x144.png',
                alt: title,
                width: 144,
                height: 144,
            },
        ],
    },
};

export default SEO;

// EXAMPLES
{
    /* 
    const title = 'Next.js Tailwind Starter';
    const description = 'your description';
    const url = 'https://theodorusclarence.com';

    <NextSeo
    title={title}
    description={description}
    canonical={url}
    openGraph={{
        url,
        title,
        description,
    }}
/>;  */
}
