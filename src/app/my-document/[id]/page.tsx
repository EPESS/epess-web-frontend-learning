"use client"

import Editor from '@/app/support/components/Editor'
import { useParams } from 'next/navigation'
import React from 'react'

const MyDocumentDetail = () => {

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

    return (
        <div>
            <Editor handleFileEvent={handleFileEvent} documentId={id.toString()} />
        </div>
    )
}

export default MyDocumentDetail