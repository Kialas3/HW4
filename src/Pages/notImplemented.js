import scotty from "../assets/images/scotty.png"

export function NotImplemented() {
    return <>
        <div className="container">
            <img src={scotty} className="not_implemented_img" alt="scotty" />
        </div>
        <div className="container">
            <p className="not_implemented_text">Oops,this page doesn't exist yet... how about a shirt from the last page?</p>
        </div>
    </>
}