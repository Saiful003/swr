import classNames from "classnames";
import { useTheme } from "../hooks/useTheme";
interface IProps {
  hiddenInMobile?: boolean;
  verticalBar?: boolean;
}

function Divider({ hiddenInMobile, verticalBar }: IProps) {
  const { light } = useTheme();
  return (
    <hr
      className={classNames(
        " w-11 mx-auto lg:w-full",
        { "border-gray-500": !light },
        {
          "hidden lg:block": hiddenInMobile,
        },
        { "md:w-[1px] lg:w-[1px] h-6 bg-gray-300": verticalBar }
      )}
    />
  );
}

export default Divider;
