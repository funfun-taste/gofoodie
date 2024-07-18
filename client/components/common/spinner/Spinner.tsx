import { CSSProperties, ReactElement } from "react";
import { MoonLoader } from "react-spinners";

const override: CSSProperties = {
  display: "block",
  margin: "2em auto",
  borderColor: "red",
};

type Props = {
  color?: string;
  isLoading?: boolean;
};

const color = "#FF7101";

export const Spinner = (props: Props): ReactElement => {
  const { isLoading = true } = props;

  return (
    <MoonLoader
      color={color}
      loading={isLoading}
      cssOverride={override}
      size={30}
      speedMultiplier={0.8}
      aria-label="Loading Spinner"
      data-testid="loader"
    />
  );
};
