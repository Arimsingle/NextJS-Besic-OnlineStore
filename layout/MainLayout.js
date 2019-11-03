import Link from 'next/link'
import { loadGetInitialProps } from '../node_modules/next/dist/next-server/lib/utils';
const Main = () => {
    return (
        <div className="container">
            <div className="topbar">
                <div className="logo-container">
                    <Link href="/index"><a className="link">Stock</a></Link>
                </div>
                <div className="menu-container">
                    <div><Link href="/product"><a className="link">Product</a></Link></div>
                    <div><Link href="/manege"><a className="link">Manage</a></Link></div>
                    <div><Link href="/profile"><a className="link">Profile</a></Link></div>
                </div>
            </div>
            <style jsx>{`
            .topbar{
                display:flex;
                justify-content:space-between;
                align-items:center;
                height:32px;
                background-color:white;
                padding: 0 40px;
                text-decoration:none;
                box-shadow:rgba(0,0,0,0.2) 0px 1px 2px;
            }
            .menu-container{
                display:flex;
            }
            .menu-container div{
                margin-left:5px;
                text-decoration:none;
            }
            .link{
                text-decoration:none;
                color:black;

            }
            `}</style>
            <div className="content">
            {loadGetInitialProps.children}
            </div>
            <style jsx global>{`
            @font-face{
                font-family: OpenSans;
                src:url(/static/fonts/OpenSans-Regular.ttf);

            }
            body{
                margin:0;
                font-family:'OpenSans';
                font-weight:400;
            }
            `}</style>
        </div>
    )
}
export default Main;