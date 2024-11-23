import { Suspense } from "react";
import Loading from "../loading"

export default function ProductLayout({children}){
    return <h1>
           <Suspense fallback={<Loading/>}> {children}</Suspense>
    </h1>
}