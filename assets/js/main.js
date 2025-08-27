const prefersDarkScheme = window.matchMedia(
  "(prefers-color-scheme: dark)"
).matches;
document.documentElement.setAttribute(
  "data-theme",
  prefersDarkScheme ? "dark" : "light"
);

document.addEventListener("DOMContentLoaded", function () {
  const codeBlocks = document.querySelectorAll("pre");

  codeBlocks.forEach((codeBlock) => {
    if (codeBlock.className == "mermaid") return;
    const copyButton = document.createElement("button");
    copyButton.className = "copy-code-button";
    copyButton.textContent = "copy";
    codeBlock.appendChild(copyButton);
    copyButton.addEventListener("click", function () {
      const code = codeBlock.querySelector("code");
      const textToCopy = code.textContent || code.innerText;
      navigator.clipboard
        .writeText(textToCopy)
        .then(() => {
          copyButton.textContent = "copied";
          setTimeout(() => {
            copyButton.textContent = "copy";
          }, 2000);
        })
        .catch((err) => {
          console.error("Unable to copy text:", err);
        });
    });
  });
});
