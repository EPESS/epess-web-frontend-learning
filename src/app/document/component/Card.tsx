'use client'

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuItem, DropdownMenuContent, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { ExternalLinkIcon, MoreHorizontalIcon, PencilIcon, Trash2Icon } from "lucide-react";
import { Input } from "@/components/ui/input";

export default function Card() {
    const [isEditing, setIsEditing] = useState(false);
    const [title, setTitle] = useState("Untitled");

    return (
        <div>
            <div className="flex flex-col bg-slate-200 shadow-sm border w-56 h-64 cursor-pointer">
            </div>
            <div className="flex w-full">
                <div className="flex justify-between w-full">
                    <div>
                        {isEditing ? (
                            <Input
                                type="text"
                                className="bg-white mt-2 px-1 border rounded w-full font-medium text-sm"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                                onKeyDown={(e) => {
                                    if (e.key === 'Enter') {
                                        // TODO: Send update to DB
                                        setIsEditing(false);
                                    }
                                }}
                                autoFocus
                            />
                        ) : (
                            <p className="mt-2 font-medium text-sm truncate">{title}</p>
                        )}
                        <p className="mt-1 text-gray-500 text-xs">Opened Nov 22, 2024</p>
                    </div>
                    <div>
                        {/* dropdown menu for actions */}
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="icon" className="-mt-1 w-8 h-8">
                              <MoreHorizontalIcon className="w-4 h-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent>
                            <DropdownMenuItem onClick={() => setIsEditing(true)}>
                              <PencilIcon className="mr-2 w-4 h-4" />
                              Rename
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                              <Trash2Icon className="mr-2 w-4 h-4" />
                              Delete
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                              <ExternalLinkIcon className="mr-2 w-4 h-4" />
                              Open
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                    </div>
                </div>
            </div>
        </div>
    )
}
