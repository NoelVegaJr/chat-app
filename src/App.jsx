import Header from "./components/Header"
import Sidebar from "./components/Sidebar"
import Chat from "./components/Chat"
export default function App() {
  return (
    <>
     
      <div className="app flex flex-col h-full" >
        <Header className="h-10 md:h-16" />
        <div className="flex grow">
          <Sidebar className="w-20 md:w-80"/>
          <Chat/>
        </div>

      </div>
    </>

  )
}