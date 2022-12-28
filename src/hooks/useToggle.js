import { useState } from "react";

export default function useToggle(init = false) {
  const [showForm, setShowForm] = useState(init);
  const toggle = () => {
    setShowForm(!showForm);
  };

  return [showForm, toggle];
}
