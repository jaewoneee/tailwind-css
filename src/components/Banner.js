export const Banner = () => {
    return (
        <div className="banner-wrap relative banner h-96 lg:h-screen bg-repeat">
            <div className="text-white text-center absolute w-full  top-1/2  -translate-y-1/2 ">
                <p>Bon Voyage</p>
                <h3 className="font-domaine text-4xl lg:text-7xl font-medium my-4">
                    Narinan x Octaevo
                </h3>
                <button className="btn-primary-w">Read Story</button>
            </div>
        </div>
    );
};
