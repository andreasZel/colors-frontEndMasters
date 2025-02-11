import { Dispatch, PropsWithChildren, useReducer } from "react";
import { AdjustColorActions, colorReducer, ColorState, InitialState } from "./colorReducer";
import { createContext } from "./create-context";

type ColorContextState = ColorState & {
    dispatch: Dispatch<AdjustColorActions>
}
const [useColorContext, ColorContextProvider] = createContext<ColorContextState>();

export const useContext = useColorContext;

export const ColorProvider = ({ children }: PropsWithChildren) => {
    const [state, dispatch] = useReducer(colorReducer, InitialState);
    const hexColor = state.hexColor;

    return (
        <ColorContextProvider value={{ hexColor, dispatch }} >
            {children}
        </ColorContextProvider>
    );
}