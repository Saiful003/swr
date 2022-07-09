import classNames from "classnames";
interface IProps {
  hiddenInMobile?: boolean;
  verticalBar?: boolean;
}

function Divider({ hiddenInMobile, verticalBar }: IProps) {
  return (
    <hr
      className={classNames(
        " w-11 mx-auto lg:w-full",
        {
          "hidden lg:block": hiddenInMobile,
        },
        { "md:w-[1px] lg:w-[1px] h-6 bg-gray-300": verticalBar }
      )}
    />
  );
}

export default Divider;
