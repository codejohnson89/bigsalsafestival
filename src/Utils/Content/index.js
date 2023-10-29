// Note: This file is used to store all the content for the website
import houstLogo from '../../Assets/bighouLogo.webp';
import nyLogo from '../../Assets/bignycLogo.webp';
import sdLogo from '../../Assets/bigSalsaFestivalSDlogo.webp';
import sdBG from '../../Assets/sdBG.webp';
import nyBG from '../../Assets/nyBG.webp';
import houstBG from '../../Assets/houBG.webp';


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