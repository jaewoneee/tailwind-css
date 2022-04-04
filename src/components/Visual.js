import { useEffect, useRef, useState } from 'react';
import { bg1, bg4 } from '../assets/index';

export const Visual = props => {
    const [currentOffset, setOffset] = useState(0);
    const text = useRef();

    useEffect(() => {
        window.addEventListener('scroll', onScroll);
    }, [currentOffset]);

    useEffect(() => {
        if (props.active) {
            text.current.classList.add('active');
        }
        if (!props.active && currentOffset > 1100) {
            const target = text.current;
            target.classList.add('active');
        }
    }, [currentOffset]);

    const onScroll = e => {
        let timer;
        const scrollTop = ('scroll', e.srcElement.scrollingElement.scrollTop);

        timer = setTimeout(() => {
            setOffset(scrollTop);
        }, 100);
    };

    return (
        <div className="visual-wrap">
            <div className="visual-inner h-full">
                <ul className="w-full h-full content-box">
                    <li className="lg:flex lg:justify-between w-full h-full">
                        <div className="w-full h-1/2 overflow-hidden lg:w-1/2 lg:h-full">
                            <img src={props.main ? bg1 : bg4} alt="" />
                        </div>
                        <div
                            className={
                                'text-content ' +
                                +(!props.active ? 'sub-content' : '')
                            }
                            ref={text}
                        >
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
                                <a
                                    href="#none"
                                    className="shop-btn btn-primary"
                                >
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
