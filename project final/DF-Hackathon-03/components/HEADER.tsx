<>
  import Image from "next/image"; import Link from "next/link"; import {"{"}{" "}
  FaSearch, FaHeart, FaShoppingBag {"}"} from 'react-icons/fa'; export default
  function Nav() {"{"}
  return (
  <header classname="">
    {"{"}/* Top bar */{"}"}
    <div classname="bg-[#fafafa] flex justify-between items-center px-6 py-2 md:text-[11px] sm:text-[9px] text-[8px] font-medium text-gray-500">
      <img src='{"/logo1.png"}' alt="{''}" width="{24}" height="{24}/" />
      <div>
        <p classname="text-black text-sm bg-white">Skip to main content</p>
      </div>
      <div classname="flex md:gap-4 sm:gap-3 gap-2">
        <link href="/location" classname="hover:text-gray-800" />
        Find Link Store
        <link href="#" classname="hover:text-gray-800" />
        Help
        <link href="/joinus" classname="hover:text-gray-800" />
        Join Us
        <link href="/login" classname="hover:text-gray-800" />
        Sign In
      </div>
    </div>
    {"{"}/* Main navigation */{"}"}
    <div classname="flex flex-wrap justify-between items-center px-6 py-4">
      {"{"}/* Left section (Logo) */{"}"}
      <div classname="flex items-center">
        <img src='{"/logo2.png"}' alt="Nike Logo" width="{35}" height="{35}" />
      </div>
      {"{"}/* Center section (Navigation Links) */{"}"}
      <nav classname="flex gap-4 md:gap-6 text-gray-700 font-medium md:text-[16px] sm:text-[14px] text-[10px] ">
        <link href="/featured" classname="hover:text-black whitespace-nowrap" />
        New &amp; Featured
        <link href="#" classname="hover:text-black whitespace-nowrap" />
        Men
        <link href="#" classname="hover:text-black whitespace-nowrap" />
        Women
        <link href="#" classname="hover:text-black whitespace-nowrap" />
        Kids
        <link href="#" classname="hover:text-black whitespace-nowrap" />
        Sale
        <link href="#" classname="hover:text-black whitespace-nowrap" />
        SNKRS
      </nav>
      {"{"}/* Right section (Search, Wishlist, Cart) */{"}"}
      <div classname="flex items-center gap-4 mt-4 md:mt-0">
        {"{"}/* Search Bar */{"}"}
        <div classname="relative hidden md:block">
          <input
            type="text"
            placeholder="Search"
            classname="border border-gray-300 rounded-full pl-4 pr-10 py-2 text-sm focus:outline-none"
          />
          <fasearch classname="absolute right-3 top-2.5 text-gray-500"></fasearch>
        </div>
        <faheart classname="text-gray-700 md:w-[24px] md:h-[24px] sm:w-[20px] sm:h-[20px] w-[16px] h-[16px]  cursor-pointer hover:text-black">
          <fashoppingbag classname="text-gray-700 md:w-[24px] md:h-[24px] sm:w-[20px] sm:h-[20px] w-[16px] h-[16px] cursor-pointer hover:text-black"></fashoppingbag>
        </faheart>
      </div>
    </div>
    {"{"}/* Mobile Search Bar */{"}"}
    <div classname="block md:hidden px-6 mt-2">
      <div classname="relative">
        <input
          type="text"
          placeholder="Search"
          classname="border border-gray-300 rounded-full pl-4 pr-10 py-2 text-sm focus:outline-none w-full"
        />
        <fasearch classname="absolute right-3 top-2.5 text-gray-500"></fasearch>
      </div>
    </div>
  </header>
  );
  {"}"}
</>
