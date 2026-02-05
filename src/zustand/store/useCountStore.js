import { create } from "zustand";
import { combine } from "zustand/middleware";


// 기본 구조

// const store = create(combine(
//   {
//     // 초기상태값
//   },

//   //세터를 만들어줌
//   (set) => ({    // 객체를 리턴함 
//     // setter
//   }) 
// ))


const useCountstore = create(combine(
  {
    count : 0
  },

  (set) => ({
    increase : () => set((state) => ({count: state.count + 1})),
    decrease : () => set((state) => ({count: state.count - 1}))
  })
))

export default useCountstore;