'use client';
import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

type Category = {
    name: string,
    reos: Reo[]
}

type Reo = {
    slug: string,
    data: {[key: string]: any}
}

export default function Dropdown(item : Category) {

    const [subnavOpen, setSubnavOpen] = useState(true);

    return (
        <>
            <div className="flex items-center justify-between ease-in-out transition-all" onClick={() => setSubnavOpen(!subnavOpen)}>
                    <span> {item.name}</span>
                    <IoIosArrowDown className="float-right"/>
            </div>
            <div className={`transition-all ease-in-out px-10 ${subnavOpen ? "visible" : "hidden"}`}>
                {item.reos.map((reo) => {
                    return <>
                    <a href={'/reos/' + reo.slug}>{reo.data.Name}</a>
                    </>;
                })
                }
            </div>
        </>
    );
};