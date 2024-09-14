import React from "react";
import ImageNews1 from "../../assets/ImageNews1.jpg";
import ImageNews2 from "../../assets/ImageNews2.jpg";
import ImageNews3 from "../../assets/ImageNews3.jpg";
import NewsCard from "./NewsCard";
function NewsPage() {
  const newsData = [
    {
      id: 1,
      title1: "AI Revolution Expands",
      title2: "Global companies adopt new technologies",
      image: ImageNews1,
      para: "Artificial Intelligence continues to grow, impacting industries worldwide with transformative innovations.",
    },
    {
      id: 2,
      title1: "Quantum Computing Advances",
      title2: "Researchers push boundaries of science",
      image: ImageNews2,
      para: "Quantum computing technology reaches new milestones, offering unprecedented computational power and potential breakthroughs.",
    },
    {
      id: 3,
      title1: "5G Networks Rollout",
      title2: "Telecom giants launch faster services",
      image: ImageNews3,
      para: "5G networks promise faster connectivity, transforming mobile communications, smart cities, and remote work capabilities.",
    },
  ];
  return (
    <div>
      <div className="container">
        <div className="py-10">
          <h1 className="text-3xl font-bold text-center ">
            News Articles
          </h1>
          <p className="text-center text-gray-400 py-3">
            Recieved from tech Gadget news publishers
          </p>
          <div className="py-14">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {newsData.map((item, index) => (
                <div key={index}>
                  <NewsCard
                    title1={item.title1}
                    title2={item.title2}
                    image={item.image}
                    para={item.para}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewsPage;
