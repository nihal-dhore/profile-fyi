import { StaticImageData } from "next/image";
import formals from "#/products/formals.png";
import airJordanRetroSE4 from "#/products/air-jordan-retro-se.png";
import airForce107 from "#/products/air-force-107.png";
import adidasSambaOG from "#/products/adidas-samba-og.png";
import spizikeNow from "#/products/spizike-now.png";
import gelLyte from "#/products/gel-lyte.png";
import WMNJordan from "#/products/wmn-jordan.png";
import asicsEX89 from "#/products/ex89.png";
import podS3 from "#/products/pod-s3.png";
import superstar from "#/products/superstar.png";
import { Product } from "@/lib/types";


export const products: Product[] = [
  {
    id: 1,
    name: "WMN'S AIR JORDAN 1 MID",
    price: 1149500,
    description: "The Air Jordan 1 Mid brings full-court style and premium comfort to an iconic look.",
    image: WMNJordan,
  },
  {
    id: 2,
    name: "AIR JORDAN 4 RETRO SE",
    description: "Bring your concrete dreams to life in an '89 classic.",
    price: 2029500,
    image: airJordanRetroSE4,
    discount: 5
  },
  {
    id: 3,
    name: "AIR FORCE 1 '07",
    description: "The radiance lives on in the Nike Air Force 1 '07.",
    price: 1929500,
    image: airForce107
  },
  {
    id: 4,
    name: "Adidas Samba OG",
    description: "The Samba is a classic sneaker with a sleek design and a comfortable fit.",
    price: 1099999,
    image: adidasSambaOG
  },
  {
    id: 5,
    name: "Spizike Now",
    description: "The Spizike takes elements of five classic Jordans, combines them, and gives you one iconic sneaker.",
    price: 749500,
    image: spizikeNow,
    discount: 7
  },
  {
    id: 6,
    name: "Classic formal Leather shoes",
    description: "Elevate your formal ensemble",
    price: 699591,
    image: formals
  },
  {
    id: 7,
    name: "Gel-Lyte",
    description: "The GEL-LYTE® III OG sneaker resurfaces once again with its original shape and construction that it featured in the early 1990s.",
    price: 749911,
    image: gelLyte
  },
  {
    id: 8,
    name: "Asics EX89",
    description: "The EX89™ sneaker blends the heritage influences of the GEL-EXTREME™ basketball shoe from 1989 with modern cushioning properties.​",
    price: 1149500,
    image: asicsEX89,
    discount: 22
  },
  {
    id: 9,
    name: "Superstar",
    description: "The adidas Superstar ADV is back with a twist on one of the most iconic sneakers of all time.",
    price: 599999,
    image: superstar
  },
  {
    id: 10,
    name: "POD-S3",
    description: "The '90s sensation is back, updated with more style and comfort. ",
    price: 2549500,
    image: podS3,
    discount: 16
  },
];