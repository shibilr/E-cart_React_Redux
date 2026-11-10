import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";



export const getAllProducts = createAsyncThunk("products/getAllProducts",async()=>{
    const result = await axios.get("https://dummyjson.com/products")
    console.log(result.data.products);
    
    return result.data.products
})

const productSlice = createSlice({//combine actions and reducer together
    name:"products",
    initialState:{//(state)actions happens from API call
        loading:true,//pending stage
        allProducts:[],//fulfilled stage
        dummyAllProducts:[],
        error:""//rejected
    },
    reducers:{
        // define only synchronous actions
        searchProduct:(state,action)=>{
        state.allProducts = state.dummyAllProducts.filter(item=>item.title.toLowerCase().includes(action.payload.toLowerCase()))
        }
    },
    extraReducers:(builder)=>{
        builder.addCase(getAllProducts.fulfilled,(state,action)=>{
            state.loading = false
            state.allProducts = action.payload
            state.dummyAllProducts = action.payload
            state.error = ""
        })
        builder.addCase(getAllProducts.pending,(state,action)=>{
            state.loading = true
            state.allProducts = []
            state.dummyAllProducts = []
            state.error = ""
        })
        builder.addCase(getAllProducts.rejected,(state,action)=>{
            state.loading = false
            state.allProducts = []
            state.dummyAllProducts = []
            state.error = "API call failed"
        })
    }
})
export const {searchProduct} = productSlice.actions

export default productSlice.reducer