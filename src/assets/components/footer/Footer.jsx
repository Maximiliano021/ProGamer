const Footer = () => {
    return (
        <footer className="bg-white mt-18 px-6 dark:bg-gray-900">
            <div className="footer py-6 border-t-2 border-inherit-400 border-t-inherit-400 ">
                <div>
                    <span className="footer-title">Google Play</span>
                    <span className="link link-hover">Play Pass</span>
                    <span className="link link-hover">Design</span>
                    <span className="link link-hover">Marketing</span>
                    <span className="link link-hover">Marketing</span>
                    <span className="link link-hover">Advertisement</span>
                </div>
                <div>
                    <span className="footer-title">Company</span>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </div>
            </div>
            <div className="footer block py-6 sm:flex py-4 text-base-content">
                <li><span className="text-xs">Terminos y condiciones</span></li>
                <li><span className="text-xs">Privacidad</span></li>
                <li><span className="text-xs">Acerca de Google Play</span></li>
                <li><span className="text-xs">Desarrolladores</span></li>
                <li><span className="text-xs">Google Store</span></li>
            </div>
        </footer>
    )
}

export default Footer