import { hex } from 'color-convert';
import LabeledInput from '../shared/labeled-input';
import { Dispatch } from 'react';
import { AdjustColorActions } from '../../lib/colorReducer';

type HexToRGBProps = {
  hexColor: string;
  dispatch: Dispatch<AdjustColorActions>
};

const HexToRGB = ({ hexColor, dispatch }: HexToRGBProps) => {
  const color = hex.rgb(hexColor);
  const [r, g, b] = color;

  function updateRGB({ red = r, green = g, blue = b }) {
    dispatch({
      type: 'update-rgb-color',
      payload: {
        rgb: [red, green, blue]
      }
    })
  }

  return (
    <section className="grid w-full grid-flow-col gap-2">
      <LabeledInput label="R" type="number" value={r} onChange={(e) => { updateRGB({ red: e.target.valueAsNumber }) }} />
      <LabeledInput label="G" type="number" value={g} onChange={(e) => { updateRGB({ green: e.target.valueAsNumber }) }} />
      <LabeledInput label="B" type="number" value={b} onChange={(e) => { updateRGB({ blue: e.target.valueAsNumber }) }} />
    </section>
  );
};

export default HexToRGB;
