export const Banner = () => {
    return (
        <div className="banner-wrap relative banner h-screen bg-repeat">
            <div className="text-white absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 text-center">
                <p>Bon Voyage</p>
                <h3 className="font-domaine text-7xl font-regular my-4">
                    Narinan x Octaevo
                </h3>
                <button className="btn-primary-w">Read Story</button>
            </div>
        </div>
    );
};
