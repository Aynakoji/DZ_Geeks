document.addEventListener("DOMContentLoaded", () => {
    const input = document.querySelector("#inputText");
    const output = document.querySelector("#outputText");

    input.addEventListener("input", () => {
      const inputArray = Array.from(input.value);
      let reversedText = "";
      inputArray.forEach((char) => {
        reversedText = char + reversedText;
      });
      output.textContent = reversedText;
    });
  });