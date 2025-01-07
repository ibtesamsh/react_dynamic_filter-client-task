// import logo from './logo.svg';
import './App.css';
// import {TableComponent} from './component/table.js'
// import {Table} from './component/table.js'
// import {FiltersComponent} from './component/filter.js'
import {StickyHeadTable} from './component/table.js'

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <StickyHeadTable/>

        
        {/* <FiltersComponent/> */}
      </header>
    </div>
  );
}

export default App;
