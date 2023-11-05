// import checkmark from "../assets/IMG/icon-checkmark.svg"
const Form3 = () =>{
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
                         <div className="md:mt-[45px] md:ml-[40px] text-left pl-[20px]">
                            <h1 className="md:text-[30px] text-[#02295A] font-medium ">Pick add-ons</h1>
                            <p className="text-[15px] text-[#9699AB] font-normal">Add-ons help enhance your gaming experience</p>
                        </div>
                           <div className="flex w-[270px] justify-between items-center border-2 border-[blue] mb-[20px] mt-[15px] rounded-xl  px-[10px] ml-[13px] ">
                            <input type="checkbox" />
                            <span>
                                <h3 className="text-[13px] text-[hsl(213, 96%, 18%)] font-semibold">Online Services</h3>
                                <h4 className="text-[12px]">Access to multiplayer games</h4>
                            </span>
                            <h3>+$1/mon</h3>
                           </div>

                           <div  className="flex w-[270px] justify-between items-center border-2 border-[blue] mb-[20px] rounded-xl  px-[10px] ml-[13px]">
                            <input type="checkbox" />
                            <span>
                                <h3 className="text-[13px] text-[hsl(213, 96%, 18%)] font-semibold">Large Storage</h3>
                                <h4 className="text-[12px]">Extra 1TB of cloud storage</h4>
                            </span>
                            <h3>+$1/mon</h3>
                           </div>

                           <div  className="flex w-[270px] justify-between items-center border-2 border-[gray] mb-[20px] rounded-xl  px-[10px] ml-[13px]">
                            <input type="checkbox" />
                            <span>
                                <h3 className="text-[13px] text-[hsl(213, 96%, 18%)] font-semibold">Customizable Profile</h3>
                                <h4 className="text-[12px]">Custom Theme on your profile</h4>
                            </span>
                            <h3>+$1/mon</h3>
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

                    <div className="md:flex-col hidden md:flex">
                        <div className="md:mt-[45px] md:ml-[40px]">
                            <h1 className="md:text-[30px] text-[#02295A] font-medium ">Pick add-ons</h1>
                            <p className="text-[15px] text-[#9699AB] font-normal">Add-ons help enhance your gaming experience</p>
                        </div>
                        <div className="mt-[40px] md:ml-[40px]">
                           <div className="flex w-[400px] justify-between items-center border-2 border-[blue] mb-[30px] rounded-xl p-[5px] px-[30px] ">
                            <input type="checkbox" />
                            <span>
                                <h3 className="text-[18px] text-[hsl(213, 96%, 18%)] font-semibold">Online Services</h3>
                                <h4>Access to multiplayer games</h4>
                            </span>
                            <h3>+$1/mon</h3>
                           </div>

                           <div className="flex w-[400px] justify-between items-center border-2 border-[blue] mb-[30px] rounded-xl p-[5px] px-[30px] ">
                            <input type="checkbox" />
                            <span>
                                <h3 className="text-[18px] text-[hsl(213, 96%, 18%)] font-semibold">Large Storage</h3>
                                <h4>Extra 1TB of cloud storage</h4>
                            </span>
                            <h3>+$1/mon</h3>
                           </div>

                           <div className="flex w-[400px] justify-between items-center border-2 border-[gray] rounded-xl p-[5px] px-[30px] ">
                            <input type="checkbox" />
                            <span>
                                <h3 className="text-[18px] text-[hsl(213, 96%, 18%)] font-semibold">Customizable Profile</h3>
                                <h4>Custom Theme on your profile</h4>
                            </span>
                            <h3>+$1/mon</h3>
                           </div>
                           
                           
                         </div>
                         




                         <div className="mt-[40px] md:ml-[40px] md:hidden ">
                           <div className="flex w-[400px] justify-between items-center border-2 border-[blue] mb-[30px] rounded-xl p-[5px] px-[30px] ">
                            <input type="checkbox" />
                            <span>
                                <h3 className="text-[18px] text-[hsl(213, 96%, 18%)] font-semibold">Online Services</h3>
                                <h4>Access to multiplayer games</h4>
                            </span>
                            <h3>+$10/yr</h3>
                           </div>

                           <div className="flex w-[400px] justify-between items-center border-2 border-[blue] mb-[30px] rounded-xl p-[5px] px-[30px] ">
                            <input type="checkbox" />
                            <span>
                                <h3 className="text-[18px] text-[hsl(213, 96%, 18%)] font-semibold">Large Storage</h3>
                                <h4>Extra 1TB of cloud storage</h4>
                            </span>
                            <h3>+$20/yr</h3>
                           </div>

                           <div className="flex w-[400px] justify-between items-center border-2 border-[gray] rounded-xl p-[5px] px-[30px] ">
                            <input type="checkbox" />
                            <span>
                                <h3 className="text-[18px] text-[hsl(213, 96%, 18%)] font-semibold">Customizable Profile</h3>
                                <h4>Custom Theme on your profile</h4>
                            </span>
                            <h3>+$20/yr</h3>
                           </div>
                           
                           
                         </div>

                        
                         <div className=" flex justify-between mt-[70px]">
                            <button className="text-[#9699AB] font-normal text-[15px] ml-[70px]">Go Back</button>
                            <button className="p-[10px] font-normal text-md rounded-lg bg-[#02295A] text-[#FFFFFF] w-[30%]">Next Step</button>
                        </div>
                    </div>

                </section> 

    </div>
            

     
    </>
    
    )
};
export default Form3