import style from "./Navigation.module.css"
const Navigation = () => {
    return (
        <nav className={style.container}>
            <div className={style.nav}>
                <img src="./src/images/logo3.png" alt="Logo" />
                <ul>
                    <li>Home</li>
                    <li>Products</li>
                    <li>About</li>
                    <li>Contact Us</li>
                </ul>
            </div>
        </nav>
    )
}
export default Navigation;