// 모든 페이지가 로드될 때 localStorage에 저장된 접근성 설정을 읽어와 body에 적용
document.addEventListener("DOMContentLoaded", () => {
  const fontSize = localStorage.getItem("acc_font_size") || "regular";
  const restingMode = localStorage.getItem("acc_resting_mode") === "true";
  const colorBlindness = localStorage.getItem("acc_color_blindness") || "none";

  document.body.setAttribute("data-font-size", fontSize);
  document.body.setAttribute("data-resting-mode", restingMode);
  document.body.setAttribute("data-color-blindness", colorBlindness);
});