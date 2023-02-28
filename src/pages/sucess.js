import { useRouter } from "next/router"
import { motion as m } from "framer-motion"
export default function Sucess() {

    const router = useRouter()
    return (
        

        <m.main initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}} className="h-screen flex items-center justify-center">
            <div className="bg-white rounded-lg w-1/2 text-gray-700 p-16">
                <h1 className="text-3xl pb-4" >Thanks for the Email {router.query.name} </h1>
                <p className="text-lg text-gray-500">We shall get back to you soon</p>
            </div>
        </m.main>
    )
}