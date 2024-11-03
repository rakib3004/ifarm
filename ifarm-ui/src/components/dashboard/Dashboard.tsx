
import './Dashboard.css'

const Dashboard = () => {
  return (
    
     <div className="main">
            <h3 className="head">eFarm Dashboard</h3>
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
                        <a href="#">View Details</a>
                        <span className="date">eTrack</span>
                        <span className="circle"></span>
                    </li>
                </ul>
            </div>
        </div>
  )
}

export default Dashboard;