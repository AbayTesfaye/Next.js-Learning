'use client'
import { usePathname, useSearchParams } from "next/navigation"

export default function Cart(){
    const pathname = usePathname();
    console.log(pathname);

    const searchParams = useSearchParams();
    console.log(searchParams.get('search'),searchParams.get('randomvalue'));
    return (
        <div>
            <h1>This is cart page!</h1>
        </div>
    )
}