import { useReducer, useState } from 'react';
import SavedColors from './saved-colors';
import RelatedColors from './related-colors';
import AdjustColors from './adjust-colors';
import ColorPicker from './color-picker';
import { colorReducer, InitialState } from '../lib/colorReducer';

const Application = () => {
  const [{ hexColor }, dispatch] = useReducer(colorReducer, InitialState);

  return (
    <div className="grid max-w-3xl grid-cols-1 gap-8 p-8 pb-40 mx-auto dark:bg-slate-900 dark:text-white sm:grid-cols-2">
      <ColorPicker
        hexColor={hexColor}
        onChange={(e) => dispatch({
          type: 'update-hex-color',
          payload: { hexColor: e.target.value }
        })}
      />
      <AdjustColors dispatch={dispatch} hexColor={hexColor} />
      <RelatedColors dispatch={dispatch} hexColor={hexColor} />
      <SavedColors hexColor={hexColor} />
    </div>
  );
};

export default Application;
