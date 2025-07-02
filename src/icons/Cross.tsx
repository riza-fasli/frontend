import React from 'react';

const Cross: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
    return (
        <svg 
            viewBox="0 0 24 24" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg" 
            stroke="#e4dddd" 
            {...props}
        >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
            <g id="SVGRepo_iconCarrier">
                <rect width="24" height="24" fill="white"></rect>
                <path d="M7 17L16.8995 7.10051" stroke="#eedddd" strokeLinecap="round" strokeLinejoin="round"></path>
                <path d="M7 7.00001L16.8995 16.8995" stroke="#eedddd" strokeLinecap="round" strokeLinejoin="round"></path>
            </g>
        </svg>
    );
};

export default Cross;
