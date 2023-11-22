import React from "react";
import { ToastShelfContext } from "../components/ToastProvider/ToastProvider";

export default function useToast() {
  const { addToast } = React.useContext(ToastShelfContext);

  return { show: addToast };
}
