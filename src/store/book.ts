import { CarType } from "@/types/type";
import { create } from "zustand";

type BookItem = CarType & {
  count: number;
};

type BookStore = {
  book: BookItem[];
  count: () => number;
  add: (item: CarType) => void;
  remove: (vehicle: string) => void;
  clear: () => void;
};

export const useBookStore = create<BookStore>((set, get) => ({
  book: [],
  count: () => {
    const { book } = get();
    if (book.length === 0) return 0;
    return book.map(item => item.count).reduce((prev, curr) => prev + curr);
  },
  add: (item: CarType) => {
    const { book } = get();
    const updatedBook = updateBook(item, book);
    set({ book: updatedBook });
  },
  remove: (vehicle: string) => {
    const { book } = get();
    const updatedBook = removeBook(vehicle, book);
    set({ book: updatedBook });
  },
  clear: () => set({ book: [] }),
}));

function updateBook(item: CarType, book: BookItem[]) {
  const exist = book.find(bookItem => bookItem.vehicle === item.vehicle);
  if (exist) {
    return book.map(bookItem => {
      if (bookItem.vehicle === item.vehicle) {
        return { ...bookItem, count: bookItem.count + 1 } as BookItem;
      }
      return bookItem;
    });
  }
  return [...book, { ...item, count: 1 }];
}

function removeBook(vehicle: string, book: BookItem[]) {
  return book
    .map(item => {
      if (item.vehicle === vehicle) return { ...item, count: item.count - 1 };
      return item;
    })
    .filter(item => {
      return item.count;
    });
}
