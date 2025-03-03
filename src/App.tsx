import './stylesheets/style.sass'
import { createRoot } from 'react-dom/client';
import { Main } from './components/Main';

const rootElement = document.querySelector("#root")!;
const root = createRoot(rootElement);

root.render(<Main />);
