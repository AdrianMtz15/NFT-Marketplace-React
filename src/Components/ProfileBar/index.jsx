

function ProfileBar() {
  return(
    <div className="shadow border-solid border-[#D9D9D9] border-l z-10 h-[10vh] w-[30vw] bg-white flex flex-row justify-center items-center fixed top-0 right-0 ">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-[2rem] h-[2rem] mx-[8px] cursor-pointer">
        <path fillRule="evenodd" d="M5.25 9a6.75 6.75 0 0113.5 0v.75c0 2.123.8 4.057 2.118 5.52a.75.75 0 01-.297 1.206c-1.544.57-3.16.99-4.831 1.243a3.75 3.75 0 11-7.48 0 24.585 24.585 0 01-4.831-1.244.75.75 0 01-.298-1.205A8.217 8.217 0 005.25 9.75V9zm4.502 8.9a2.25 2.25 0 104.496 0 25.057 25.057 0 01-4.496 0z" clipRule="evenodd" />
      </svg>


      <div className="mx-[8px] flex flex-row items-center justify-center cursor-pointer">
        <img className="mx-[8px] w-[2.5vw]" src="https://firebasestorage.googleapis.com/v0/b/nft-marketplace-94b84.appspot.com/o/users-photos%2FEllipse%204.png?alt=media&token=853964c0-4bf2-4e58-9c60-e17a08448003" alt="" />

        <p className="text-[1.6rem] font-medium text-[#4D4A4A] font-sans mr-[5px]">Doadesignz</p>
        
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
          <path fillRule="evenodd" d="M12.53 16.28a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 011.06-1.06L12 14.69l6.97-6.97a.75.75 0 111.06 1.06l-7.5 7.5z" clipRule="evenodd" />
        </svg>
      </div>

    </div>
  );
}

export {
  ProfileBar
}