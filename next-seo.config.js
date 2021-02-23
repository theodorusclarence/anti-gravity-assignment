const title = 'Suzuki Hyperlocal 2.0';
const description = 'Made as an assignment for AntiGRVTY Internship';

const SEO = {
    title,
    description,
    canonical: 'https://anti-gravity.theodorusclarence.com/',
    openGraph: {
        type: 'website',
        locale: 'en_IE',
        url: 'https://anti-gravity.theodorusclarence.com/',
        title,
        description,
        images: [
            {
                url:
                    'https://anti-gravity.theodorusclarence.com/image/logo.png',
                alt: title,
                width: 30,
                height: 36,
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
