'use client'

import { useMemo } from "react";
import {usePathname }from "next/navigation"
import {HiHome} from "react-icons/hi"
import {BiSearch} from "react-icons/bi"
import Box from "./box"
import SideBarItem from "./sidebaritem";
 

interface SideBarProps{
    children: React.ReactNode;
}

//Sidebar of the app
const SideBar: React.FC<SideBarProps> = ({children}) => {
    const pathname = usePathname();

    //all the routes of the website
    const routes = useMemo(() => [

        //home screen object by default if we are NOT searching for something
        {   
            icon : HiHome,
            label : 'Home',
            active: pathname !== '/search', 
            href : '/',
        },
        
        //search object
        {   
            icon : BiSearch,
            label: 'Search',
            active: pathname === '/search',
            href: '/search'

        }
    ], [pathname])

    return (
        <div className="flex h-full">
            <div

            className="
            
            hidden 
            md:flex
            flex-col
            gap-y-2
            bg-black
            h-full
            w-[300px]
            p-2
            "
            >
                <Box >
                    <div className="
                    flex
                    flex-col
                    gap-y-4
                    px-5
                    py-4
                    ">
                        {routes.map((item) => (

                            <SideBarItem
                            key={item.label}
                            {...item}
                            />
                        ))}
                    </div>
                </Box>
                <Box className=" overflow-y-auto h-full" >
                    Song Library
                </Box>


            </div>
        </div>


    );

};

export default SideBar;