import React from "react";
import Item from "./Item";

const MainContent = props => {
  const text1 =
    "Nam pellentesque metus sit amet gravida rutrum. Duis sit amet augue eu arcu imperdiet facilisis. Nam ullamcorper orci non lacinia tincidunt. Donec volutpat sodales felis, id ornare arcu varius et. Nulla eleifend elit orci. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Vivamus vitae enim tortor. Donec euismod lectus ut nisi aliquam dictum. Nulla urna metus, elementum aliquet erat et, vulputate scelerisque lacus. Phasellus euismod orci sit amet velit aliquam porttitor.";
  const text2 =
    "Donec nec enim id est mollis auctor. Cras ut sem at tellus aliquam dapibus. Nunc eleifend sit amet mauris eget rhoncus. Nunc non tristique turpis, a sodales libero. Nullam imperdiet tortor dictum, vulputate justo non, pharetra lorem. Donec at sapien egestas, cursus erat ac, pretium mauris. In consequat nunc ut elit ultrices, sollicitudin pellentesque elit pellentesque. Vivamus pretium maximus dui in facilisis. Duis non congue risus, eu interdum dui. Nunc a tristique libero, ac ultricies lacus. Fusce sed turpis metus. Donec consectetur tortor eget ipsum sagittis interdum. Phasellus vehicula, dolor id dapibus tempus, leo nisl pulvinar nulla, ut hendrerit velit ipsum et ipsum. Curabitur vel arcu at sapien gravida pulvinar sed a metus.";

  return (
    <div className="main-content">
      <Item
        descriptionName="Title description"
        text={text1}
        name="TITLE HEADING"
      ></Item>
      <Item
        descriptionName="Title description"
        text={text2}
        name="TITLE HEADING"
      ></Item>
    </div>
  );
};

export default MainContent;
