'use client'

import { useState } from "react";

export default function About() {
    const EnglishAbout = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam aliquid, natus eveniet assumenda rem inventore eum possimus explicabo tempore quam! Nesciunt, sint temporibus ab alias id, facilis fuga laudantium inventore ducimus voluptatem voluptas odit commodi quis consectetur eius esse omnis aspernatur dolorum ratione, minima deleniti in saepe. Explicabo ratione, facere et perspiciatis magnam eveniet distinctio sint doloremque quas quis, aperiam molestias, illum quos aliquam? Laborum ullam consequuntur voluptate corrupti? Vitae fuga sequi quisquam minus necessitatibus labore, sed hic aspernatur. Voluptatum deserunt perspiciatis quasi consequatur. Ipsam accusamus similique consequatur tenetur, sequi placeat labore molestiae molestias dolorem tempora sunt, nisi, unde repellat?`;
    const BanglaAbout = `RealLife English-এ সবার জন্য কিছু না কিছু আছে। এটি শিক্ষানবিস, মধ্যবর্তী এবং উন্নত ইংরেজি শিক্ষার্থীদের জন্য উপযুক্ত।
    RealLife English আপনাকে ভিডিও, পড়কাস্ট এবং ব্লগের মাধ্যমে আপনার শেখার উপর সম্পূর্ণ নিয়ন্ত্রণ দেয়। ব্লগ বিভাগটি ব্যাপক (অনেক কভার করে)। এটি পাঠ এবং সাংস্কৃতিক অন্তর্দৃষ্টি চিন্তাশীল মতামত সহ ক্রমাগত আপডেট করা হয়। বাক্যগুলি সংক্ষিপ্ত এবং বিন্দুতে, তাদের অনুসরণ করা সহজ করে তোলে।
    প্রতিটি পোস্ট কামড়ের আকারের (ছোট) খণ্ডে বিভক্ত। এটি শিক্ষার্থীকে অভিভূত বোধ থেকে বিরত রাখে। ব্লগগুলিকে বিভাগগুলিতে ভাগ করা হয়েছে যেমন সাবলীল টিপস, ব্যাকরণ, সাংস্কৃতিক প্রতিফলন (চিন্তা), স্ল্যাং, শপথ শব্দ এবং জীবনধারা ইংরেজি। এর মানে আপনি ইংরেজির কোন অংশের সাথে লড়াই করছেন (অসুবিধে হচ্ছেন না কেন), আপনি অনুশীলনে সাহায্য করার জন্য এখানে কিছু খুঁজে পেতে পারেন।`;

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

