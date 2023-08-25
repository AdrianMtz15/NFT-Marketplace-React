import { createSlice } from "@reduxjs/toolkit";

import PopularIcon from '../ico/popularity.png';
import ArtsIcon from '../ico/art-and-design.png';
import GameIcon from '../ico/console.png';
import MusicIcon from '../ico/guitar.png';
import SportsIcon from '../ico/sports.png';
import PhotographyIcon from '../ico/photography.png';

const initialCategories = [
  {
    title: 'Popular',
    iconSrc: PopularIcon,
  },
  {
    title: 'Arts',
    iconSrc: ArtsIcon,
  },
  {
    title: 'Games',
    iconSrc: GameIcon,
  },
  {
    title: 'Music',
    iconSrc: MusicIcon,
  },
  {
    title: 'Sports',
    iconSrc: SportsIcon,
  },
  {
    title: 'Photography',
    iconSrc: PhotographyIcon,
  },
]

export const categorySlice = createSlice({
  name: "category",
  initialState: {
    all: initialCategories,
    current: ''
  },
  reducers: {
    setCategory: (state, action) => {
      const currentCategory = action.payload.toLowerCase();
      state.current = currentCategory;
    },
  }
});

export default categorySlice.reducer;

export const { setCategory } = categorySlice.actions;