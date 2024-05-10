import { formatCurrency } from "../helpers"
import { OrderItem } from "../types"

type OrderContentsProps = {
    order: OrderItem[],
    removeItem: (id: number) => void,
}

export default function OrderContents({ order, removeItem } : OrderContentsProps) {
  return (
    <div className="space-y-3">
        {order.map(item => (
            <div 
                key={item.id}
                className="flex justify-between items-center border-b border-gray-500  pb-4"
            >
                <div>
                    <p className="text-lg">
                        {item.name} - {formatCurrency(item.price)}
                    </p>

                    <p className="font-bold">
                        Cantidad: {item.quantity} - {formatCurrency(item.price * item.quantity)}
                    </p>
                </div>

                <button
                    className="bg-red-500 hover:bg-red-600 h-6 w-6 font-black rounded-full"
                    onClick={() => removeItem(item.id)}
                >
                    x
                </button>
            </div>
        ))}
    </div>
  )
}
