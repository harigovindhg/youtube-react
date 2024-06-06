import { Provider } from 'react-redux';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import Body from './components/Body';
import MainContainer from './components/MainContainer';
import VideoPlayContainer from './components/VideoPlayContainer';
import Header from './components/Header';
import store from './utils/appStore';

function App() {
  const appRouter = createBrowserRouter([{
    path: "/",
    element: <Body />,
    children: [
      {
        path: "/",
        element: <MainContainer />
      },
      {
        path: "watch",
        element: <VideoPlayContainer />
      }
    ]
  }]);
  return (
    <Provider store={store}>
      <div className="App">
        <Header />
        <RouterProvider router={appRouter} />
        {
          // Header
          // Body
          //    Sidebar
          //        Menu
          //            Menu Items
          //    MainContainer
          //        ButtonsList
          //        VideosListContainer
          //            VideoCard
          //        VideoContainer
          //            VideoPlayer
          //            RecommendedVideoContainer
          //                VideoCard
          //            ButtonsList
          //            Comments
        }
      </div>
    </Provider>
  );
}

export default App;
