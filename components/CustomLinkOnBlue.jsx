import UnstyledLink from './UnstyledLink';

export default function CustomLinkOnBlue(props) {
    const { className, children, ...rest } = props;
    return (
        <UnstyledLink
            className={`${className} block font-semibold py-2 text-sm text-center transition
            border-2 border-white
            ${
                props.primary
                    ? 'bg-white text-primary-400'
                    : 'text-white hover:bg-white  hover:text-primary-400'
            } 
            `}
            {...rest}
        >
            {children}
        </UnstyledLink>
    );
}
