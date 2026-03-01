/**
 * Client Logos Data
 * All partner and client logos for the carousel
 *
 * Cloudinary URLs - transparent PNGs (no background)
 */

export interface Client {
  name: string;
  logo: string;
}

const CDN = "https://res.cloudinary.com/dfudxxzlj/image/upload/q_auto,f_auto,w_250";

export const clients: Client[] = [
  // Academic Partners
  { name: "אוניברסיטת חיפה", logo: `${CDN}/v1770982317/workshop-clients/client-29.png` },
  { name: "הטכניון", logo: `${CDN}/v1770982356/workshop-clients/client-123546321.png` },
  { name: "אגודת הסטודנטים חיפה", logo: `${CDN}/v1770982106/workshop-clients/client-37.png` },
  { name: "דיקנאט הסטודנטים", logo: `${CDN}/v1770982263/workshop-clients/client-36.png` },
  { name: "ויצו הדסים", logo: `${CDN}/v1770981977/workshop-clients/client-32.png` },
  { name: "סאקסס קולג'", logo: `${CDN}/v1770982350/workshop-clients/client-25.png` },

  // Business Partners
  { name: "דיקיפר", logo: `${CDN}/v1764239335/40_xskhce.png` },
  { name: "ג'ונגל סיטי", logo: `${CDN}/v1764239334/38_ornkqc.png` },
  { name: "BBBABY", logo: `${CDN}/v1772374432/%D7%94%D7%95%D7%A8%D7%93%D7%94__5_-removebg-preview_ohgatj.png` },
  { name: "דרכא", logo: `${CDN}/v1770981996/workshop-clients/client-34.png` },
  { name: "היסוד הבסיסי", logo: `${CDN}/v1770982387/workshop-clients/client-31.png` },
  { name: "ניומארק", logo: `${CDN}/v1770982344/workshop-clients/client-28.png` },
  { name: "IJUMP", logo: `${CDN}/v1772374335/Logo-iJump_k7ahkw.png` },
  { name: "רשגד", logo: `${CDN}/v1772374282/%D7%94%D7%95%D7%A8%D7%93%D7%94__2_-removebg-preview_tziibd.png` },
];

export default clients;
