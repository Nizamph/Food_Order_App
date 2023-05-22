import Body from './Body';
import Header from './Header';
import { Outlet, createBrowserRouter } from 'react-router-dom';
import Footer from './Footer';
import Contact from './Contact';
import Error from './Error';
import RestaurantDetails from './RestaurantDetails';
import Login from './Login';
import Profile from './Profile';
import useOnline from '../utils/useOnline';
import React, { lazy, Suspense } from 'react';

const AboutUs = lazy(() => import('../components/AboutUs'));

const AppLayout = () => {
  const isOnline = useOnline();
  return (
    <>
      <Header />
      {isOnline && <Outlet />}
      {!isOnline && (
        <h1>Your connection has been lost please check your connection </h1>
      )}
      <Footer />
    </>
  );
};

export const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: '/',
        element: <Body />,
      },
      {
        path: 'about',
        element: (
          <Suspense fallback={<h1>what the hell</h1>}>
            <AboutUs />
          </Suspense>
        ),
        children: [
          {
            path: 'profile',
            element: <Profile />,
          },
        ],
      },
      {
        path: 'contactUs',
        element: <Contact />,
      },
      {
        path: 'restaurantDetails/:id',
        element: <RestaurantDetails />,
      },
      {
        path: 'login',
        element: <Login />,
      },
    ],
  },
]);
