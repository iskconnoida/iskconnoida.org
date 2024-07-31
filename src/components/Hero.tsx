import { useEffect } from "react";

export default function Hero() {
  let imgURL: string = "";
  switch (new Date().getUTCDay()) {
    case 0:
      imgURL =
        "https://scontent.fdel1-7.fna.fbcdn.net/v/t39.30808-6/300504271_5312201468829129_2453433494748064935_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=127cfc&_nc_ohc=cNLHDDp-l8cQ7kNvgHWBWGn&_nc_ht=scontent.fdel1-7.fna&oh=00_AYCDijdujBhoGV5FZjPmAlEuhWHdkSlCWEYc75ggqpcRTQ&oe=66AE5603";
      break;
    case 1:
      imgURL =
        "https://scontent.fdel1-6.fna.fbcdn.net/v/t39.30808-6/453240686_889798303174722_759796011587527823_n.jpg?stp=cp6_dst-jpg&_nc_cat=109&ccb=1-7&_nc_sid=833d8c&_nc_ohc=_lldBN-_7mEQ7kNvgEWTBpW&_nc_ht=scontent.fdel1-6.fna&oh=00_AYD44FmKkGYMhR19-IJW3Rds3sq2ffC2wc_0w54olG4PkQ&oe=66AE6B50";
      break;
    case 2:
      imgURL =
        "/tue.jpg";
      break;
    case 3:
      imgURL =
        "https://scontent.fdel1-5.fna.fbcdn.net/v/t39.30808-6/340836848_1696396797448115_6135273469949545046_n.jpg?stp=dst-jpg_s960x960&_nc_cat=108&ccb=1-7&_nc_sid=cc71e4&_nc_ohc=rbr93znR-KkQ7kNvgEA66Ij&_nc_ht=scontent.fdel1-5.fna&oh=00_AYCJPt5GFvNG9hqjWu84rJJkIREGI-FVBCCKuk0Z9Qr_Dw&oe=66AE59EF";
      break;
    case 4:
      imgURL =
        "https://scontent.fdel1-8.fna.fbcdn.net/v/t39.30808-6/453189964_888963886591497_3994969147678098084_n.jpg?stp=cp6_dst-jpg&_nc_cat=101&ccb=1-7&_nc_sid=833d8c&_nc_ohc=z5RFHgGBPdgQ7kNvgEk5uiS&_nc_ht=scontent.fdel1-8.fna&oh=00_AYBTVX_cE-i4A5D9iaac3SHChtVC08pQjR8t72ohIytn1A&oe=66AE7226";
      break;
    case 5:
      imgURL =
        "https://scontent.fdel1-5.fna.fbcdn.net/v/t39.30808-6/452690905_886501713504381_221418421788344303_n.jpg?stp=cp6_dst-jpg&_nc_cat=108&ccb=1-7&_nc_sid=833d8c&_nc_ohc=OvBCc1-TwO4Q7kNvgFMDOpf&_nc_ht=scontent.fdel1-5.fna&oh=00_AYB5-CcnnkeL5yDebYL3fkMWalypj6PTZeFmrLi_kduWAw&oe=66AE7803";
      break;
    case 6:
      imgURL =
        "https://scontent.fdel1-5.fna.fbcdn.net/v/t39.30808-6/452281444_884673193687233_553685358512617500_n.jpg?stp=cp6_dst-jpg&_nc_cat=110&ccb=1-7&_nc_sid=833d8c&_nc_ohc=6EXvG2Z9rV0Q7kNvgF89njj&_nc_ht=scontent.fdel1-5.fna&gid=AORX0eAmoq5zboJgHS5Fa7z&oh=00_AYDfrNVstKN0uRK3DDHB93Xq94WfKWP21peD8efYMGYFyA&oe=66AE648B";
      break;
  }

  useEffect(() => {
    console.log(document.getElementById("hero"));
    document.getElementById("hero")!.style.backgroundImage = `url(${imgURL})`;
  }, [imgURL]);

  return (
    <>
      <div id="hero" className="h-screen flex w-screen bg-center bg-no-repeat bg-cover">
        <div className="bg-gradient-to-b from-transparent to-gray-800 text-4xl font-bold text-rose-100 text-shadow-xl shadow-red-300 flex justify-center items-end mt-auto py-14 px-4 h-1/2 w-full">
          WELCOME TO SRI SRI RADHA GOVIND DEV JI TEMPLE
        </div>
      </div>
    </>
  );
}
