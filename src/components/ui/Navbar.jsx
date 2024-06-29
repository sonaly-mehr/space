import Image from 'next/image';
import React from 'react';

const Navbar = () => {
    return (
        <nav className='container mx-auto py-5 lg:py-6'>
            <Image src="/images/logo.png" width={120} height={50} alt='' unoptimized={true} className='w-[120px] h-auto'/>
        </nav>
    );
};

export default Navbar;