import React, { useContext, useState } from "react";
const BlogContext = React.createContext();

export const useBlog = () => useContext(BlogContext);

type props = {
  children: React.ReactNode;
};
export function BlogContextProvider({ children }: props) {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const openDrawer = () => setIsDrawerOpen(true);
  const closeDrawer = () => setIsDrawerOpen(false);
  const value = {
    isDrawerOpen,
    openDrawer,
    closeDrawer,
  };

  return <BlogContext.Provider value={value}>{children}</BlogContext.Provider>;
}

export default BlogContext;
