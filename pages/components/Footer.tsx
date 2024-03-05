import Link from 'next/link';
import { useState, ChangeEvent, FormEvent } from 'react';
import Image from "next/image";

const Footer = () => {

    const [inputValue, setInputValue] = useState<string>('');
    
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // Process the input value here
        console.log(inputValue);
    };
    
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
    };

    
    return (
      <div className="footer p-6 lg:p-24 lg:pb-4 pb-0 flex flex-col lg:grid grid-cols-2 bg-slate-200">

        <div className='flex flex-col-reverse lg:flex-row lg:col-span-2'>
            <div className="w-full">
                <ul>
                    <li className='mb-4 text-xl'> <Link href="#">home</Link> </li>
                    <li className='mb-4 text-xl'> <Link href="#">about</Link> </li>
                    <li className='mb-4 text-xl'> <Link href="#">careers</Link> </li>
                    <li className='mb-4 text-xl'> <Link href="#">news</Link> </li>
                    <li className='mb-4 text-xl'> <Link href="#">contact</Link> </li>
                </ul>
            </div>
            <div className="w-full col-span-1 mb-14">
                <h2 className='text-5xl mb-14'>Care to stay connected?</h2>
                <form onSubmit={handleSubmit}>
                    <div className='w-full flex items-center gap-4 mb-4 relative'>
                        <input
                            type="text"
                            value={inputValue}
                            onChange={handleChange}
                            placeholder="Enter your text"
                            className='form-input w-full py-4'
                        />
                        <button type="submit" className='submit-btn flex items-center justify-center absolute right-2'>
                            <svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1.125 1L6.125 6L1.125 11" stroke="white" stroke-width="2.55319"/>
                            </svg>
                        </button>
                    </div>
                    <p className='text-sm'>Share your email to subscribe to news, updates and more.</p>
                </form>
            </div>
        </div>

        <div className='w-full col-span-2 mt-14 lg:mt-24'>
            <div className='py-8'>
            <Image
                src="/images/logos/fwd-full.svg"
                alt="Forward logo"
                className=""
                width={200}
                height={200}
              />
            </div>
            <div className='flex justify-between w-full py-4 uppercase'>
                <div className='text-xs'>© 2024 FWDPR</div>
                <ul className='flex items-center gap-8'>
                    <li className='text-xs'> <Link href="#">instagram</Link> </li>
                    <li className='text-xs'> <Link href="#">Facebook</Link> </li>
                </ul>
            </div>
        </div>
        
      </div>
        
    );
  };
  
  export default Footer;