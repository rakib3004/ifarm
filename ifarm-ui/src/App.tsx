
import './App.css'

function App() {

  return (
    
     <div className="main">
            <h3 className="head">iFarm  Dashboard</h3>
            <div className="container">
                <ul>
                    <li>
                        <h3 className="heading">Top Pages</h3>
                        <p>Asif Adnan, আরিফ আজাদ, Mizanur Rahman Azhari, Ahmadullah, Abdullah Al Masud, Shamsul Arefin Shakti and more....   </p>
                        <a href="#">View Details</a>
                        <span className="date">Facebook</span>
                        <span className="circle"></span>
                    </li>
                    <li>
                        <h3 className="heading">Top Channels</h3>
                        <p>Baseera, Rain Drops Media, Mizanur Rahman Azhari, Arif Azad, Islam Zone and more ...</p>
                        <a href="#">View Details</a>
                        <span className="date">YouTube</span>
                        <span className="circle"></span>
                    </li>
                    <li>
                        <h3 className="heading">Top Blogs</h3>
                        <p>Cintaporadh, Assunnah Foundation, Shohid Info, Quran and more ...</p>
                        <a href="#">View Details</a>
                        <span className="date">Websites</span>
                        <span className="circle"></span>
                    </li>
                </ul>
            </div>
        </div>
  )
}

export default App
