import home from "../assets/images/banner.png"

export function Home() {
    return <div>

        <div className="container">
            <img src={home} className="home_style" alt="home" />
        </div>

        <div className="container interesting">
            <div className="interesting_text">
                <h3>We don't ship. We're not real.</h3>
                <p>We sell shirts. We are passionate about selling shirts. But keep in mind we have no infrastructure,supply chain
                    or mechanism to actually producr these shirts or fulfill the orders.But the shirts will always be real in your
                    imagination.</p>
            </div>
            <div className="interesting_text">
                <h3>Design your own shirt!But help us do that...</h3>
                <p>Not only do we not sell shirts, but we let you design your own!Eventually. we actually kinda need your help
                    implementing that.
                    If you could build an actual paint-style interface that you can make designs in that would be great:)
                </p>
            </div>
        </div>
    </div>

}