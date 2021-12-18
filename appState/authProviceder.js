import React, { createContext, useState, useEffect } from "react";
import Router from "next/router";

export const AuthContext = createContext();

const AuthProvider = ({ children, userData }) => {
 
  return (
    <AuthContext.Provider
      value={{
        
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;