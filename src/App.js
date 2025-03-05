import './App.css';
import { Provider } from 'react-redux';
import Head from "./components/Head";
import Body from './components/Body';
import store from './utils/store';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainContainer from './components/MainContainer';
import WatchPage from './components/WatchPage';
// import Demo from './components/Demo';
// import Demo2 from './components/Demo2';

const appRouter = createBrowserRouter([{
  path: "/",
  element: <Body/>,
  children: [
    {
      path: "/",
      element: <MainContainer/>
    },
    {
      path: "watch",
      element: <WatchPage/>
    },
    // {
    //   path: "demo",
    //   element: <Demo/>
    // },
    // {
    //   path: "demo",
    //   element: <Demo2/>
    // },
  ],
}]);


function App() {
  return (
    <Provider store={store}>
    <div>
      
      <Head/>
      <RouterProvider router={appRouter}/>

      {/* 1. Header
          2. Body
          3. Sidebar
              - Menu Items
          4. Main Container
              - ButtonsList
              - VideoContainer
              - Video Card
       */}

       
    </div>
    </Provider>
  );
}

export default App;
