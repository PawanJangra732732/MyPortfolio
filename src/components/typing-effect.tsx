'use client';
import React, { useEffect, useState } from 'react';

type TypingEffectProps={
    text:string;
}
function TypingEffect({text}:TypingEffectProps) {
    return (
        <p aria-valuetext={text} className="mt-5 max-w-[700px] text-slate-950 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-800">
            {text.split("").map((letter,index)=><span className={`opacity-0 transition-opacity duration-300 ease-in-out delay-[${index/10}] `}>{letter}</span>)}
        </p>
    );
}

export default TypingEffect;
