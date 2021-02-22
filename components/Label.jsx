export default function Label({ children }) {
    return (
        <div style={{fontSize: '0.6875rem'}} className='inline-block py-1 px-2 border rounded bg-primary-200 text-primary-300 border-primary-300'>
            {children}
        </div>
    );
}
