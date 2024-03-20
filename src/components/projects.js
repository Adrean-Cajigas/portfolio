export default function Projects() {

    function Button( {text} ) {
        return(
            <button className="flex bg-background px-[2rem] py-[.5rem] rounded-[3rem] 
            items-center gap-2 hover:bg-[#EEEAD3] duration-200 ease-in-out">
                <div className="text-secondary font-semibold">{text}</div>
            </button>  
        )
    }

    return(

        <section className="bg-primary px-[6rem] py-[8rem] rounded-[6rem]">
            <h2 className="font-bold text-background text-[2rem] mb-[4rem] px-[3rem]">My Projects</h2>

            <div className="px-[3rem] flex flex-col gap-y-[12rem]">

                <div>
                    <div className="flex items-end gap-[3rem] mb-[2rem]">
                        <h1 className="text-accent font-bold text-[6rem] leading-[4.2rem]">Community A.L.I.</h1>

                        <div className="flex gap-4">
                            <Button text="Visit Website"></Button>
                            <Button text="Visit Github Repo"></Button>
                        </div>
                    </div>

                    <p className="text-background font-semibold text-[1.5rem]">An online community-based platform that revolutionizes the way colleges connect with their students. 
                    <span className="text-[1rem] ml-[.5rem]">(2022)</span></p>

                    <div className="flex gap-5 mt-[4rem] flex-wrap">
                        <img className="w-[35rem]" src="images/ali1.png"></img>
                        <img className="w-[35rem]" src="images/ali2.png"></img>
                        <img className="w-[35rem]" src="images/ali3.png"></img>
                        <img className="w-[35rem]" src="images/ali4.png"></img>
                    </div>
                </div>


                <div>
                    <div className="flex items-end gap-[3rem] mb-[2rem]">
                            <h1 className="text-accent font-bold text-[6rem] leading-[4.2rem]">Club Application</h1>

                            <div className="flex gap-4">
                                <Button text="Visit Website"></Button>
                                <Button text="Visit Github Repo"></Button>
                            </div>
                    </div>

                    <p className="text-background font-semibold text-[1.5rem]">A user-friendly web application that streamlines club paperwork into a singular secure system.
                    <span className="text-[1rem] ml-[.5rem]">(2024)</span></p>

                    <div className="flex gap-5 mt-[4rem] flex-wrap">
                        <img className="w-[35rem]" src="images/club1.png"></img>
                        <img className="w-[35rem]" src="images/club3.png"></img>
                        <img className="w-[35rem]" src="images/club2.png"></img>
                        <img className="w-[35rem]" src="images/club4.png"></img>
                    </div>
                </div>
              
            </div>
        </section>
    )
}