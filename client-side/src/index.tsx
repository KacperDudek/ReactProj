import ReactDOM from 'react-dom/client';
import 'react-calendar/dist/Calendar.css'; 
import 'semantic-ui-css/semantic.min.css';
import { StoreContext, store } from './app/stores/store.ts';
import { RouterProvider } from 'react-router-dom';
import { router } from './app/router/Routes.tsx';
import './app/layout/styles.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <StoreContext.Provider value={store}> 
        <RouterProvider router={router} />
    </StoreContext.Provider>
)
