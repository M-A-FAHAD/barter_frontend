'use client'

import { useState } from "react";

export default function About() {
    const EnglishAbout = `Inflation slowly makes your money worth less over time. Banks and wealthy individuals can sometimes use money in ways that don't benefit you. But here's a solution - our easy-to-use web app! You can swap things you have for things you need without worrying about these money problems. It's a fair and simple way to trade with others. Join us to trade smart and avoid the hassles of money-related issues. Say goodbye to traditional transactions and start swapping with us to make your life easier!`;
    const BanglaAbout = `মুদ্রাস্ফীতি ধীরে ধীরে আপনার অর্থকে সময়ের সাথে কম মূল্যবান করে তোলে। ব্যাঙ্ক এবং ধনী ব্যক্তিরা কখনও কখনও এমনভাবে অর্থ ব্যবহার করতে পারে যা আপনার উপকারে আসে না। কিন্তু এখানে একটি সমাধান আছে - আমাদের সহজে ব্যবহারযোগ্য ওয়েব অ্যাপ! আপনি এই অর্থ সমস্যাগুলি নিয়ে চিন্তা না করে আপনার প্রয়োজনীয় জিনিসগুলির জন্য আপনার কাছে থাকা জিনিসগুলি অদলবদল করতে পারেন। এটি অন্যদের সাথে ব্যবসা করার একটি ন্যায্য এবং সহজ উপায়। স্মার্ট ট্রেড করতে এবং অর্থ-সম্পর্কিত সমস্যার ঝামেলা এড়াতে আমাদের সাথে যোগ দিন। ঐতিহ্যগত লেনদেনকে বিদায় জানান এবং আপনার জীবনকে সহজ করতে আমাদের সাথে অদলবদল শুরু করুন!`;

    const [language, setLanguage] = useState('english');

    const detectChange = (e) => {
        setLanguage(e.target.value);
    };

    return (
        <div className="w-full flex justify-center">
            <div className="w-[62rem] lg:w-[100%] lg:pl-2 lg:pr-2">
                <div className="flex justify-between ">
                    <div className="text-[20px] font-bold opacity-[0.8]">About Barter,</div>
                    <div className="w-[6.5rem] bg-white flex flex-col items-center opacity-[0.5]">
                        <select
                            id="language"
                            className="w-full px-3 py-2 border rounded-md focus:outline-none"
                            onChange={detectChange}
                            value={language}
                        >
                            <option value="english">English</option>
                            <option value="bangla">Bangla</option>
                        </select>
                    </div>
                </div>
                <div>
                    {language === 'english' && <p>{EnglishAbout}</p>}
                    {language === 'bangla' && <p>{BanglaAbout}</p>}
                </div>
            </div>
        </div>
    );
}

