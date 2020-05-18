import { configureStore } from '@reduxjs/toolkit';
import statsReducer from '../features/stats/statsSlice';
import userSlice from '../features/landing/LandingSlice'
import topArtistSlice from '../features/landing/LandingSlice'

export default configureStore({
  reducer: {
    stats: statsReducer.reducer,
    user: userSlice.reducer,
    topArtists: topArtistSlice.reducer
  },
});
