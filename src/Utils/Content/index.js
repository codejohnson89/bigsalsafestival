// Note: This file is used to store all the content for the website
import houstLogo from '../../Assets/bighouLogo.webp';
import nyLogo from '../../Assets/bignycLogo.webp';
import sdLogo from '../../Assets/bigSalsaFestivalSDlogo.webp';
import sdBG from '../../Assets/sdBG.webp';
import nyBG from '../../Assets/nyBG.webp';
import houstBG from '../../Assets/houBG.webp';
import nycHomeBG from '../../Assets/nycHomeBg.jpg';
import performImage from '../../Assets/perform.webp';
import purchaseImage from '../../Assets/purchase.webp';
import htoelImage from '../../Assets/hotel.webp';


export const NewYorkKidsPrices = [
    {
        price: 70,
        type: 'Early Registration',
        position: 'left',
        age: 'Kids'
    },
    {
        price: 75,
        type: 'After April 1st',
        position: 'right',
        age: 'Kids'
    },
    {
        price: 80,
        type: 'At the Door',
        position: 'left',
        age: 'Kids'
    }
]

export const NewYorkAdultPrices = [
    {
        price: 130,
        type: 'After October 1st',
        position: 'left',
        age: 'Adult'
    },
    {
        price: 140,
        type: 'After January 1st',
        position: 'right',
        age: 'Adult'
    },
    {
        price: 160,
        type: 'After March 1st',
        position: 'left',
        age: 'Adult'
    },
    {
        price: 200,
        type: 'At the Door',
        position: 'right',
        age: 'Adult'
    }
]

export const HomeCards = [
    {
        bgImg: houstBG,
        logo: houstLogo,
        date: 'Sept 2nd -5th',
        weekend: 'Labor Day Weekend',
        link: '/houston'
    },
    {
        bgImg: nyBG,
        logo: nyLogo,
        date: 'May 26th - 29th',
        weekend: 'Memeroial Day Weekend',
        link: '/newyork'
    },
    {
        bgImg: sdBG,
        logo: sdLogo,
        date: 'Jan 13th - 16th',
        weekend: 'Martin Luther King Weekend',
        link: '/sandiego'
    }
]

export const TakeAction = [
    {
        button: 'Purchase',
        title: 'Purchase Tickets',
        content: 'Prices Increase as we get closer to the event! Get your pass now and save!',
        link: 'https://www.eventbrite.com/e/big-salsa-festival-new-york-2024-tickets-644949871427',
        image: purchaseImage
    },
    {
        button: 'Book',
        title: 'Book Your Stay',
        content: 'Book your stay at the New York Hilton Midtown and get a special rate!',
        link: 'https://book.passkey.com/event/50552668/owner/6708/home',
        image: htoelImage
    },
    {
        button: 'Perform',
        title: 'Register to Perform',
        content: 'Lights, camera, Let go! Is your team ready to perform? Register below!',
        link: './Perform',
        image: performImage
    }
]

export const TimeLinePass = {
    nyc: [
        {
            price: 160,
            type: 'After November 1st',
            position: 'left',
            age: 'Adult'
        },
        {
            price: 195,
            type: 'After January 1st',
            position: 'right',
            age: 'Adult'
        },
        {
            price: 220,
            type: 'After March 1st',
            position: 'left',
            age: 'Adult'
        },
        {
            price: 250,
            type: 'After April 1st',
            position: 'right',
            age: 'Adult'
        },
    ],
    sd: [
        {
            price: 160,
            type: 'After November 1st',
            position: 'left',
            age: 'Adult'
        },
        {
            price: 195,
            type: 'After January 1st',
            position: 'right',
            age: 'Adult'
        },
        {
            price: 220,
            type: 'After March 1st',
            position: 'left',
            age: 'Adult'
        },
        {
            price: 250,
            type: 'After April 1st',
            position: 'right',
            age: 'Adult'
        },
    ],
    hou: [
        {
            price: 160,
            type: 'After November 1st',
            position: 'left',
            age: 'Adult'
        },
        {
            price: 195,
            type: 'After January 1st',
            position: 'right',
            age: 'Adult'
        },
        {
            price: 220,
            type: 'After March 1st',
            position: 'left',
            age: 'Adult'
        },
        {
            price: 250,
            type: 'After April 1st',
            position: 'right',
            age: 'Adult'
        },
    ]
}

export const NewYorkHomeContent = {
    logo: nyLogo,
    date: 'May 24th - 27th',
    location: '1335 6th Ave. New York, NY 10019',
    hotel: 'New York Hilton Midtown',
    aboutUs: 'Come to the heart of New York and experience the Mecca of Salsa! BIGNY is dedicated to bringing you the best New York  Latin Dance Experience. We bring our attendees the best instructors from all around the world and locally to showcase and teach their talents. Brace yourselves for amazing performances, the best Salsa and Bachata DJs from around the world, and get ready to dance the night away in the heart of New York City!',
    backgroundImage: nycHomeBG,
    hotelLink: 'https://www.eventbrite.com/e/big-salsa-festival-new-york-2024-tickets-644949871427',
}

export const HoustonHomeContent = {
    logo: houstLogo,
    date: 'Sept 1st - 4th',
    location: '5060 W Alabama St, Houston TX 77056',
    hotel: 'Westin Galleria Houston',
    aboutUs: "Come to Houston, Texas and enjoy the BIG Salsa Festival in the salsa dancing capital of the south! Get to know the diverse culture of Houston, amazing dancers, and delicious food. BIG Salsa Festival Houston is a four day latin event featuring some of the greatest names in performing arts and music! Each day is packed with dance classes, amazing performances, and latin dance parties into the early morning hours. Once you experience BIG Salsa Festival, it will surely become one of the premier events you look forward to every year. If you've always wanted to learn how to dance, this is the perfect begining. If you are looking to improve and advance your techniques, BIG Houston offers classes for beginners, challenges for the advanced, and everything in between. Come learn from the best the world and our local community has to offer and enjoy The BIG Salsa Festival Houston.",
    backgroundImage: houstBG,
    hotelLink: 'https://www.eventbrite.com/e/big-salsa-festival-new-york-2024-tickets-644949871427',
}

export const SanDiegoHomeContent = {
    logo: sdLogo,
    date: 'January 12th - 15th',
    location: '8757 Rio San Diego Dr, San Diego, CA 92108',
    hotel: 'Marriott Mission Valley',
    aboutUs: "Come to San Diego, California and enjoy the BIG Salsa Festival in the west coast! Get to know the diverse culture of San Diego, amazing dancers, and delicious food. BIG Salsa Festival San Diego is a four day latin event featuring some of the greatest names in performing arts and music! Each day is packed with dance classes, amazing performances, live band concerts, and latin dance parties into the early morning hours. Once you experience BIG Salsa Festival, it will surely become one of the premier events you look forward to every year. If you've always wanted to learn how to dance, this is the perfect beginning. If you are looking to improve and advance your techniques, BIG San Diego offers classes for beginners, challenges for the advanced, and everything in between. Come learn from the best dancers the world and our local community. We know you'll enjoy The BIG Salsa Festival San Diego.",
    backgroundImage: sdBG,
    hotelLink: 'https://www.eventbrite.com/e/big-salsa-festival-new-york-2024-tickets-644949871427',
}