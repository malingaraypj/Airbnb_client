import { useRef } from "react";
import { Card, CardContent } from "../ui/card";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";

const images = [
  "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTAxNzE5MzUzOTc4Mzc1Mjg2OQ%3D%3D/original/b8d3c893-645e-4b9b-bf82-fcc44cacac75.jpeg?im_w=720",
  "https://a0.muscache.com/im/pictures/miso/Hosting-996188548232465799/original/7af3cb62-3af3-4c10-bd7f-ef4ad06ece66.png?im_w=1200",
  "https://a0.muscache.com/im/pictures/miso/Hosting-1221509654923026113/original/b1bc1299-9df3-4108-990c-9a5cf3755d82.jpeg?im_w=720",
  "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTAxNzE5MzUzOTc4Mzc1Mjg2OQ%3D%3D/original/2cb53de7-73e5-4a6e-8fad-7ef5d770ae3c.png?im_w=720",
  "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTAxNzE5MzUzOTc4Mzc1Mjg2OQ%3D%3D/original/ad6922a6-e024-41a7-bf67-d24a00314a42.jpeg?im_w=720",
  "https://a0.muscache.com/im/pictures/miso/Hosting-996188548232465799/original/7af3cb62-3af3-4c10-bd7f-ef4ad06ece66.png?im_w=720",
  "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTAxNzE5MzUzOTc4Mzc1Mjg2OQ%3D%3D/original/bbb83779-797d-4217-a21c-9a869b279860.jpeg?im_w=1200",
  "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTAxNzE5MzUzOTc4Mzc1Mjg2OQ%3D%3D/original/b8d3c893-645e-4b9b-bf82-fcc44cacac75.jpeg?im_w=720",
  "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTAxNzE5MzUzOTc4Mzc1Mjg2OQ%3D%3D/original/b8d3c893-645e-4b9b-bf82-fcc44cacac75.jpeg?im_w=720",
  "https://a0.muscache.com/im/pictures/miso/Hosting-996188548232465799/original/7af3cb62-3af3-4c10-bd7f-ef4ad06ece66.png?im_w=1200",
  "https://a0.muscache.com/im/pictures/miso/Hosting-996188548232465799/original/7af3cb62-3af3-4c10-bd7f-ef4ad06ece66.png?im_w=1200",
];

function ItemCards() {
  const scrollRef = useRef<HTMLDivElement>(null);
  function handleScrollLeft() {
    scrollRef.current?.scrollBy({ left: -300, behavior: "smooth" });
  }
  function handleScrollRight() {
    scrollRef.current?.scrollBy({ left: 300, behavior: "smooth" });
  }
  return (
    <Card>
      <CardContent className="h-10 py-0 flex justify-between items-center ">
        <div>
          <h2 className="text-2xl font-semibold whitespace-nowrap">
            Popular stays
          </h2>
        </div>
        <div className="flex w-full justify-end">
          <IoIosArrowBack
            onClick={handleScrollLeft}
            size={24}
            className="cursor-pointer"
          />
          <IoIosArrowForward
            onClick={handleScrollRight}
            size={24}
            className="cursor-pointer"
          />
        </div>
      </CardContent>
      <CardContent
        ref={scrollRef}
        className="flex gap-4 px-4 w-full flex-nowrap overflow-x-auto scroll-smooth no-scrollbar"
      >
        {images.map((src, index) => (
          <ItemCard key={index} src={src} index={index} />
        ))}
      </CardContent>
    </Card>
  );
}

export default ItemCards;

function ItemCard({ src, index }: { src: string; index: number }) {
  return (
    <Card className="p-0 shrink-0 w-[20%] h-40">
      <CardContent className="p-1 w-full h-full">
        <img
          src={src}
          alt={`Item ${index + 1}`}
          className="w-full h-full object-cover rounded-lg "
        />
      </CardContent>
    </Card>
  );
}
