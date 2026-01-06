import Image from "next/image";
import Link from "next/link";
import { FiSearch, FiShoppingBag } from "react-icons/fi"

const header = () => {
    return <header>
    <div className="flex justify-between gap-10 container mx-auto py-6">
        <Link href="/">
         <Image src="/icon/logo.svg" alt="ini logo" width={127} height={30}/>
        </Link>

        <nav className="flex gap-21 font-medium">
            <Link href="#" className="relative after:content-[''] after:block after:bg-primary after:rounded-full after:h-[3px] after:w-1/2 after:absolute after:left-1/2 after:-translate-x-1/2 after:translate-y-1.5" >Home</Link>
            <Link href="#">Category</Link>
            <Link href="#">Explor Products</Link>
        </nav>
        <div className="flex gap-10">
            <FiSearch size={24}/>
            <div className="relative">
            <div className="bg-primary rounded-full w-3.5 h-3.5 absolute -top-1 -right-1 text-[9px] text-white text-center">
                3
            </div>
            <FiShoppingBag size={24}/>
            </div>
        </div>
    </div>
    </header>;
};

export default header;