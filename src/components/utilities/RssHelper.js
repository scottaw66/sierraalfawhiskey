import config from "config";
import path from "path";

export function linkTag(linkUrl) {
  return `<link>${linkUrl}</link>`;
}

export function cdataTag(cdata) {
  return `<![CDATA[ ${cdata} ]]>`;
}
