
import './Dashboard.css'

const Dashboard = () => {
  return (
    
     <div className="main">
            <h3 className="head">Crop Chain Dashboard</h3>
            <div className="container">
                <ul>
                    <li>
                        <h3 className="heading">My Products</h3>
                        <p>Manage your products for expanding business smoothly</p>
                        <a href="./products">View Details</a>
                        <span className="date">eProducts</span>
                        <span className="circle"></span>
                    </li>
                    <li>
                        <h3 className="heading">Trade Contract</h3>
                        <p>Operate trades for optimizing profits</p>
                        <a href="./trade">View Details</a>
                        <span className="date">eTrade</span>
                        <span className="circle"></span>
                    </li>
                    <li>
                        <h3 className="heading">Tracking Delivaries</h3>
                        <p>Track delivaries for </p>
                        <a href="./trackDelivery">View Details</a>
                        <span className="date">eTrack</span>
                        <span className="circle"></span>
                    </li>
                    <li>
                        <h3 className="heading">Sellers</h3>
                        <p>Make easy our trades by providing products</p>
                        <a href="./sellers">View Details</a>
                        <span className="date">eSellers</span>
                        <span className="circle"></span>
                    </li>
                    <li>
                        <h3 className="heading">Buyers</h3>
                        <p>Gateway of our end customer to complete cost friendly delivaries</p>
                        <a href="./buyers">View Details</a>
                        <span className="date">eBuyers</span>
                        <span className="circle"></span>
                    </li>
                    <li>
                        <h3 className="heading">Transports</h3>
                        <p>Top contributors who make succesful transportation</p>
                        <a href="./transports">View Details</a>
                        <span className="date">eTransport</span>
                        <span className="circle"></span>
                    </li>
                </ul>
                
            </div>
        </div>
  )
}

export default Dashboard;