import React, { createContext, useState, useEffect } from "react";
import Router from "next/router";

export const AuthContext = createContext();

const AuthProvider = ({ children, userData }) => {
  const [openFilter_mb, setopenFilter_mb] = useState(false);
  const [open_form_filter_mb, setopen_form_filter_mb] = useState(false);
  const [data_selected, setdata_selected] = useState({
    min: "",
    max: "",
  });
  const [data_check_rent, setdata_check_rent] = useState("Rent");
  const [onCheckedContactForm, setonCheckedContactForm] = useState(false);
  const [onConpleteContactForm, setonConpleteContactForm] = useState(false);
  const [gobal_filter_menu_api, setgobal_filter_menu_api] = useState([]);
  const [Gobal_search_filter_api, setGobal_search_filter_api] = useState([]);
  return (
    <AuthContext.Provider
      value={{
        openFilter_mb,
        setopenFilter_mb,
        open_form_filter_mb,
        setopen_form_filter_mb,
        data_selected,
        setdata_selected,
        onCheckedContactForm,
        setonCheckedContactForm,
        onConpleteContactForm,
        setonConpleteContactForm,
        data_check_rent,
        setdata_check_rent,
        gobal_filter_menu_api,
        setgobal_filter_menu_api,
        Gobal_search_filter_api,
        setGobal_search_filter_api,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
