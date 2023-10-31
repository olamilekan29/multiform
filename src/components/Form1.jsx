// import sidebar from "../images/sidebar.svg"
// const Form1 = () =>{
//     return(
//         <>
//         <div className="bg-white flex w-[700px] p-[20px]">
//             <img src={sidebar} />
//           <div>  <h1>Personal info</h1>
//             <h3>pls provide your name,email adress and phone number</h3></div>
//         </div>
//         </>
//     )
// };
// export default Form1

const Form1 = () => {
    return (
        <>
            
            <div className="bg-[hsl(206, 94%, 87%)] md:h-[715px]  justify-center">
                
            <div className=" bg-[url('assets/IMG/bg-sidebar-mobile.svg')]  justify-center  bg-auto bg-no-repeat md:hidden  block h-[100px] flex items-center  ">
                        <div className="flex">
                            <div className="flex md:pt-[40px] md:pl-[0px] pr-[15px]">
                                <div className="rounded-[50%] px-[10px] bg-[red]">
                                    <span className="flex justify-center ">1</span>
                                </div>
                                
                            </div>
                            <div className="flex md:pt-[20px] md:pl-[0px] pr-[15px]">
                                <div className="rounded-[100px] px-[10px] bg-[red]">
                                    <span className="flex justify-center">2</span>
                                </div>
                                
                            </div>
                            <div className="flex md:pt-[20px] md:pl-[0px] pr-[15px]">
                                <div className="rounded-[100px] px-[10px] bg-[red]">
                                    <span className="flex justify-center ">3</span>
                                </div>
                               
                            </div>
                            <div className="flex md:pt-[20px] md:pl-[0px] pr-[15px]">
                                <div className="rounded-[100px] px-[10px] bg-[red]">
                                    <span className="flex justify-center">4</span>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                
                <section className="shadow-2xl flex bg-[#FFFFFF] md:mt-[60px] rounded-2xl md:w-[70%] md:h-[600px] ">
                    <div className=" bg-[url('assets/IMG/Mainbg.svg')] md:flex hidden bg-auto bg-no-repeat m-4 md:h-[580px] md:w-[30%]">
                        <div className="">
                            <div className="flex md:pt-[40px] md:pl-[30px]">
                                <div className="rounded-full px-[17px] bg-[red]">
                                    <span className="flex justify-center pt-2">1</span>
                                </div>
                                <div className="pl-[15px]">
                                    <p className="">STEP 1</p>
                                    <h2 className="text-[#FFFFFF] text-[14px] font-medium">YOUR INFO</h2>
                                </div>
                            </div>
                            <div className="flex md:pt-[20px] md:pl-[30px]">
                                <div className="rounded-full px-[17px] bg-[red]">
                                    <span className="flex justify-center pt-2">2</span>
                                </div>
                                <div className="pl-[15px]">
                                    <p className="">STEP 2</p>
                                    <h2 className="text-[#FFFFFF] text-[14px] font-medium">SELECT PLAN</h2>
                                </div>
                            </div>
                            <div className="flex md:pt-[20px] md:pl-[30px]">
                                <div className="rounded-full px-[17px] bg-[red]">
                                    <span className="flex justify-center pt-2">3</span>
                                </div>
                                <div className="pl-[15px]">
                                    <p className="">STEP 3</p>
                                    <h2 className="text-[#FFFFFF] text-[14px] font-medium">ADD-ONS</h2>
                                </div>
                            </div>
                            <div className="flex md:pt-[20px] md:pl-[30px]">
                                <div className="rounded-full px-[17px] bg-[red]">
                                    <span className="flex justify-center pt-2">4</span>
                                </div>
                                <div className="pl-[15px]">
                                    <p className="">STEP 4</p>
                                    <h2 className="text-[#FFFFFF] text-[14px] font-medium">SUMMARY</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                
                    <div className="">
                        <div className="md:mt-[45px] md:ml-[40px]">
                            <h1 className="md:text-[30px] font-medium ">Personal info</h1>
                            <p className="text-[15px] font-normal">Please provide your name, email address, and phone number.</p></div>
                        <form className="mt-[40px] md:ml-[40px]">
                            <h5 className="text-[15px] ml-[5px">Name</h5>
                            <input type="text" placeholder="e.g. Stephen King" className="border-2 md:w-[500px] outline-none p-[10px] rounded-lg mt-[5px]" />
                            <h5 className="text-[15px] ml-[5px] mt-[20px]">Email Address</h5>
                            <input type="email" placeholder="e.g. stephenking@lorem.com" className="border-2 md:w-[500px] outline-none p-[10px] rounded-lg mt-[5px]" />
                            <h5 className="text-[15px] ml-[5px] mt-[20px]">Phone Number</h5>
                            <input type="number" placeholder="e.g. +1 234 567 890" className="border-2 md:w-[500px] outline-none p-[10px] rounded-lg mt-[5px]" />
                        </form>
                        <button className="p-[9px] font-normal text-md rounded-lg bg-[blue] text-[#FFFFFF] md:mt-[110px] md:ml-[450px]">Next Step</button>
                    </div>

                </section>

            </div>
        </>
    )
}
export default Form1; 