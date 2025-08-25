"use client";

export function EmailForm () {
    return (
        <form className="flex mt-4 gap-2 pt-2">
            <input
                type="email"
                placeholder="Email"
                className="p-4 focus:outline-none border-2 border-gray-300 rounded-md w-120 bg-black/40"
            />
            <button className="bg-red-600 text-white p-4 rounded-md font-extrabold hover:bg-red-700">
                Vamos lá &gt;
            </button>
        </form>
    )
}