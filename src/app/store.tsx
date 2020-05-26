import { configureStore } from '@reduxjs/toolkit';
import statsReducer from '../features/stats/statsSlice';
import userSlice from './slices/userSlice'
import topArtists from "./slices/topArtistSlice";

export default configureStore({
  reducer: {
    stats: statsReducer.reducer,
    user: userSlice.reducer,
    topArtists: topArtists.reducer
  },
});
