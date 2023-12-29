import React from 'react';

export const InstagramIcon = (props: React.SVGProps<SVGSVGElement>) => {
    return (
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
            <title>Instagram</title>
            <g fill="none" stroke="currentColor" strokeWidth="2">
                <rect width="24" height="24" rx="4" />
                <path d="M16 2H8a6 6 0 0 0-6 6v8a6 6 0 0 0 6 6h8a6 6 0 0 0 6-6V8a6 6 0 0 0-6-6zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8z" />
                <circle cx="12" cy="12" r="3" />
            </g>
        </svg>
    );
};
