import { rgb } from 'color-convert';

type UpdateHexColorAction = {
    type: 'update-hex-color';
    payload: {
        hexColor: string;
    };
};

type UpdateRGBColorAction = {
    type: 'update-rgb-color';
    payload: {
        rgb: [number, number, number];
    };
};

type ColorState = {
    hexColor: string;
}

export const InitialState: ColorState = {
    hexColor: '#BADA55'
};

export const colorReducer = (state: ColorState = InitialState, action: UpdateHexColorAction | UpdateRGBColorAction) => {

    if (action.type === 'update-hex-color') {
        const { hexColor } = action.payload;

        return { ...state, hexColor };
    }

    if (action.type === 'update-rgb-color') {
        const hexColor = rgb.hex(action.payload.rgb);

        return { ...state, hexColor };
    }

    return state;
}