const navElem = document.querySelector(".top-bar-nav");
const mobileButtonElem = document.querySelector(".top-bar-mobile-button");
const mobileMenuElem = document.querySelector(".top-bar-mobile-menu");
let prevScrollTop = document.documentElement.scrollTop;
let isMobileMenuOpen = false;
const className = "bg-white";
const scrollDownTreshold = 200;
const scrollUpTreshold = 100;

document.addEventListener("scroll", () => {
  if (isMobileMenuOpen) {
    return;
  }

  const currScrollTop = document.documentElement.scrollTop;
  const scrollDir = currScrollTop > prevScrollTop ? "down" : "up";
  const isPastUpAddTreshold =
    scrollDir === "up" && currScrollTop > scrollDownTreshold;
  const isPastDownRemoveTreshold = scrollDir === "down";
  const isPastUpRemoveTreshold =
    scrollDir === "up" && currScrollTop < scrollUpTreshold;

  if (!navElem?.classList.contains(className) && isPastUpAddTreshold) {
    navElem?.classList.add(className);
  }

  if (
    navElem?.classList.contains(className) &&
    (isPastDownRemoveTreshold || isPastUpRemoveTreshold)
  ) {
    navElem?.classList.remove(className);
  }

  prevScrollTop = currScrollTop;
});

mobileButtonElem?.addEventListener("click", () => {
  if (!isMobileMenuOpen) {
    mobileMenuElem?.classList.remove("hidden");
    navElem?.classList.add(className);
    document.documentElement.style["overflow"] = "hidden";

    setTimeout(() => {
      mobileMenuElem?.classList.remove("opacity-0");
      mobileMenuElem?.classList.add("opacity-100");
      isMobileMenuOpen = true;
    }, 1);
  } else {
    mobileMenuElem?.classList.add("opacity-0");
    mobileMenuElem?.classList.remove("opacity-100");
    navElem?.classList.remove(className);
    document.documentElement.style["overflow"] = "auto";

    setTimeout(() => {
      mobileMenuElem?.classList.add("hidden");
      isMobileMenuOpen = false;
    }, 300);
  }
});
