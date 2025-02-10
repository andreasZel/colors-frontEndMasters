import Button from '../shared/button';
import ColorChangeSwatch from '../shared/color-change-swatch';

type SavedColorProps = {
  name: string;
  hexColor: string;
  onRemove?: () => void;
};

const SavedColor = ({ name, hexColor, onRemove }: SavedColorProps) => {
  return (
    <article className="flex items-center gap-2 place-content-between">
      <ColorChangeSwatch hexColor={hexColor} />
      <h3 className="text-sm whitespace-nowrap">{name}</h3>
      <Button variant="destructive" size="small" onClick={onRemove}>
        Remove
      </Button>
    </article>
  );
};

export default SavedColor;
