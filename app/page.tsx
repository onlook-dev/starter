'use client';

import Image from 'next/image';

export default function Page() {
    return (
        <div
            className="w-full min-h-screen flex items-center justify-center bg-white dark:bg-black transition-colors duration-200 flex-col p-4 gap-[32px]"
            data-oid="gteaxgo"
        >
            <div className="text-center text-gray-900 dark:text-gray-100 p-4" data-oid=".3t72ks">
                <h1
                    className="text-4xl md:text-5xl font-semibold mb-4 tracking-tight"
                    data-oid="c2zlg3c"
                >
                    Welcome to your app
                </h1>
                <p
                    className="text-xl md:text-2xl text-gray-800 dark:text-gray-300"
                    data-oid="5phfeih"
                >
                    This is a blank template React App
                </p>
            </div>
            <div
                className="w-full max-w-[1065px] flex gap-4 md:gap-5 p-4 md:p-6 text-red-500 flex-col border border-red-300 border-dashed"
                data-oid="jsr:cg6"
            >
                <p className="dark:text-red-400" data-oid="c_6rdli">
                    You can delete this parent container to start from a blank page
                </p>

                <div className="flex flex-col md:flex-row gap-4 md:gap-5 w-full" data-oid="s4aghe9">
                    <div
                        className="w-full p-4 md:p-8 bg-gray-100 dark:bg-gray-800 flex items-center flex-col gap-4 md:gap-6 transition-colors duration-200 rounded-[16px]"
                        data-oid="0pwg.m."
                    >
                        <div
                            className="w-fit inline-flex items-center px-1.5 py-0.5 bg-purple-50 dark:bg-purple-900/50 border border-purple-300 dark:border-purple-700 rounded-full"
                            data-oid="aezdslu"
                        >
                            <p
                                className="text-purple-600 dark:text-purple-300 text-xs font-medium uppercase text-center"
                                data-oid="v8697bg"
                            >
                                AI Chat
                            </p>
                        </div>
                        <p
                            className="text-gray-800 dark:text-gray-300 text-xl md:text-2xl text-center"
                            data-oid="fshzjk8"
                        >
                            Select an element and ask AI to build something with it
                        </p>
                        <div
                            className="relative w-full h-[450px] rounded-lg overflow-hidden"
                            data-oid="2cx5m.7"
                        >
                            <Image
                                src="/images/chat.jpg"
                                alt="AI Chat"
                                fill
                                className="object-cover transition-opacity duration-200"
                                priority
                                data-oid="hs_mvz_"
                            />
                        </div>
                    </div>
                    <div
                        className="w-full p-4 md:p-8 bg-gray-100 dark:bg-gray-800 flex items-center flex-col gap-4 md:gap-6 transition-colors duration-200 rounded-[16px]"
                        data-oid="829vkv9"
                    >
                        <div
                            className="w-fit inline-flex items-center px-1.5 py-0.5 bg-green-50 dark:bg-green-900/50 border border-green-300 dark:border-green-700 rounded-full"
                            data-oid="3k2pm:3"
                        >
                            <p
                                className="text-green-600 dark:text-green-300 text-xs font-medium uppercase text-center"
                                data-oid="3vs-o6p"
                            >
                                Code Link
                            </p>
                        </div>
                        <p
                            className="text-gray-800 dark:text-gray-300 text-xl md:text-2xl text-center"
                            data-oid=".p5p-ga"
                        >
                            Select and Right-Click to view the code of any element on your page
                        </p>
                        <div
                            className="relative w-full h-[450px] rounded-lg overflow-hidden"
                            data-oid="i1ndeoa"
                        >
                            <Image
                                src="/images/right-click.jpg"
                                alt="Code Link"
                                fill
                                className="object-cover transition-opacity duration-200"
                                priority
                                data-oid="c1_498k"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
