import linkedIcon from "../../assets/icons8-linkedin.svg"


function SecondSection() {
    return (
        <div className="bg-secondSectionColor h-72">
            {/* Titles */}
            <div className="flex flex-col justify-center items-center gap-4">
                <div>
                    <h1 className="text-3xl font-nameFont font-bold mt-16 ">PH.D.</h1>
                </div>
                <div>
                    <h1 className="text-4xl font-nameFont uppercase tracking-widest font-light">Random Hoca</h1>
                </div>
                <div className="flex flex-row gap-3">
                    <a href=""><img src={linkedIcon} alt="" /></a>
                    
                    
                </div>
            </div>
        </div>
    );
}

export default SecondSection;
