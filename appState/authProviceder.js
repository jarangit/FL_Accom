import React, { createContext, useState, useEffect } from "react";
import Router from "next/router";

export const AuthContext = createContext();

const AuthProvider = ({ children, userData }) => {
 const [openFilter_mb, setopenFilter_mb] = useState(false)
  return (
    <AuthContext.Provider
      value={{
        openFilter_mb, setopenFilter_mb,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;