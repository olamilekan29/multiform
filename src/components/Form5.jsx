import thankyou from "../assets/IMG/thankyou.svg"
const Form5 = () =>{
    return(
    <>
          <div className="bg-[#F0F6FF] md:h-[715px] h-[650px] md:flex md:justify-center">
            <div  className="md:hidden bg-[url('assets/IMG/Desktopbg.svg')]  bg-contain bg-no-repeat w-[100%] h-[200px]">
             <div className="flex justify-center">
                        <div className="mt-[40px]">
                            <span className="rounded-full px-[12px] py-[7px] border-2 text-[#FFFFFF]">1</span>
                            <span className="rounded-full px-[12px] py-[7px] ml-[20px] border-2 text-[#FFFFFF]">2</span>
                            <span className="rounded-full px-[12px] py-[7px] ml-[20px] border-2 text-[#FFFFFF]">3</span>
                            <span className="rounded-full px-[12px] py-[7px] ml-[20px] border-2 text-[#FFFFFF]">4</span>
                        </div>
                    </div>
                    <div className="bg-[#FFFFFF] mt-[50px] mx-[10px] rounded-xl h-[420px]">
                        
                    <div className="flex-col flex items-center justify-center text-center pt-[50px]">
                        <img className="w-[60px]" src={thankyou} alt="" />
                        <h1 className="text-black text-[30px] font-bold">Thank You!</h1>
                        <h2 className="text-[gray]">Thanks for confirming your subscription! we hope you have fun using our platform.if you need support,please feel free to email us at support@loremgaming.com</h2>
                        
                    </div>
                        </div>
            </div> 
                
                <section className="shadow-2xl md:flex bg-[#FFFFFF] md:mt-[60px] rounded-2xl md:w-[70%] md:h-[600px] ">
                    <div className=" bg-[url('assets/IMG/Mainbg.svg')] md:flex hidden bg-auto bg-no-repeat m-4 md:h-[580px] md:w-[30%]">
                        <div className="">
                            <div className="flex md:pt-[40px] md:pl-[30px]">
                                <div className="rounded-full px-[14px] border-2 text-[#FFFFFF]">
                                    <span className="flex justify-center pt-2">1</span>
                                </div>
                                <div className="pl-[15px]">
                                    <p className="text-[#9699AB] text-[14px] font-normal">STEP 1</p>
                                    <h2 className="text-[#FFFFFF] text-[14px] font-medium">YOUR INFO</h2>
                                </div>
                            </div>
                            <div className="flex md:pt-[20px] md:pl-[30px]">
                                <div className="rounded-full px-[14px] border-2 text-[#FFFFFF]">
                                    <span className="flex justify-center pt-2">2</span>
                                </div>
                                <div className="pl-[15px]">
                                    <p className="text-[#9699AB] text-[14px] font-normal">STEP 2</p>
                                    <h2 className="text-[#FFFFFF] text-[14px] font-medium">SELECT PLAN</h2>
                                </div>
                            </div>
                            <div className="flex md:pt-[20px] md:pl-[30px]">
                                <div className="rounded-full px-[14px] border-2 text-[#FFFFFF]">
                                    <span className="flex justify-center pt-2">3</span>
                                </div>
                                <div className="pl-[15px]">
                                    <p className="text-[#9699AB] text-[14px] font-normal">STEP 3</p>
                                    <h2 className="text-[#FFFFFF] text-[14px] font-medium">ADD-ONS</h2>
                                </div>
                            </div>
                            <div className="flex md:pt-[20px] md:pl-[30px]">
                                <div className="rounded-full px-[14px] border-2 text-[#FFFFFF]">
                                    <span className="flex justify-center pt-2">4</span>
                                </div>
                                <div className="pl-[15px]">
                                    <p className="text-[#9699AB] text-[14px] font-normal">STEP 4</p>
                                    <h2 className="text-[#FFFFFF] text-[14px] font-medium">SUMMARY</h2>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="md:flex-col hidden md:flex md:items-center md:justify-center md:pl-[50px] md:text-center">
                        <img className="w-[100px]" src={thankyou} alt="" />
                        <h1 className="text-black text-[40px] font-bold">Thank You!</h1>
                        <h2 className="text-[gray]">Thanks for confirming your subscription! we hope you have <br /> fun using our platform.if you need support,please feel <br /> free to email us at support@loremgaming.com</h2>
                        
                    </div>

                </section> 

    </div>
            

     
    </>
    
    )
};
export default Form5