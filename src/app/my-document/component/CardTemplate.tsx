import React from 'react'

export default function CardTemplate() {
    return (
        <div>
            <div className="flex flex-col bg-slate-200 shadow-sm border w-40 h-52 cursor-pointer">
            </div>
            <p className="mt-2 font-medium text-sm truncate">Business Letter</p>
            <p className="mt-1 text-gray-500 text-xs">Opened Nov 22, 2024</p>
        </div>
    )
}
