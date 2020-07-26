const now = `${new Date().toLocaleString("en", {
  month: "short",
})} ${new Date().getDate()}, ${new Date().getFullYear()} `;

export const today = () => now;

export const yesterday = () =>
  `${new Date().toLocaleString("en", {
    month: "short",
  })} ${new Date().getDate() - 1}, ${new Date().getFullYear()} `;

export const lastSevenDays = () =>
  `${new Date().toLocaleString("en", {
    month: "short",
  })} ${new Date().getDate() - 7}, ${new Date().getFullYear()} - ${now}`;
