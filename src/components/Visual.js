import { bg1, bg4 } from '../assets/index';

export const Visual = props => {
    return (
        <div className="visual-wrap w-full h-screen overflow-hidden bg-salmon">
            <div className="visual-inner h-full">
                <ul className="w-full h-full">
                    <li className="lg:flex lg:justify-between w-full h-full">
                        <div className="w-full h-1/2 overflow-hidden lg:w-1/2 lg:h-full">
                            <img
                                src={props.main ? bg1 : bg4}
                                alt=""
                                className="relative object-cover object-center min-w-full h-full"
                            />
                        </div>
                        <div className="w-full h-1/2 lg:w-1/2 lg:h-full flex items-center text-gray">
                            <div className="w-full text-center">
                                <p>
                                    {props.main
                                        ? 'Ceramic Trays'
                                        : 'Limited Edition'}
                                </p>
                                <h2 className="my-10 title font-medium">
                                    {props.main
                                        ? 'Set the Scene'
                                        : 'Jaime Hayon x Octaevo'}
                                </h2>
                                <a href="#" className="shop-btn btn-primary">
                                    {props.main ? 'Shop Now' : 'Read More'}
                                </a>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );
};
