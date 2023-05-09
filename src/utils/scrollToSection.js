const scrollToSection = async (elementRef) => {
  // await new Promise((resolve) => setTimeout(resolve, 250));
  if (elementRef) {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: "smooth",
    });
    return;
  } else {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    return;
  }
};
export default scrollToSection;
