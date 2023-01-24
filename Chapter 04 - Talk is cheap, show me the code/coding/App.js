// ## Namaste React Course by Akshay Saini
// # Chapter 04 - Talk is cheap, show me the code
import React from "react";
import ReactDOM from "react-dom/client";
const Title = () => {
  return (
    <h1 id="title" key="2">
      Food App
    </h1>
  );
};

const Header = () => {
  return (
    <div className="header">
      <Title />
      <ul className="nav-items">
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
        <li>Cart</li>
      </ul>
    </div>
  );
};

// Optional Chaining
// const RestaurantCard = (props) => {
//   console.log(props)
//   return (
//     <div className="card">
//       <img src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/"+props.restaurant.data?.cloudinaryImageId} alt="" />
//       <div className="content">
//         <h2>{props.restaurant.data?.name}</h2>
//         <h3>{props.restaurant.data?.cuisines.join(", ")}</h3>
//         <h4>{props.restaurant.data?.lastMileTravelString} minutes</h4>
//       </div>
//     </div>
//   );
// };

// object destructuring on the fly
const RestaurantCard = ({name, cuisines, cloudinaryImageId, lastMileTravelString}) => { //data destructuring instead of using props keyword
  return (
    <div className="card">
      <img src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/"+cloudinaryImageId} alt="" />
      <div className="content">
        <h2>{name}</h2>
        <h3>{cuisines.join(", ")}</h3>
        <h4>{lastMileTravelString} minutes</h4>
      </div>
    </div>
  );
};

// props - properties (passing some data or properties into functional components)
const Body = () => {
  return (
    <div>
      {/* <div className="restaurant-grid">
        <RestaurantCard 
          cloudinaryImageId={restaurantList[0].data.cloudinaryImageId}
          name = {restaurantList[0].data.name} 
          cuisines = {restaurantList[0].data.cuisines}
          lastMileTravelString = {restaurantList[0].data.lastMileTravelString}
        />
        <RestaurantCard 
          cloudinaryImageId={restaurantList[1].data.cloudinaryImageId}
          name = {restaurantList[1].data.name} 
          cuisines = {restaurantList[1].data.cuisines}
          lastMileTravelString = {restaurantList[1].data.lastMileTravelString}
        />
        <RestaurantCard 
          cloudinaryImageId={restaurantList[2].data.cloudinaryImageId}
          name = {restaurantList[2].data.name} 
          cuisines = {restaurantList[2].data.cuisines}
          lastMileTravelString = {restaurantList[2].data.lastMileTravelString}
        />
        <RestaurantCard 
          cloudinaryImageId={restaurantList[3].data.cloudinaryImageId}
          name = {restaurantList[3].data.name} 
          cuisines = {restaurantList[3].data.cuisines}
          lastMileTravelString = {restaurantList[3].data.lastMileTravelString}
        />
      </div> */}

      {/* using spread operator */}
      {/* <div className="restaurant-grid">
        <RestaurantCard {...restaurantList[0].data}/>
        <RestaurantCard {...restaurantList[1].data}/>
        <RestaurantCard {...restaurantList[2].data}/>
        <RestaurantCard {...restaurantList[3].data}/>
      </div> */}

      {/* using map */}
      <div className="restaurant-grid">
        {
          restaurantList.map(restaurant => <RestaurantCard {...restaurant.data}/>)
        }
      </div>
    </div>
  );
};
const Footer = () => {
  return (
  <>
  </>
    )
};

const restaurantList = [
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "599133",
      name: "Doon Darbar",
      uuid: "6590d88a-effc-4bc9-a294-d5a6517824b6",
      city: "22",
      area: "Shimla Bypass Chowk",
      totalRatingsString: "100+ ratings",
      cloudinaryImageId: "lzacctllikcgp8xpvzla",
      cuisines: ["North Indian", "Chinese"],
      tags: [],
      costForTwo: 30000,
      costForTwoString: "₹300 FOR TWO",
      deliveryTime: 22,
      minDeliveryTime: 22,
      maxDeliveryTime: 22,
      slaString: "22 MINS",
      lastMileTravel: 1.600000023841858,
      slugs: {
        restaurant: "doon-darbar-deh_patel-nagar-deh_patel-nagar",
        city: "dehradun",
      },
      cityState: "22",
      address:
        "PRADHAN JI WALI GALI MAJRA NEAR BASIT HARDWARE, DEHRADUN Uttarakhand - 248001",
      locality: "Deh_Patel Nagar",
      parentId: 13207,
      unserviceable: false,
      veg: false,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      aggregatedDiscountInfo: {
        header: "60% off",
        shortDescriptionList: [
          {
            meta: "60% off | Use TRYNEW",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "60% off up to ₹120 | Use code TRYNEW",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      aggregatedDiscountInfoV2: {
        header: "60% OFF",
        shortDescriptionList: [
          {
            meta: "Use TRYNEW",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "60% off up to ₹120 | Use code TRYNEW",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      ribbon: [
        {
          type: "PROMOTED",
        },
      ],
      chain: [],
      feeDetails: {
        fees: [],
        totalFees: 0,
        message: "",
        title: "",
        amount: "",
        icon: "",
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: "",
      },
      longDistanceEnabled: 0,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "cid=5669342~p=1~eid=00000185-dea6-e110-0074-e53000c10156",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "1.6 kms",
      hasSurge: false,
      sla: {
        restaurantId: "599133",
        deliveryTime: 22,
        minDeliveryTime: 22,
        maxDeliveryTime: 22,
        lastMileTravel: 1.600000023841858,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: true,
      avgRating: "3.5",
      totalRatings: 100,
      new: false,
    },
    subtype: "basic",
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "542132",
      name: "Domnik Pizza",
      uuid: "f2ee37f5-9ab0-4903-9420-6cae020b0a38",
      city: "22",
      area: "Majra    Bansal Home",
      totalRatingsString: "50+ ratings",
      cloudinaryImageId: "sboh9oor0cvp6ztsyhvj",
      cuisines: ["Pizzas", "Italian", "Fast Food", "Snacks", "Beverages"],
      tags: [],
      costForTwo: 30000,
      costForTwoString: "₹300 FOR TWO",
      deliveryTime: 28,
      minDeliveryTime: 28,
      maxDeliveryTime: 28,
      slaString: "28 MINS",
      lastMileTravel: 0.6000000238418579,
      slugs: {
        restaurant: "domnik-pizza-patel-nagar-patel-nagar-2",
        city: "dehradun",
      },
      cityState: "22",
      address:
        "28/3 Sewala Chandravani Road, Arcedia Grant, Dehradun Rural, Dehradun, Uttarakhand",
      locality: "Patel Nagar",
      parentId: 22321,
      unserviceable: false,
      veg: false,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      aggregatedDiscountInfo: {
        header: "50% off",
        shortDescriptionList: [
          {
            meta: "50% off | Use WELCOME50",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "50% off up to ₹80 | Use code WELCOME50",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      aggregatedDiscountInfoV2: {
        header: "50% OFF",
        shortDescriptionList: [
          {
            meta: "Use WELCOME50",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "50% off up to ₹80 | Use code WELCOME50",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      chain: [],
      feeDetails: {
        fees: [],
        totalFees: 0,
        message: "",
        title: "",
        amount: "",
        icon: "",
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: "",
      },
      longDistanceEnabled: 0,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "0.6 kms",
      hasSurge: false,
      sla: {
        restaurantId: "542132",
        deliveryTime: 28,
        minDeliveryTime: 28,
        maxDeliveryTime: 28,
        lastMileTravel: 0.6000000238418579,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: false,
      avgRating: "3.8",
      totalRatings: 50,
      new: false,
    },
    subtype: "basic",
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "413821",
      name: "Pizza Hut",
      uuid: "def78429-429b-4501-817c-b60f5e047883",
      city: "22",
      area: "Patel Nagar",
      totalRatingsString: "1000+ ratings",
      cloudinaryImageId: "cst4xfxkgt8dj5bbrxwy",
      cuisines: ["Pizzas"],
      tags: [],
      costForTwo: 35000,
      costForTwoString: "₹350 FOR TWO",
      deliveryTime: 26,
      minDeliveryTime: 26,
      maxDeliveryTime: 26,
      slaString: "26 MINS",
      lastMileTravel: 1.7999999523162842,
      slugs: {
        restaurant: "pizza-hut-dehradun-patel-nagar",
        city: "dehradun",
      },
      cityState: "22",
      address:
        "Pizza Hut at Shop No- 1 & 2, Ground Floor, Shree Ji Tower, Majra Saharanpur Road, Dehradun, Dehradun Nagar Nigam, Dehradun, Uttarakhand, 248001",
      locality: "Dehradun",
      parentId: 721,
      unserviceable: false,
      veg: false,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      aggregatedDiscountInfo: {
        header: "50% off",
        shortDescriptionList: [
          {
            meta: "50% off | Use WELCOME50",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "50% off up to ₹80 | Use code WELCOME50",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      aggregatedDiscountInfoV2: {
        header: "50% OFF",
        shortDescriptionList: [
          {
            meta: "Use WELCOME50",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "50% off up to ₹80 | Use code WELCOME50",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      chain: [],
      feeDetails: {
        fees: [],
        totalFees: 0,
        message: "",
        title: "",
        amount: "",
        icon: "",
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: "",
      },
      longDistanceEnabled: 0,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "1.7 kms",
      hasSurge: false,
      sla: {
        restaurantId: "413821",
        deliveryTime: 26,
        minDeliveryTime: 26,
        maxDeliveryTime: 26,
        lastMileTravel: 1.7999999523162842,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: false,
      avgRating: "3.7",
      totalRatings: 1000,
      new: false,
    },
    subtype: "basic",
  },
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "88166",
      name: "Nath'S Chinese",
      uuid: "75a5bf3d-ecb9-4acc-8ed5-adb5a0629741",
      city: "22",
      area: "Saharanpur Chowk",
      totalRatingsString: "10000+ ratings",
      cloudinaryImageId: "fsm15mqsuninmtb6twec",
      cuisines: ["Chinese", "Tandoor"],
      tags: [],
      costForTwo: 15000,
      costForTwoString: "₹150 FOR TWO",
      deliveryTime: 36,
      minDeliveryTime: 36,
      maxDeliveryTime: 36,
      slaString: "36 MINS",
      lastMileTravel: 5,
      slugs: {
        restaurant: "naths-chinese-race-course-race-course-dehradun",
        city: "dehradun",
      },
      cityState: "22",
      address: "278, Lakhi Bagh, Dehradun",
      locality: "Clock Tower",
      parentId: 13608,
      unserviceable: false,
      veg: false,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      aggregatedDiscountInfo: {
        header: "60% off",
        shortDescriptionList: [
          {
            meta: "60% off | Use TRYNEW",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "60% off up to ₹120 | Use code TRYNEW",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      aggregatedDiscountInfoV2: {
        header: "60% OFF",
        shortDescriptionList: [
          {
            meta: "Use TRYNEW",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "60% off up to ₹120 | Use code TRYNEW",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      ribbon: [
        {
          type: "PROMOTED",
        },
      ],
      chain: [],
      feeDetails: {
        fees: [],
        totalFees: 0,
        message: "",
        title: "",
        amount: "",
        icon: "",
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: "",
      },
      longDistanceEnabled: 0,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "cid=5687135~p=4~eid=00000185-dea6-e110-0074-e53100c10418",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "5 kms",
      hasSurge: false,
      sla: {
        restaurantId: "88166",
        deliveryTime: 36,
        minDeliveryTime: 36,
        maxDeliveryTime: 36,
        lastMileTravel: 5,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: true,
      avgRating: "4.1",
      totalRatings: 10000,
      new: false,
    },
    subtype: "basic",
  },
];


const AppLayout = () => {
  return (
    <>
      <Header />
      <Body />
      <Footer />
    </>
  );
};
//
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <AppLayout />
);

// const stylesObject = {
//   //   backgroundColor: '#1e0e05',
//   //   display: 'flex',
//   // 	alignItems: 'center',
//   // 	justifyContent: 'space-between',
//   // 	padding: '0 3rem',
//   // }
//   // // inline styles in React
//   // const jsx = (
//   //   <div style={stylesObject}>
//   //     <h4>JSX</h4>
//   //     <h6>Second JSX</h6>
//   //   </div>
//   // )
