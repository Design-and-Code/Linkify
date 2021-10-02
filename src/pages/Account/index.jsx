import React, { useEffect } from "react";

export default function Account() {
  useEffect(() => {
    document.title = "Linkify | Accounts";
  }, []);
  return <div>Accounts</div>;
}
