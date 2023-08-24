import { createSlice } from "@reduxjs/toolkit";

import PopularIcon from '../../assets/ico/popularity.png';
import ArtsIcon from '../../assets/ico/art-and-design.png';
import GameIcon from '../../assets/ico/console.png';
import MusicIcon from '../../assets/ico/guitar.png';
import SportsIcon from '../../assets/ico/sports.png';
import PhotographyIcon from '../../assets/ico/photography.png';

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