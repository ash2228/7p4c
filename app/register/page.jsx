"use client"
import { Bebas_Neue } from "next/font/google"
const bebas = Bebas_Neue({ weight: "400", subsets: ["latin"] })

export default function Page() {
    return (
        <>
            <div className={`text-white ${bebas.className}  mt-10 px-5`}>
                <h1 className="text-center flag text-5xl">Register For Audio / Video Discussion</h1>
                <div className="bg-gray-300 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 mx-auto xl:mt-20 flex items-center justify-center xl:w-[500px] py-10 rounded-2xl flex-col gap-5">
                    <input type="text" placeholder="Name" className="backdrop-blur-3xl bg-transparent w-[80%] border px-2 py-4" />
                    <input type="text" placeholder="Age" className="backdrop-blur-3xl bg-transparent w-[80%] border px-2 py-4" />
                    <input type="text" placeholder="Email" className="backdrop-blur-3xl bg-transparent w-[80%] border px-2 py-4" />
                    <input type="text" placeholder="Phone" className="backdrop-blur-3xl bg-transparent w-[80%] border px-2 py-4" />
                    <button className="backdrop-blur-3xl text-4xl px-2 py-4 text-yellow-300 bg-white hover:text-white hover:bg-yellow-300">Submit</button>
                </div>
            </div>
        </>
    )
}
