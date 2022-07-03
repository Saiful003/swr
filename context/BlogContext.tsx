import React, { useContext, useState } from "react";
const BlogContext = React.createContext();

interface AppContextValue {
  isDrawerOpen: boolean;
  openDrawer: () => void;
  closeDrawer: () => void;
}
type props = {
  children: React.ReactNode;
};
export const useBlog = () => useContext(BlogContext);

export function BlogContextProvider({ children }: props) {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const openDrawer = () => setIsDrawerOpen(true);
  const closeDrawer = () => setIsDrawerOpen(false);
  const value: AppContextValue = {
    isDrawerOpen,
    openDrawer,
    closeDrawer,
  };

  return <BlogContext.Provider value={value}>{children}</BlogContext.Provider>;
}

export default BlogContext;
