import ItemList from './component/ItemList'
import './App.css'
import AppHeading from './component/CartHeading'
import TotalItemCount from './component/TotalItemCount'
import InputItem from './component/inputItem'

function App() {


  return (
    <>

      <AppHeading></AppHeading>
      <TotalItemCount></TotalItemCount>
      <InputItem ></InputItem>
      <ItemList></ItemList>
      
    </>
  )
}

export default App
