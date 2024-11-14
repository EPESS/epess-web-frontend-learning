import React from 'react'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '../ui/tooltip';

type TToolTipCustom = {
    triggerChildren: string,
    content: string,
}

const ToolTipCustom = ({ content, triggerChildren }: TToolTipCustom) => {

    function isURL(str: string) {
        const pattern = /^https:\/\//; 
        const result = pattern.test(str)
        return result
    }

    return (
        <TooltipProvider>
              {/* <div className='bg-gray-200 h-auto'>
                <Button asChild variant={"link"}>
                    <Link target='_blank' href={triggerChildren} >
                        {triggerChildren}
                    </Link>
                </Button>
             
            </div> */}
            <Tooltip>
                <TooltipTrigger>
                    {
                        isURL(triggerChildren) ?
                            <div className='w-[200px] h-auto'>
                                <img className='rounded-lg h-full w-full object-cover' src={triggerChildren} alt='image' />
                            </div>
                            :
                            <p className='border bg-gray-200 rounded-md p-2 w-fit'>{triggerChildren}</p>
                    }

                </TooltipTrigger>
                <TooltipContent className='w-fit'>
                    <span>{new Date(content).toLocaleString("vi-VN")}</span>
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>
    )
}

export default ToolTipCustom 