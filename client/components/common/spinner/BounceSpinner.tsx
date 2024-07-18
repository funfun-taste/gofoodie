import { BounceLoader } from "react-spinners";
import { ReactElement } from "react";

type Props = {
  color?: string;
  isLoading?: boolean;
  size?: number;
};

const color = "#FF7101";

export const BounceSpinner = (props: Props): ReactElement => {
  const { isLoading = true, size = 30 } = props;
  return (
    <BounceLoader
      color={color}
      loading={isLoading}
      size={size}
      speedMultiplier={0.8}
      aria-label="Loading Spinner"
      data-testid="loader"
    />
  );
};
