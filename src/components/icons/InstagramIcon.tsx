export const InstagramIcon = (props: React.SVGProps<SVGSVGElement>) => {
    return (
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
            <title>Instagram</title>
            <g fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="2" y="2" width="20" height="20" rx="5" />
                <path d="M16 2H8a6 6 0 0 0-6 6v8a6 6 0 0 0 6 6h8a6 6 0 0 0 6-6V8a6 6 0 0 0-6-6zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8z" />
                <circle cx="18" cy="6" r="1" />
            </g>
        </svg>
    );
};
