'use client'
import { usePathname } from "next/navigation"

export default function Cart(){
    const pathname = usePathname();
    console.log(pathname);
    return (
        <div>
            <h1>This is cart page!</h1>
        </div>
    )
}