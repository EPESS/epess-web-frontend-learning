'use client'

import { Button } from '@/components/ui/button';
import React, { useState } from 'react'


// props value is ql-header value and array of value is ql-header value
// use ts record to define nameArrays and options

export default function CustomSelect({classValue, nameArrays}: {classValue: string, nameArrays: Record<string, string>}) {
    const [open, setOpen] = useState<boolean>(false);

  return (
    <div>
        <div>
            <Button variant='ghost' onClick={() => setOpen(!open)}>
                Header
            </Button>
        </div>
        {open && (
            <div>
                {Object.entries(nameArrays).map(([key, value]) => (
                    <Button key={key} variant='ghost' className={`px-0 h-6 ${classValue}`} value={key}>
                        {value}
                    </Button>
                ))}
            </div>
        )}
    </div>
  )
}
