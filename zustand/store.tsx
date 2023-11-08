import { create } from 'zustand'


type StoreState = {
    userEmail: string,
    bearerToken: string,
    setUserEmail: (by: string) => void,
    setBearerToken: (by: string) => void,
    getUserEmail: () => string,
    getBearerToken: () => string
}

const useStore: any = create<StoreState>((set) => ({
//   bears: 0,
//   increasePopulation: () => set((state: any) => ({ bears: state.bears + 1 })),


  userEmail: "",
  bearerToken: "",
  setUserEmail: (email: string) => set({ userEmail: email }),
  setBearerToken: (token: string) => set({ bearerToken: token }),
  getUserEmail: () => useStore.getState().userEmail,
  getBearerToken: () => useStore.getState().bearerToken,
}))

export default useStore