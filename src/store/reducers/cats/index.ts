import { ContactsState, CatsActionEnum, CatsActions } from "./types";
import { ICat } from "../../../models/ICat";

const initialState: ContactsState = {
  error: "",
  isLoading: false,
  cats: [] as ICat[],
  // favorives: [],
};

export default function contactsReducer(
  state = initialState,
  action: CatsActions
): ContactsState {
  switch (action.type) {
    case CatsActionEnum.SET_ERROR:
      return { ...state, error: action.payload };

    case CatsActionEnum.SET_IS_LOADING:
      return { ...state, isLoading: action.payload };

    case CatsActionEnum.ADD_CATS:
      return { ...state, cats: [...state.cats, ...action.payload] };

    case CatsActionEnum.GET_CATS:
      return { ...state, cats: action.payload };

    case CatsActionEnum.TOGGLE_FAVORITES:
      return {
        ...state,
        cats: state.cats.map((cat) =>
          cat.id === action.payload
            ? { ...cat, isInFavorites: !cat.isInFavorites }
            : cat
        ),
      };

    // case CatsActionEnum.DEL_FROM_FAVORITES:
    //   return {
    //     ...state,
    //     favorives: state.favorives.filter((catId) => catId !== action.payload),
    //   };

    default:
      return state;
  }
}
