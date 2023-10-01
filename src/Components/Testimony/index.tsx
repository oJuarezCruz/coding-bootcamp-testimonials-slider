import imgJohn from './image-john.jpg';
import imgTanya from './image-tanya.jpg';
import iconPrev from './icon-prev.svg';
import iconNext from './icon-next.svg';
import { useState } from 'react';

export default function Testimony() {
    const testimonySlides = {
        tanya: {
            img: imgTanya,
            alt: 'Tanya',
            name: 'Tanya Sinclair',
            quote: '“ I’ve been interested in coding for a while but never taken the jump, until now. I couldn’t recommend this course enough. I’m now in the job of my dreams and so excited about the future. ”',
            role: 'UX Engineer'
        },
        john: {
            img: imgJohn,
            alt: 'John',
            name: 'John Tarkpor',
            quote: '“ If you want to lay the best foundation possible I’d recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer. ”',
            role: 'Junior Front-end Developer'
        }
    }

    const [images, setImages] = useState(testimonySlides.tanya.img);
    const [alt, setAlt] = useState(testimonySlides.tanya.alt);
    const [name, setName] = useState(testimonySlides.tanya.name);
    const [quote, setQuote] = useState(testimonySlides.tanya.quote);
    const [role, setRole] = useState(testimonySlides.tanya.role);

    function changeToJohn() {
        setImages(testimonySlides.john.img);
        setAlt(testimonySlides.john.alt);
        setName(testimonySlides.john.name);
        setQuote(testimonySlides.john.quote);
        setRole(testimonySlides.john.role);
    }

    function changeToTanya() {
        setImages(testimonySlides.tanya.img);
        setAlt(testimonySlides.tanya.alt);
        setName(testimonySlides.tanya.name);
        setQuote(testimonySlides.tanya.quote);
        setRole(testimonySlides.tanya.role);
    }

    return (
        <main className="flex flex-col lg:flex-row-reverse items-center mt-2 lg:mt-0 z-10">
            <div className='flex flex-col items-center text-center py-6 bg-patternBg bg-contain bg-center bg-no-repeat w-1/2'>
                <img
                    src={images}
                    alt={alt}
                    className='w-3/5'
                />
                <div className='mt-2 flex items-center justify-between gap-8 p-3 bg-white rounded-full shadow-lg'>
                    <button onClick={() => { changeToTanya() }} className='outline-none'>
                        <img
                            src={iconPrev}
                            alt='Prev'
                        />
                    </button>
                    <button onClick={() => { changeToJohn() }} className='outline-none'>
                        <img
                            src={iconNext}
                            alt='Next'
                        />
                    </button>
                </div>
            </div>
            <div className='text-center pt-8 lg:pl-4 mt-4 bg-patternQuotes bg-auto bg-no-repeat bg-top w-1/2'>
                <p className='text-center text-1xl lg:text-2xl pb-4'>{quote}</p>
                <h2 className='font-bold'>{name}</h2>
                <h3 className='font-medium text-txtMedium'>{role}</h3>
            </div>
        </main>
    )
}