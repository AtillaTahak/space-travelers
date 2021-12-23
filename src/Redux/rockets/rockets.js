import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const rocketsAction = createAsyncThunk('rocket/rockets', async () => {
  const req = await fetch('https://api.spacexdata.com/v3/rockets');
  const rockets = req.json();
  return rockets;
});

const rocketsSlice = createSlice({
  name: 'rocket',
  initialState: {
    data: [],
    loading: false,
    error: null,
  },
  reducers: {
    reserved: (state, action) => {
      state.data.forEach((element) => {
        if (element.id === action.payload.id) {
          element.reserved = !element.reserved;
        }
      });
    },

  },
  extraReducers: (builder) => {
    builder.addCase(rocketsAction.pending, (state) => {
      state.loading = true;
      state.error = '';
    });
    builder.addCase(rocketsAction.fulfilled, (state, action) => {
      action.payload.forEach((element) => {
        element.reserved = false;
      });
      state.data = action.payload;
      state.loading = false;
    });
    builder.addCase(rocketsAction.rejected, (state) => {
      state.loading = false;
      state.error = 'Error fetching user data';
    });
  },
});

export const { reserved } = rocketsSlice.actions;
export default rocketsSlice.reducer;
