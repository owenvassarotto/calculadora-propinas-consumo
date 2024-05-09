import { formatCurrency } from "../helpers"
import { OrderItem } from "../types"

type OrderContentsProps = {
    order: OrderItem[]
}

export default function OrderContents({ order } : OrderContentsProps) {
  return (
    <div className="space-y-4">
        {order.length === 0 ? (
            <p className="text-center">La orden está vacía 😥</p>
        ) : (
            order.map(item => (
                <div 
                    key={item.id}
                    className="flex justify-between items-center border-b border-gray-500 last-of-type:border-none last-of-type:p-0 pb-4"
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
                    >
                        x
                    </button>
                </div>
            ))
        )}
    </div>
  )
}
