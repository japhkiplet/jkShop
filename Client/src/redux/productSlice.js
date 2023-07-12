import {createSlice} from '@reduxjs/toolkit'
const productSlice = createSlice({
    name:"product",
    initialState:{
        product: null,
        isFetching:false,
        error:false
    },
    reducers:{
        productStart:(state)=>{
       state.isFetching = true;
        },
        productSuccess:(state,action)=>{
            state.isFetching = false;
            state.user = action.payload;
            state.error = false;
        },
        productFailure:(state)=>{
           state.isFetching = false;
           state.error = true
        },
        createProductStart: (state) => {
            state.isFetching = true;
            state.error = false;
          },
          createProductSuccess: (state, action) => {
            state.isFetching = false;
            state.todos.push(action.payload);
            state.error = false;
          },
          createProductFailure: (state) => {
            state.isFetching = false;
            state.error = false;
          },
       
    }
})
export const {productStart,productSuccess,productFailure,createProductStart,createProductSuccess,createProductFailure} = productSlice.actions;
export default productSlice.reducer;
