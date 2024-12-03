"use client"

import React, { AllHTMLAttributes, useState } from 'react'
import Header from './customs/header'
import { SquareChevronDown } from 'lucide-react';

interface TLayoutWrapper extends AllHTMLAttributes<HTMLElement> {

}

const LayoutWrapper = ({ children }: TLayoutWrapper) => {
    const [isHovered, setIsHovered] = useState(false);


    const handleButtonClick = () => {
        setIsHovered(!isHovered)
    }
    return (
        <div>
            <div className="relative">
                <Header
                    className={`absolute z-20 top-0 left-0 right-0 bg-white transition-all duration-300 ease-in-out ${isHovered ? 'block' : 'hidden'}`}
                />
                <div
                    className="absolute z-50 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-3 bg-black text-white rounded-full cursor-pointer"
                    onClick={handleButtonClick} // Khi hover vào nút
                >
                    <SquareChevronDown />
                </div>
            </div>
            <div>{children}</div>
        </div>
    );
};

export default LayoutWrapper