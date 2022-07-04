import { useBlog } from "../context/BlogContext";

interface IProps {
  active?: boolean;
}

function OverLay({ active }: IProps) {
  const { closeDrawer, isDrawerOpen } = useBlog();
  return (
    <div
      onClick={closeDrawer}
      className={`fixed inset-0 bg-black opacity-0 pointer-events-none  ${
        isDrawerOpen && "opacity-50 pointer-events-auto md:opacity-0"
      } ${active && "opacity-50 pointer-events-auto"} `}
    ></div>
  );
}

export default OverLay;
