"use client"

import React, { AllHTMLAttributes, useEffect, useRef, useState } from 'react'
import Header from './customs/header'
import { SquareChevronDown } from 'lucide-react';

interface TLayoutWrapper extends AllHTMLAttributes<HTMLElement> {

}

const LayoutWrapper = ({ children }: TLayoutWrapper) => {
    const [isHovered, setIsHovered] = useState(false);
    const wrapperRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            if (wrapperRef.current) {
                const headerElement = wrapperRef.current;
                if (headerElement) {
                    const headerRect = headerElement.getBoundingClientRect();
                    // Kiểm tra nếu chuột nằm trong vùng h-16 (chiều cao của Header)
                    if (
                        e.clientY >= headerRect.top &&
                        e.clientY <= headerRect.top + 64 // h-16 tương ứng với chiều cao 64px
                    ) {
                        setIsHovered(true);
                    } else {
                        setIsHovered(false);
                    }
                }
            }
        };

        document.addEventListener('mousemove', handleMouseMove);

        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return (
        <div ref={wrapperRef}>
            <div className="relative">
                <Header
                    className={`absolute z-[51] top-0 left-0 right-0 bg-white transition-opacity duration-300 ease-in-out ${isHovered ? 'opacity-100' : 'opacity-0'}`}
                />
                <div
                    className="absolute z-50 mt-2 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-4 rounded-full cursor-pointer"
                >
                    <SquareChevronDown />
                </div>
            </div>
            <div>{children}</div>
        </div>
    );
};

export default LayoutWrapper