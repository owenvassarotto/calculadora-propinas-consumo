import { useMemo } from "react"
import type { OrderItem } from "../types"
import { formatCurrency } from "../helpers";

type OrderTotalsProps = {
    order: OrderItem[],
    tip: number,
    placeOrder: () => void,
}

export default function OrderTotals({ order, tip, placeOrder } : OrderTotalsProps) {

    const subtotalAmount = useMemo(() => order.reduce((total, item) => total + (item.price * item.quantity), 0), [order]);
    const tipAmount = useMemo(() => subtotalAmount * tip, [tip, order]);
    const totalAmount = useMemo(() => subtotalAmount + tipAmount, [tip, order]);

  return (
    <>
        <div className="space-y-2">
            <h2 className="font-bold text-2xl">Totales y Propina:</h2>
            <p>
                Subtotal a pagar: {''}
                <span className="font-bold">{formatCurrency(subtotalAmount)}</span>
            </p>
            <p>
                Propina: {''}
                <span className="font-bold">{formatCurrency(tipAmount)}</span>
            </p>
            <p>
                Total a pagar: {''}
                <span className="font-bold">{formatCurrency(totalAmount)}</span>
            </p>
        </div>
    
        <button
            className="w-full p-3 font-black uppercase bg-slate-950 disabled:opacity-70 disabled:cursor-not-allowed"
            disabled={totalAmount === 0}
            onClick={() => placeOrder()}
        >
            Guardar Orden
        </button>
    </>
  )
}
