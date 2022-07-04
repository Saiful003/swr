import useDrawer from "../hooks/useDrawer";

interface IProps {
  active?: boolean;
}

function OverLay({ active }: IProps) {
  const { closeDrawer, isOpenDrawer } = useDrawer();
  return (
    <div
      onClick={closeDrawer}
      className={`fixed inset-0 bg-black opacity-0 pointer-events-none  ${
        isOpenDrawer && "opacity-50 pointer-events-auto md:opacity-0"
      } ${active && "opacity-50 pointer-events-auto"} `}
    ></div>
  );
}

export default OverLay;
