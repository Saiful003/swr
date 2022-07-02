type props = {
  closeDrawer: () => void;
  isDrawerOpen: boolean;
};
function OverLay({ closeDrawer, isDrawerOpen }: props) {
  return (
    <div
      onClick={closeDrawer}
      className={`fixed inset-0 bg-white opacity-0 pointer-events-none md:opacity-0  ${
        isDrawerOpen && "  opacity-40 pointer-events-auto"
      }`}
    ></div>
  );
}

export default OverLay;
