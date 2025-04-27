import type { NodeRenderer } from "@contentful/rich-text-html-renderer";

export const escapeNewLines = (html: string) =>
  html.replace(/\r\n|\n|\r/g, "<br/>");

export const renderRichTextPicture: NodeRenderer = ({
  data: {
    target: { fields },
  },
}) => {
  if (!fields.file?.url) {
    throw new Error("No file URL found");
  }
  const html = `<picture>
        <source
          srcset="
            ${fields.file?.url}?fm=avif&q=80&w=600&h=800 600w,
            ${fields.file?.url}?fm=avif&q=80&w=1200&h=800 1200w,
            ${fields.file?.url}?fm=avif&q=80&w=1800&h=800 1800w
          " 
          type="image/avif"
          sizes="(max-width: 768px) 600px, (max-width: 1200px) 1200px, 1800px"
        >
        <source 
          srcset="
            ${fields.file?.url}?fm=webp&q=80&w=600&h=800 600w,
            ${fields.file?.url}?fm=webp&q=80&w=1200&h=800 1200w,
            ${fields.file?.url}?fm=webp&q=80&w=1800&h=800 1800w
          " 
          type="image/webp"
          sizes="(max-width: 768px) 600px, (max-width: 1200px) 1200px, 1800px"
        >
        <source 
          srcset="
            ${fields.file?.url}?fm=jpg&q=80&w=600&h=800 600w,
            ${fields.file?.url}?fm=jpg&q=80&w=1200&h=800 1200w,
            ${fields.file?.url}?fm=jpg&q=80&w=1800&h=800 1800w
          " 
          type="image/jpeg"
          sizes="(max-width: 768px) 600px, (max-width: 1200px) 1200px, 1800px"
        >
        <img 
          src="${fields.file?.url}?fm=jpg&q=80&w=1200&h=800" 
          alt="${fields.title}" 
          loading="lazy" 
          style="width: 100%; height: auto;"
        >
      </picture>`;
  return html;
};

export const renderRichTextTable: NodeRenderer = (node, next) => {
  const html = `<div class="overflow-x-auto">
    <table class="table-auto overflow-scroll w-full border-collapse overflow-x-auto">${escapeNewLines(
      next(node.content),
    )}</table>
    </div>`;
  return html;
};
