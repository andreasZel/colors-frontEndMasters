import { Dispatch } from 'react';
import ColorChangeSwatch from '../shared/color-change-swatch';
import { AdjustColorActions } from '../../lib/colorReducer';

type RelatedColorPaletteProps = {
  title: string;
  hexColors: string[];
  dispatch: Dispatch<AdjustColorActions>;
};

const RelatedColorPalette = ({
  title,
  hexColors,
  dispatch
}: RelatedColorPaletteProps) => {

  function pickColor(hexColor: string) {
    dispatch({ type: 'update-hex-color', payload: { hexColor: hexColor } })
  }

  return (
    <section>
      <h3 className="mb-4">{title}</h3>
      <div className="grid grid-cols-3 gap-2">
        {hexColors.map((hexColor) => {
          return (
            <ColorChangeSwatch
              onClick={() => { pickColor(hexColor) }}
              key={hexColor}
              hexColor={hexColor}
              className="w-full h-full"
            />
          );
        })}
      </div>
    </section>
  );
};

export default RelatedColorPalette;
