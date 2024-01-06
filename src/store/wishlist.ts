import { CarType } from "@/types/type";
import { create } from "zustand";

type WishlistItem = CarType;

type WishlistStore = {
  wishlist: WishlistItem[];
  hasItems: () => boolean;
  add: (item: CarType) => void;
  remove: (vehicle: string) => void;
  clear: () => void;
};

export const useWishlistStore = create<WishlistStore>((set, get) => ({
  wishlist: [],
  hasItems: () => get().wishlist.length > 0,
  add: (item: CarType) => {
    const { wishlist } = get();
    const updatedWishlist = updateWishlist(item, wishlist);
    set({ wishlist: updatedWishlist });
  },
  remove: (vehicle: string) => {
    const { wishlist } = get();
    const updatedWishlist = removeWishlist(vehicle, wishlist);
    set({ wishlist: updatedWishlist });
  },
  clear: () => set({ wishlist: [] }),
}));

function updateWishlist(item: CarType, wishlist: WishlistItem[]) {
  const existingItem = wishlist.find(wishlistItem => wishlistItem.vehicle === item.vehicle);
  if (existingItem) {
    return wishlist;
  } else {
    return [...wishlist, item];
  }
}

function removeWishlist(vehicle: string, wishlist: WishlistItem[]) {
  return wishlist.filter(item => item.vehicle !== vehicle); // Simple removal
}
