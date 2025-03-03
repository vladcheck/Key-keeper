import './stylesheets/style.sass'
import { createRoot } from 'react-dom/client';
import { Main } from './components/Main';

const rootElement = document.getElementById("root") as HTMLElement;
if (!rootElement) throw new Error('Root element not found');

const root = createRoot(rootElement);
root.render(<Main />);
