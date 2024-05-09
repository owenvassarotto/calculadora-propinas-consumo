import MenuItem from "./components/MenuItem";
import OrderContents from "./components/OrderContents";
import { menuItems } from "./data/db";
import useOrder from "./hooks/useOrder";

function App() {

  const { order, addItem } = useOrder();

  return (
    <>
      <header className="bg-slate-950 py-4">
        <h1 className="text-center text-3xl font-bold">Calculadora de Propinas y Consumo</h1>
      </header>
    
      <main className="container mx-auto mt-14 grid gap-6 md:grid-cols-2">

        <div className="">
          <h2 className="uppercase font-black mb-4 text-xl">Menú</h2>

          <div className="space-y-3">
            {menuItems.map(item => (
              <MenuItem
                key={item.id}
                item={item}
                addItem={addItem}
              />
            ))}
          </div>
        </div>

        <div className="">
          <h2 className="uppercase font-black mb-4 text-xl">Consumo</h2>

          <div className="border border-dashed border-slate-300 p-5 rounded-lg space-y-10">
            <OrderContents 
              order={order}
            />
          </div>
        </div>
      </main>
    </>
  )
}

export default App
