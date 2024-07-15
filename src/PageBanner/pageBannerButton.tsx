import { Button, ButtonTypes } from '../Button';

interface PageBannerButtonInterface {
  name?: string;
  buttonName?: string;
  onClick?: () => void;
}
const PageBannerButton = ({
  name,
  buttonName,
  onClick,
}: PageBannerButtonInterface) => {
  if (name || buttonName) {
    return (
      <div className="mt-2.5">
        <p className="text-xs leading-4 font-semibold mt-2.5 text-gray-800">
          {name}
        </p>
        {buttonName && (
          <Button
            onClick={() => onClick?.()}
            className="py-0"
            type={ButtonTypes.link}
          >
            {buttonName}
          </Button>
        )}
      </div>
    );
  }
  return null;
};

export default PageBannerButton;
