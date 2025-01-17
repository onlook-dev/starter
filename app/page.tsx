'use client';

import Image from 'next/image';

export default function Page() {
    return (
        <div className="w-full min-h-screen flex items-center justify-center bg-white dark:bg-black transition-colors duration-200 flex-col p-4 gap-[32px]">
            <div className="text-center text-gray-900 dark:text-gray-100 p-4">
                <h1 className="text-4xl md:text-5xl font-semibold mb-4 tracking-tight">
                    Welcome to your new Onlook website
                </h1>
                <p className="text-xl md:text-2xl text-gray-800 dark:text-gray-300">
                    This is a blank template – Feel free to edit it!
                </p>
            </div>
        </div>
    );
}
