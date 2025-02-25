import './App.css';
import { Provider } from 'react-redux';
import Head from "./components/Head";
import Body from './components/Body';
import store from './utils/store';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainContainer from './components/MainContainer';
import WatchPage from './components/WatchPage';

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
