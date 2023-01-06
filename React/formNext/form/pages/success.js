import { useRouter } from "next/router"
import { motion as m } from 'framer-motion'
import Confetti from 'react-confetti'
import { useEffect } from "react"
export default function Success() {
    // const [pieces, setPieces] = (200)
    // const stopConfetti = () => {
    //     setTimeout(() => {
    //         setPieces(0);
    //     }, 3000)
    // };
    // useEffect(() => {
    //     stopConfetti()
    // }, [])
    const routers = useRouter()
    return (
        <m.main
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className=' h-screen flex items-center justify-center absolute w-full'>
            <div className=' bg-white flex flex-col rounded-lg w-1/2 text-gray-700 p-16'>
                <h1 className=" text-3xl pb-4 ">
                    Thanks For Sumbission {routers.query.name}
                </h1>
                <p>
                    We have Sent you Email over at {routers.query.email} and will get back to you...
                </p>
            </div>
            <Confetti gravity={0.2} numberOfPieces={10} />
        </m.main>

    )
}