export const Footer = () => {
    return (
        <div className="footer-wrap bg-cream text-gray">
            <div className="footer-inner py-10 px-24 flex gap-44">
                <ul>
                    <h4 className="font-domaine text-3xl mb-6">Company</h4>
                    <li>
                        <a href="" className="mb-2 block">
                            Our Story
                        </a>
                    </li>
                    <li>
                        <a href="" className="mb-2 block">
                            Contact
                        </a>
                    </li>
                    <li>
                        <a href="" className="mb-2 block">
                            Wholesale
                        </a>
                    </li>
                    <li>
                        <a href="" className="mb-2 block">
                            Stockists
                        </a>
                    </li>
                </ul>
                <ul>
                    <h4 className="font-domaine text-3xl mb-6">Support</h4>
                    <li>
                        <a href="" className="mb-2 block">
                            Shipping
                        </a>
                    </li>
                    <li>
                        <a href="" className="mb-2 block">
                            Payment
                        </a>
                    </li>
                    <li>
                        <a href="" className="mb-2 block">
                            Sustainability
                        </a>
                    </li>
                    <li>
                        <a href="" className="mb-2 block">
                            FAQs
                        </a>
                    </li>
                </ul>
                <div className="w-1/3 ml-auto">
                    <h4 className="font-domaine text-3xl mb-6">
                        Keep in Touch
                    </h4>
                    <p className="mb-5">Sign up and get 10% off</p>
                    <div>
                        <div className="border mb-5">
                            <input
                                type="text"
                                placeholder="Email address*"
                                className="p-4 w-3/5"
                            />
                            <button
                                type="button"
                                className="text-center p-4 border-l w-2/5"
                            >
                                Subscribe
                            </button>
                        </div>
                        <div className="flex items-center">
                            <input
                                type="checkbox"
                                className="appearance-none border w-4 h-4 mr-3 rounded-full transition duration-150 ease-in checked:bg-gray"
                                name=""
                                id=""
                            />
                            <span className="block">
                                I accept the
                                <a href="" className="inline-block ml-1">
                                    Privacy Policy terms
                                </a>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
