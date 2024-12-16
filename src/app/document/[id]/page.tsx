"use client"

import dynamic from 'next/dynamic'
import { useParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'

const Editor = dynamic((() => import("../../support/components/Editor")))

const MyDocumentDetail = () => {
    const [isWindowRender, setIsWindowRender] = useState(false)

    const handleFileEvent = (value: string) => {
        switch (value) {
            case "new": {
                // handleNewFile()
                break;
            }
            case "open": {

                break;
            }
            case "save": {

                break;
            }
            case "export": {

                break;
            }

            default:
                break;
        }
    }


    const params = useParams()

    const { id } = params


    useEffect(() => {
        setIsWindowRender(true)
    }, [])

    if (!isWindowRender) {
        return;
    }

    return (
        <div>
            <Editor handleFileEvent={handleFileEvent} documentId={id?.toString() ?? ''} />
        </div>
    )
}

export default MyDocumentDetail