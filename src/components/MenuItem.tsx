import { Dispatch } from "react"
import type { MenuItem } from "../types"
import { OrderActions } from "../reducers/order-reducer"

type MenuItemProps = {
  item: MenuItem,
  dispatch: Dispatch<OrderActions>,
}

export default function MenuItem({ item, dispatch } : MenuItemProps ) {
  return (
    <button
        className="border-2 p-3 border-slate-950 hover:bg-slate-950 flex items-center justify-between w-full rounded-lg"
        onClick={() => dispatch({ type: "add-item", payload: { item } })}
    >
        <p>{item.name}</p>
        <p className="font-bold">${item.price}</p>
    </button>
  )
}
