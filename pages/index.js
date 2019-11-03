import Link from 'next/link'
import Main from '../layout/MainLayout';
const Index = () => {
    return (
        <div className="container">
            <div className="banner">
                <Main />
                <h1 className="text-head">Arima Next.js</h1>
            </div>
            <div className="input-search">
                <input className="input-find" type="text" placeholder="Find something" />
                <button className="button-enter">Enter</button>
            </div>
            <div className="text-down">
                <div className="storage">
                    <h3>Storage</h3>
                    <p className="text-p">Keep your product data</p>
                    <p>Into the database</p>
                </div>
                <div className="border-height">
                </div>
                <div className="Accessible">
                    <h3>Accessible</h3>
                    <p>The product Infomation</p>
                    <p>can be easily</p>
                    <p>accessed by anyone</p>
                </div>
            </div>
            <div className="border-weight">
                <div className="text-hot">
                <h3 className="hot">Hot</h3><h3>Product</h3>
                </div>
            </div>
            <style jsx global>{`
                .text-hot{
                    display: flex;
                    flex-direction:row;  
                }
                .hot{
                    color:orange;
                }
                .banner{
                    background-image: url('/static/images/anime.png');
                    height:50vh;
                    weight:100vh; 
                    background-position: center;
                    background-repeat: no-repeat;
                    background-size: cover;
                    position: relative;                
                }
                .text-head{
                    text-align: center;
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    color:#1D1D1D ;
                    box-shadow:rgba(0,0,0,0.2) 0px 3px 3px;
                    border-radius: 5px; 
                }
                .input-search{
                    display: flex;
                    justify-content:center;
                    height:32px;
                }
                .button-enter{
                    margin-left:10px;
                    color:white;
                }
                .text-down{
                    display: flex;
                    justify-content:center;
                    flex-direction:row; 
                }
                .storage{
                    display: flex;
                    justify-content:center;
                    align-items: center;
                    flex-direction:column; 
                    margin-bottom:20px;
                }
                .Accessible{
                    display: flex;
                    justify-content:center;
                    align-items: center;
                    flex-direction:column; 
                    margin-top:10px;
                }
                .border-height{
                    border-right: 1px solid;
                    display: flex;
                    justify-content:center;
                    align-items: center;
                    margin:30px;
                    margin-bottom:10px;
                    color:#858585;
                }
                .border-weight{ 
                    margin: 0 auto;
                    margin-top: 30px;
                    border-top: 1px solid; 
                    width:70%;
                    color:#858585;
                }
                .input-find{
                    width:20%;
                    border-radius: 10px;
                    box-shadow:rgba(0,0,0,0.2) 0px 1px 2px;
                    border: none;
                    padding:10px;
                }
                .button-enter{
                    border-radius: 10px; 
                    width:7%;
                    background-color:#00B0D5;
                    border: none;
                    box-shadow:rgba(0,0,0,0.2) 0px 1px 2px;
                }
                p{
                    color:#858585;
                    margin:5px;
                }
                .text-p{

                }

            `}</style>
        </div>

    )
}
export default Index;