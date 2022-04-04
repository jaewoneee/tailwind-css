import bg1 from '../assets/images/bg1.webp';

export const Visual = () => {
    return (
        <div className="visual-wrap w-full h-screen overflow-hidden bg-salmon">
            <div className="visual-inner h-full">
                <ul className="w-full h-full">
                    <li className="flex justify-between w-full h-full">
                        <div className="w-1/2">
                            <img
                                src={bg1}
                                alt=""
                                className="w-full relative -top-40"
                            />
                        </div>
                        <div className="info-box w-1/2 h-full flex items-center text-gray">
                            <div className="w-full text-center">
                                <p className="font">Ceramic Trays</p>
                                <h2 className="my-10 title">Set the Scene</h2>
                                <a href="#" className="shop-btn btn-primary">
                                    Shop Now
                                </a>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );
};
