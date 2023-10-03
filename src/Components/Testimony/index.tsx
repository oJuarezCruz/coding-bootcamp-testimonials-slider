import iconPrev from './icon-prev.svg';
import iconNext from './icon-next.svg';

interface TestimonyProps {
    src: string,
    alt: string,
    name: string,
    quote: string,
    role: string,
    onClickPrev: React.MouseEventHandler,
    onClickNext: React.MouseEventHandler
}

export default function Testimony({ src, alt, name, quote, role, onClickPrev, onClickNext }: TestimonyProps) {
    return (
        <main className="flex flex-col lg:flex-row-reverse items-center lg:mt-0 z-10">
            <div className='flex flex-col items-center text-center py-6 bg-patternBg bg-contain bg-center bg-no-repeat lg:w-1/2'>
                <img
                    src={src}
                    alt={alt}
                    className='w-3/5'
                />
                <div className='flex items-center justify-between gap-8 p-3 mt-2 bg-white rounded-full shadow-lg'>
                    <button onClick={onClickPrev} className='outline-none'>
                        <img
                            src={iconPrev}
                            alt='Previous image'
                        />
                    </button>
                    <button onClick={onClickNext} className='outline-none'>
                        <img
                            src={iconNext}
                            alt='Next image'
                        />
                    </button>
                </div>
            </div>
            <div className='text-center lg:pl-4 bg-patternQuotes bg-auto bg-no-repeat bg-top lg:w-1/2'>
                <p className='text-center text-1xl lg:text-2xl pb-2 lg:pb-4'>{quote}</p>
                <h2 className='font-bold'>{name}</h2>
                <h3 className='font-medium text-txtMedium'>{role}</h3>
            </div>
        </main>
    )
}