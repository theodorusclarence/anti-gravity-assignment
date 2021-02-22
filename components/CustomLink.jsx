import UnstyledLink from './UnstyledLink';

export default function CustomLink(props) {
    const { className, children, ...rest } = props;
    return (
        <UnstyledLink
            className={`${className} block font-semibold py-2 text-sm text-center transition
            border-2 border-primary-400 
            ${
                props.primary
                    ? 'bg-primary-400 text-white'
                    : 'text-primary-400 hover:bg-primary-400  hover:text-white'
            } 
            `}
            {...rest}
        >
            {children}
        </UnstyledLink>
    );
}
