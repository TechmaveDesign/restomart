import TopHeader from './top-header'
import Header from './header'
import Footer from './footer'
import { Outlet } from 'react-router-dom';

const AppLayout = ({setData}) =>{
    return (
        <>
          <TopHeader />
          <Header setData={setData} />
          <Outlet />
          <Footer />
        </>
    )
};

export default AppLayout;