import classNames from "classnames";
import { useAppSelector } from "../hooks/redux-hooks/tsVersionHooks";

interface IProps {
  hiddenInMobile?: boolean;
  verticalBar?: boolean;
}

function Divider({ hiddenInMobile, verticalBar }: IProps) {
  const { siteTheme } = useAppSelector((state) => state);
  const { light } = siteTheme;
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
