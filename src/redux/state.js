import img1 from './Wheat_flour_Extra.jpg';
import img2 from './Wheat_flour_premium_grade_M_54-28.jpg';
import img3 from './Wheat_flour_premium_grade_M_54-25.jpg';
import img4 from './Wheat_flour_1_grade_М_36-30.jpg';
import img5 from './Wheat_flour_1_grade_М_36-27.jpg';
import img6 from './Wheat_flour_2_grade_М_12-25.jpg';

let state = {
    data: [],
    productData: [
        {id: 0, name: "Мука пшеничная «Экстра»", cost: 0.95, oldcost: 1.25, img: img1},
        {id: 1, name: "Мука пшеничная высший сорт М 54-28", cost: 0.85, oldcost: 1.05, img: img2},
        {id: 2, name: "Мука пшеничная высший сорт М 54-25", cost: 1.00, oldcost: 1.50, img: img3},
        {id: 3, name: "Мука пшеничная 1 сорт М 36-30", cost: 1.15, oldcost: 1.85, img: img4},
        {id: 4, name: "Мука пшеничная 1 сорт М 36-27", cost: 0.95, oldcost: 1.35, img: img5},
        {id: 5, name: "Мука пшеничная 2 сорт М 12-25", cost: 0.75, img: img6},
      ]
}

/*let gs = async () => {
  let response = await fetch("/selectproducts");
  let data = await response.json();
  console.log(data);
}

gs();*/

export default state;