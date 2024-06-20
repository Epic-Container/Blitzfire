import React from 'react';
import { BiCubeAlt, BiDna, BiLogoJavascript, BiSolidWrench, BiX } from 'react-icons/bi';
import { MdOutlineInsertDriveFile } from "react-icons/md";

interface arrayItem {
    title: string,
    content: string,
    type: string
}
interface TabsProps {
    tab: arrayItem[],
    active: number
}
const Tabs: React.FC<TabsProps> = ({ tab, active }) => {
    
    return (
        <div className="bg-[#14171a] scrollbar-thin scrollbar-thumb-[#2c343b] scrollbar-track-[#1d2227] text-white flex justify-start text-sm overflow-x-auto max-h-12">
            {
                tab.map((item, index) => {
                    if (index === active) {
                        return <div key={index} className="flex px-2 py-1 gap-2 border-r-2 border-r-[#08090a] border-b-2 border-b-white bg-[#262b30]">
                            <span>
                                { icon(item.type) }
                            </span>
                            <button className='min-w-max'>
                                {item.title}
                            </button>
                            <button>
                                <BiX size={20} />
                            </button>
                        </div>
                    } else {
                        return <div key={index} className="flex px-2 py-1 gap-2 border-r-2 border-r-[#0c0e0f]">
                            <span>
                                { icon(item.type) }
                            </span>
                            <button className='min-w-max'>
                                {item.title}
                            </button>
                            <button>
                                <BiX size={20} />
                            </button>
                        </div>
                    }
                })
            }
        </div>
    );
};

export default Tabs;

function icon (type:string, ) {
    if (type === "block") {
        return <BiCubeAlt size={20} />
    }
    if (type === "item") {
        return <BiSolidWrench size={20} />
    }
    if (type === "script") {
        return <BiLogoJavascript size={20} />
    }
    if (type === "entity") {
        return <BiDna size={20} />
    }
    if (type === "none") {
        return <MdOutlineInsertDriveFile size={20} />
    }
} 