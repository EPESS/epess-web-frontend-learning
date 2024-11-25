"use client"

import React, { useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuCheckboxItem,
    DropdownMenuContent,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import useClickOutSide from "@/hooks/click-outside"

type TDropdownMenuCheckboxes = {
    multiple?: boolean,
    label?: string,
    handleOnChange: (value: string | number | null | (string | number | null)[]) => void
    options: TDropdown[] | undefined,
    buttonLabel: React.ReactNode,
    defaultValue?: string | number
}

type TDropdown = {
    label: React.ReactNode,
    value: string | number | null,
    checked?: boolean
}

export const DropdownMenuCheckboxes = ({ options, handleOnChange, buttonLabel, defaultValue, multiple }: TDropdownMenuCheckboxes) => {
    const [value, setValue] = useState<string | number | null>(defaultValue ?? null)
    const [values, setValues] = useState<(string | number | null)[] | null>([])
    const [open, setOpen] = useState(false)
    const buttonRef = useRef<HTMLDivElement>(null)

    const handleClick = (item: TDropdown) => {
        setOpen(true)
        if (multiple) {
            setValues(prev => {
                if (prev) {
                    if (prev.includes(item.value)) {
                        const filterValues = values?.filter((dropdown) => dropdown?.toString() !== item.value?.toString())
                        handleOnChange(filterValues ?? [])
                        return filterValues ?? []
                    }

                    handleOnChange([...prev, item.value])
                    return [...prev, item.value]
                }

                return null
            }
            )
            return;
        }
        setValue(item.value)
        handleOnChange(item.value)
    }

    useClickOutSide(buttonRef, () => {
        setOpen(false)
    })

    return (
        <div ref={buttonRef}>
            <DropdownMenu open={open}>
                <DropdownMenuTrigger onClick={() => setOpen(!open)} asChild>
                    {buttonLabel ? buttonLabel :
                        <Button className="border-black border-2" variant="outline">{buttonLabel}</Button>
                    }
                </DropdownMenuTrigger>
                <DropdownMenuContent side="bottom" className="w-56">
                    <DropdownMenuSeparator />
                    {options?.map((item, index) => (
                        <DropdownMenuCheckboxItem
                            key={index}
                            checked={multiple ? values?.includes(item.value) : value === item.value}
                            onClick={(e) => {
                                e.stopPropagation();
                                handleClick(item)
                            }}
                        >
                            {item.label}
                        </DropdownMenuCheckboxItem>
                    ))}
                </DropdownMenuContent>
            </DropdownMenu>
        </div>
    )
}
