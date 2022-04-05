import { useEffect, useRef, useState } from 'react';
import { bg1, bg4 } from '../assets/index';

export const Visual = props => {
    const [currentOffset, setOffset] = useState(0);
    const text = useRef();
    const img = useRef();

    useEffect(() => {
        window.addEventListener('scroll', onScroll);
    }, [currentOffset]);

    useEffect(() => {
        if (props.active) {
            text.current.classList.add('active');
            img.current.classList.add('active');
        }
        if (!props.active && currentOffset > 900) {
            text.current.classList.add('active');
            img.current.classList.add('active');
        }
    }, [currentOffset]);

    const onScroll = e => {
        const scrollTop = ('scroll', e.srcElement.scrollingElement.scrollTop);

        setTimeout(() => {
            setOffset(scrollTop);
        }, 500);
    };

    return (
        <div className="visual-wrap">
            <div className="visual-inner h-full">
                <ul className="w-full h-full content-box">
                    <li className="lg:flex lg:justify-between w-full h-full">
                        <div className="img-content">
                            <img
                                className="opacity-0 transition ease-in duration-1000"
                                src={props.main ? bg1 : bg4}
                                alt="thumbnail"
                                ref={img}
                            />
                        </div>
                        <div className="text-content" ref={text}>
                            <div className="w-full text-center">
                                <p>
                                    {props.main
                                        ? 'Ceramic Trays'
                                        : 'Limited Edition'}
                                </p>
                                <h2
                                    className={
                                        'my-10 title font-medium ' +
                                        (!props.active
                                            ? 'text-7xl'
                                            : 'text-6xl ')
                                    }
                                >
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
