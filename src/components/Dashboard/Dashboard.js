import React from 'react';
import './Dashboard.scss'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Profile from '../DashboardItem/Profile/Profile';
import AddWork from '../DashboardItem/AddWork/AddWork';
import ManageWork from '../DashboardItem/ManageWork/ManageWork';
import img from './icons8-police.png'
const routes = [
    {
        path: "/profile",
        exact: true,
        main: () => <Profile></Profile>
    },
    {
        path: "/addWork",
        sidebar: () => <div>bubblegum!</div>,
        main: () => <AddWork></AddWork>
    },
    {
        path: "/addAdmin",
        sidebar: () => <div>shoelaces!</div>,
        main: () => <h2>Shoelaces</h2>
    },
    {
        path: "/contact",
        sidebar: () => <div>shoelaces!</div>,
        main: () => <ManageWork></ManageWork>
    }
];

const Dashboard = () => {
    return (
        <div>
            <nav class="navbar navbar-light bg-primary">
                <div class="container-fluid">
                  <Link to='/' style={{textDecoration:'none'}}> <a class="navbar-brand" href="#" style={{color:'white',fontFamily:'fantasy',fontSize:'25px'}}>
                        <img src={img} alt="" width="35" height="30" class="d-inline-block align-text-top" />
                        Shahadat
                    </a></Link> 
                </div>
            </nav>
            <Router>
                <div className='container dashboard-main'>
                    <div className='col-md-12 toggle-info'>
                        <Switch>
                            {routes.map((route, index) => (
                                <Route
                                    key={index}
                                    path={route.path}
                                    exact={route.exact}
                                    children={<route.main />}
                                />
                            ))}
                        </Switch>
                    </div>

                    <div className='row container'>
                        <div className='col-md-3 col-6 row-item'>
                            <Link to="/profile" style={{ textDecoration: 'none', color: 'black' }}> <div className='row-item-inner'>
                                <i class="zmdi zmdi-account  zmdi-hc-4x"></i>
                                <h4>Profile</h4>
                            </div></Link>
                        </div>

                        <div className='col-md-3 col-6 row-item'>
                            <Link to='/addWork' style={{ textDecoration: 'none', color: 'black' }}><div className='row-item-inner'>
                                <i class="zmdi zmdi-plus-circle-o zmdi-hc-4x"></i>
                                <h4>Add Work</h4>
                            </div></Link>
                        </div>
                        <div className='col-md-3 col-6 row-item'>
                            <Link to='/addAdmin' style={{ textDecoration: 'none', color: 'black' }}> <div className='row-item-inner'>
                                <i class="zmdi zmdi-account-add  zmdi-hc-4x"></i>
                                <h4>Add Admin</h4>
                            </div></Link>
                        </div>
                        <div className='col-md-3 col-6 row-item'>
                            <Link to='/contact' style={{ textDecoration: 'none', color: 'black' }}> <div className='row-item-inner'>
                                <i class="zmdi zmdi-widgets zmdi-hc-4x"></i>
                                <h4>Manage Work</h4>
                            </div></Link>
                        </div>
                    </div>
                </div>
            </Router>
        </div>
    );
};

export default Dashboard;