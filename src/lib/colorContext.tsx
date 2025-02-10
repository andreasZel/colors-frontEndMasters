import { createContext, Dispatch, PropsWithChildren, useReducer } from "react";
import { AdjustColorActions, colorReducer, ColorState, InitialState } from "./colorReducer";

type ColorContextState = ColorState & {
    dispatch: Dispatch<AdjustColorActions>
}
export const ColorContext = createContext<ColorContextState>(InitialState as ColorContextState);

export const ColorProvider = ({ children }: PropsWithChildren) => {
    const [state, dispatch] = useReducer(colorReducer, InitialState);
    const hexColor = state.hexColor;

    return (
        <ColorContext.Provider value={{ hexColor, dispatch }} >
            {children}
        </ColorContext.Provider>
    );
}