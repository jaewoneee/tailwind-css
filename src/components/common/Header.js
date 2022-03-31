export const Header = () => {
    return (
        <div className="header-wrap w-full  flex justify-between items-center px-12 py-4 fixed z-10">
            <h1 id="logo" className="w-48">
                <a href="#">
                    <svg
                        version="1.1"
                        id="logo"
                        xmlns="http://www.w3.org/2000/svg"
                        x="0px"
                        y="0px"
                        width="100%"
                        viewBox="0 0 244.1 33.6"
                        enable-background="new 0 0 244.1 33.6"
                    >
                        <path
                            fill="#332F2E"
                            d="M16.3,0C7,0,0,7.2,0,16.8s7,16.8,16.3,16.8s16.3-7.3,16.3-16.8C32.6,7.2,25.6,0,16.3,0z M16.3,28.7
      c-6.4,0-11.2-5.1-11.2-11.9S9.9,4.9,16.3,4.9S27.5,10,27.5,16.8S22.7,28.7,16.3,28.7z M66.5,24.1l3.6,3.3L70,27.6
      c-2.9,3.6-7.8,6-12.7,6c-9.8,0-16.9-7.1-16.9-16.8C40.4,7.2,47.5,0,56.9,0c4.6,0,9.1,1.9,11.9,5L69,5.2l-3.4,3.4l-0.2-0.2
      c-2-2.2-5.3-3.5-8.5-3.5c-6.5,0-11.4,5.1-11.4,11.9c0,6.9,5,11.9,11.8,11.9c4.7,0,7.6-2.8,9-4.4L66.5,24.1z M79.3,0.4h24.9l-2,4.9
      h-9v27.8h-5.1V5.3H77.3L79.3,0.4z M124,0.5h-3.6l-13.5,32.6h5.3l3.4-8.3h13.2l3.4,8.3h5.3L124.1,0.7L124,0.5z M126.8,20h-9.1l4.5-11
      L126.8,20z M200.6,0.4h5.3l-12.7,32.7h-3.6l-0.1-0.2L176.7,0.4h5.3l9.3,23.8L200.6,0.4z M227.8,0c-9.3,0-16.3,7.2-16.3,16.8
      s7,16.8,16.3,16.8s16.3-7.3,16.3-16.8C244.1,7.2,237.1,0,227.8,0z M227.8,28.7c-6.4,0-11.2-5.1-11.2-11.9s4.8-11.9,11.2-11.9
      S239,10,239,16.8S234.2,28.7,227.8,28.7z M153.6,28.3H168l-2,4.8h-17.5V0.5h19l-2,4.9h-11.9v7.7h10l-2,4.9h-8V28.3z"
                        ></path>
                    </svg>
                </a>
            </h1>
            <ul id="nav" className="grid grid-cols-6 text-center">
                <li className="">
                    <a href="">New In</a>
                </li>
                <li className="">
                    <a href="">Workspace</a>
                </li>
                <li className="">
                    <a href="">Living</a>
                </li>
                <li className="">
                    <a href="">Occasions</a>
                </li>
                <li className="">
                    <a href="">Our Story</a>
                </li>
                <li className="">
                    <a href="">Journal</a>
                </li>
            </ul>
            <ul className="tool-box grid grid-cols-3 text-center">
                <li className="">
                    <a href="">Account</a>
                </li>
                <li className="">
                    <button className="search-btn">
                        <svg
                            width="17"
                            height="18"
                            viewBox="0 0 17 18"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M14.2168 7.5C14.2168 11.0884 11.3067 14 7.71774 14C4.1288 14 1.2168 11.0884 1.2168 7.5C1.2168 3.91158 4.1288 1 7.71774 1C11.3067 1 14.2168 3.91158 14.2168 7.5Z"
                                stroke="#313131"
                                stroke-width="1.2"
                            ></path>
                            <path
                                d="M16.2168 16.9995L13.4311 14.2138"
                                stroke="#313131"
                                stroke-width="1.2"
                            ></path>
                        </svg>
                    </button>
                </li>
                <li className="">
                    <button className="cart-btn">
                        <svg
                            width="17"
                            height="19"
                            viewBox="0 0 17 19"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M1.89336 5H15.0981L16 18H1V17.9087L1.89336 5Z"
                                stroke="#313131"
                                stroke-width="1.2"
                            ></path>
                            <path
                                d="M12 3.7V3.60694C11.8248 2.8571 11.3817 2.18791 10.746 1.71294C10.1103 1.23797 9.32105 0.986475 8.51225 1.00113C7.6993 0.981025 6.9043 1.23002 6.2635 1.70544C5.6227 2.18086 5.17602 2.8531 5 3.60694V3.7"
                                stroke="#313131"
                                stroke-width="1.2"
                            ></path>
                        </svg>
                    </button>
                </li>
            </ul>
        </div>
    );
};
