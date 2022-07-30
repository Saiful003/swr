type props = {
  children: React.ReactNode;
};

function Layout({ children }: props) {
  return <div>{children}</div>;
}

export default Layout;
