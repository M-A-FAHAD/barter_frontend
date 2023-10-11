import { Store } from './store'
import { Provider } from 'react-redux'

export default function StoreProvider({ children }) {
    return
    <Provider store={Store}>
        {children}
    </Provider>
}