import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Main from '../../layout/Main'
import AddService from '../../Pages/AddService/AddService';
import Blogs from '../../Pages/Blogs/Blogs';
import Home from '../../Pages/Home/Home'
import Login from '../../Pages/Login/Login';
import MyReviews from '../../Pages/MyReviews/MyReviews';
import AllService from '../../Pages/Services/AllService/AllService';
import ServiceDetails from '../../Pages/Services/ServiceDetails/ServiceDetails';
import ServiceList from '../../Pages/Services/ServiceList/ServiceList';
import SignUp from '../../Pages/SignUp/SignUp';
import UserReview from '../../Pages/UserReview/UserReview';
import UserReviewData from '../../Pages/UserReview/UserReviewData';
import PrivateRoute from '../../PrivateRoute/PrivateRoute';
import img1 from '../../assets/Error.png'
import Media from '../../Pages/Media/Media';
import Message from '../../Pages/Message/Message';
import About from '../../Pages/About/About';
import Details from '../../Pages/Details/Details';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <PrivateRoute><Home></Home></PrivateRoute>
            },
            {
                path: '/blogs',
                element: <Blogs></Blogs>
            },
            {
                path: '/services',
                element: <AllService></AllService>
            },
            {
                path: '/services/:id',
                element: <ServiceDetails></ServiceDetails>,
                loader: ({ params }) => fetch(`https://docmike-server.vercel.app/servicesAll/${params.id}`)
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path: '/review',
                element: <UserReview></UserReview>
            },
            {
                path: '/userReview',
                element: <UserReviewData></UserReviewData>,
                loader: () => fetch('https://docmike-server.vercel.app/reviews')
            },
            {
                path: '/myreviews',
                element: <PrivateRoute><MyReviews></MyReviews></PrivateRoute>
            },
            {
                path: 'addservice',
                element: <PrivateRoute><AddService></AddService></PrivateRoute>
            },
            {
                path: '*',
                element: <div className='flex justify-center mt-10'><img src={img1} alt="" /></div>
            },
            {
                path: '/media',
                element: <Media></Media>
            },
            {
                path: '/message',
                element: <Message></Message>
            },
            {
                path: '/about',
                element: <About></About>
            },
            {
                path: `/details/:id`,
                element: <PrivateRoute><Details></Details></PrivateRoute>,
                loader: ({ params }) => fetch(`https://docmike-server-tantaana.vercel.app/details/${params.id}`)
            }
        ]
    }
])

export default router;