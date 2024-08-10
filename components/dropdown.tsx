'use client';
import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

export default function Dropdown({ item }) {

    const [subnavOpen, setSubnavOpen] = useState(false);

    return (
        <>
            <div onClick={() => setSubnavOpen(!subnavOpen)}>
                <div className="">
                    <span> {item.name}</span>
                    <IoIosArrowDown className="float-right"/>
                </div>
            </div>
            <div className={`px-10 ${subnavOpen ? "visible" : "hidden"}`}>
                {item.reos.map((reo) => {
                    return <>
                    <a href={'/reos/' + reo.data.Name}>{reo.data.Name}</a>
                    </>;
                })
                }
            </div>
        </>
    );
};