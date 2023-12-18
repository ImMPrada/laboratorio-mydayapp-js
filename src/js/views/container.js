import { main } from "./containerComponents/main";
import { footer } from "./containerComponents/footer";

const ID = "container";

export const renderContent = (toDos) => {
  const container = document.getElementById(ID);
  if (!container) return;

  container.innerHTML = "";

  const mainSection = main(toDos);
  if (mainSection) container.appendChild(mainSection);

  const footerSection = footer(toDos);
  if (footerSection) container.appendChild(footerSection);
};
