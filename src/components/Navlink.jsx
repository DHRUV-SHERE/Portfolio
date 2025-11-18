import { NavLink as RouterNavLink } from "react-router-dom";
import { forwardRef } from "react";

const NavLink = forwardRef(({ 
  className, 
  activeClassName, 
  pendingClassName, 
  to, 
  ...props 
}, ref) => {
  return (
    <RouterNavLink
      ref={ref}
      to={to}
      className={({ isActive, isPending }) => {
        let classes = className || '';
        if (isActive && activeClassName) classes += ` ${activeClassName}`;
        if (isPending && pendingClassName) classes += ` ${pendingClassName}`;
        return classes.trim();
      }}
      {...props}
    />
  );
});

NavLink.displayName = "NavLink";

export { NavLink };