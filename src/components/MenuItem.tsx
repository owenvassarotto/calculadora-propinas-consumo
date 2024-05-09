import type { MenuItem } from "../types"

type MenuItemProps = {
    item: MenuItem,
    addItem: (item: MenuItem) => void,
}

export default function MenuItem({ item, addItem } : MenuItemProps ) {
  return (
    <button
        className="border-2 p-3 border-slate-950 hover:bg-slate-950 flex items-center justify-between w-full rounded-lg"
        onClick={() => addItem(item)}
    >
        <p>{item.name}</p>
        <p className="font-bold">${item.price}</p>
    </button>
  )
}
