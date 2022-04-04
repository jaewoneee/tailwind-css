import data from '../data.json';
import {
    item1,
    item2,
    item3,
    item4,
    item5,
    item6,
    item7,
    item8,
    item9,
    item10,
    item11,
    item12,
} from '../assets/index';

export const List = props => {
    const sweetData = data['sweet'];
    const retroData = data['retro'];
    const items = [item1, item2, item3, item4, item5, item6];
    const items2 = [item7, item8, item9, item10, item11, item12];

    function makeList(data, thumbnail) {
        return data.map((item, i) => {
            return (
                <li className="lg:w-1/3 text-center item relative">
                    <button
                        type="button"
                        className="border border-DEFAULT rounded-full p-2.5 absolute right-0"
                    >
                        <svg
                            width="16"
                            height="18"
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
                    <img
                        src={thumbnail[i]}
                        alt={`item${i}`}
                        className="block h-64 object-contain w-full lg:h-80 hover:scale-105 ease duration-500"
                    />
                    <h3 className="mt-3">{item.title}</h3>
                    <h4 className="my-3">{item.price}</h4>
                    <a
                        href="#none"
                        className="view-btn btn-primary block w-full"
                    >
                        View
                    </a>
                </li>
            );
        });
    }
    return (
        <div className="list-wrap py-10 w-full  h-screen  bg-sweet">
            <div className="list-inner w-full relative top-1/2 -translate-y-1/2 text-gray">
                <h2 className="text-center title text-6xl">
                    {props.sweet ? 'Sweet Touch' : 'Retro Rivival'}
                </h2>
                <div className="w-full overflow-hidden  overflow-x-scroll px-10">
                    <ul className="list-box w-double h-full flex items-end mt-12 pb-10">
                        {props.sweet
                            ? makeList(sweetData, items)
                            : makeList(retroData, items2)}
                    </ul>
                </div>
            </div>
        </div>
    );
};
