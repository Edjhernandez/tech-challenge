import { Roboto, Lato, Preahvihear } from 'next/font/google';

export const roboto = Roboto({ 
    weight : '400',
    style : 'normal',
    subsets: ['latin'] 
});

export const lato = Lato({
    weight: ['400', '700'],
    style: 'normal',
    subsets: ['latin']
})

export const preah = Preahvihear({
    weight: '400',
    style: 'normal',
    subsets: ['latin']
})