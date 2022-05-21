import React from 'react'
import HomeIcon from '@mui/icons-material/Home';
import SportsBasketballIcon from '@mui/icons-material/SportsBasketball';
import SportsSoccerIcon from '@mui/icons-material/SportsSoccer';
import InfoIcon from '@mui/icons-material/Info';

export const SidebarData = [
    {
        title: "Home",
        icon: <HomeIcon />,
        link: "/"
    },
    {
        title: "Basketball",
        icon: <SportsBasketballIcon />,
        link: "/basketball"
    },
    {
        title: "Soccer",
        icon: <SportsSoccerIcon />,
        link: "/soccer"
    },
    {
        title: "About",
        icon: <InfoIcon />,
        link: "/about"
    }
]