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
                >
                    <p className="text-lg">{item.name} - {formatCurrency(item.price)}</p>
                </div>
            ))
        )}
    </div>
  )
}
