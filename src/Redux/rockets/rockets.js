import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const rocketsAction = createAsyncThunk('rocket/rockets', async () => {
  const req = await fetch('https://api.spacexdata.com/v3/rockets');
  const rockets = await req.json();
  return rockets;
});

const rocketsSlice = createSlice({
  name: 'rocket',
  initialState: {
    data: [],
    loading: false,
    error: '',
  },
  extraReducers: (builder) => {
    builder.addCase(rocketsAction.pending, (state) => {
      state.loading = true;
      state.error = '';
    });
    builder.addCase(rocketsAction.fulfilled, (state, action) => {
      state.data = action.payload;
      state.loading = false;
    });
    builder.addCase(rocketsAction.rejected, (state) => {
      state.loading = false;
      state.error = 'Error fetching user data';
    });
  },
});

export default rocketsSlice.reducer;
