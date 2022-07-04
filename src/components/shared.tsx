export const scrollTo = (id: string, block?: ScrollLogicalPosition) =>
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: block || "start"  });
