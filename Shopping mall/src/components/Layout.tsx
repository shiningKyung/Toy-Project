import { Outlet } from 'react-router-dom'
import Header from './Header'
import BannerPage from './Banner'
import Footer from './Footer'
import ProductList from './ProductList'

const Layout = () => {
    return (
        <div>
            <Header />
            <main>
                <Outlet />
            </main>
            <Footer />
        </div>
    )
}

export default Layout