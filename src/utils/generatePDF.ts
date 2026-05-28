import { toPng } from "html-to-image";
import { jsPDF } from "jspdf";

export const generatePDF = async (elementToPrintId: string) => {
  const element = document.getElementById(elementToPrintId);
  if (!element)
    throw new Error(`Element with id ${elementToPrintId} not found`);

  const parent = element.parentElement;
  const prevOverflow = parent?.style.overflow ?? "";
  const prevHeight = parent?.style.height ?? "";

  if (parent) {
    parent.style.overflow = "visible";
    parent.style.height = "auto";
  }

  await new Promise((resolve) => setTimeout(resolve, 100));

  const imgData = await toPng(element, {
    quality: 1,
    pixelRatio: 2,
    backgroundColor: "#18181b",
  });

  if (parent) {
    parent.style.overflow = prevOverflow;
    parent.style.height = prevHeight;
  }

  const pdf = new jsPDF({ orientation: "portrait", unit: "px", format: "a4" });

  const pageWidth = pdf.internal.pageSize.getWidth();
  const pageHeight = pdf.internal.pageSize.getHeight();

  const img = new Image();
  img.src = imgData;
  await new Promise((resolve) => (img.onload = resolve));

  const imgHeight = (img.height * pageWidth) / img.width;
  let position = 0;

  while (position < imgHeight) {
    pdf.addImage(imgData, "PNG", 0, -position, pageWidth, imgHeight);
    position += pageHeight;
    if (position < imgHeight) pdf.addPage();
  }

  pdf.save("document.pdf");
};
